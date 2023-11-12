from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.test import APIClient
from rest_framework import status
from .models import Profile
from posts.models import Post
from followers.models import Follower


class ProfileAPITest(TestCase):
    """
    Test case for the Profile API views.
    """

    def setUp(self):
        """
        Set up test data and objects.
        """
        self.user = User.objects.create_user(
            username="testuser", password="testpassword"
        )
        self.client = APIClient()
        self.client.login(
            username="testuser", password="testpassword"
        )

        existing_profile = Profile.objects.filter(
            owner=self.user
        ).first()

        if not existing_profile:
            self.profile = Profile.objects.create(owner=self.user)
        else:
            self.profile = existing_profile

    def test_profile_list(self):
        """
        Test the list view of profiles.
        """
        response = self.client.get("/profiles/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_profile_detail(self):
        """
        Test the detail view of a profile.
        """
        response = self.client.get(f"/profiles/1/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        updated_data = {"some_field": "new_value"}
        response = self.client.put(
            f"/profiles/1/", updated_data, format="json"
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        self.unauthorized_user = User.objects.create_user(
            username="unauthorized", password="unauthorizedpassword"
        )
        self.client.login(
            username="unauthorized", password="unauthorizedpassword"
        )
        response = self.client.put(
            f"/profiles/1/",
            {"some_field": "new_value"},
            format="json",
        )
        self.assertEqual(
            response.status_code, status.HTTP_403_FORBIDDEN
        )

    def test_profile_list_ordering(self):
        """
        Test ordering of profiles.
        """
        user1 = User.objects.create_user(
            username="user1", password="password1"
        )
        user2 = User.objects.create_user(
            username="user2", password="password2"
        )

        profile1 = Profile.objects.filter(owner=user1).first()
        profile2 = Profile.objects.filter(owner=user2).first()

        if not profile1:
            profile1 = Profile.objects.create(owner=user1)
        if not profile2:
            profile2 = Profile.objects.create(owner=user2)

        response = self.client.get("/profiles/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        profiles = response.json()
        expected_profiles_count = 3

        self.assertEqual(len(profiles), expected_profiles_count)

        self.assertEqual(profiles[0]["id"], profile2.id)
        self.assertEqual(profiles[1]["id"], profile1.id)
        self.assertEqual(profiles[2]["id"], self.profile.id)

    def test_profile_list_filtering(self):
        """
        Test filtering profiles based on a condition.

        Creates two users and their profiles, then sends a request to
        filter profiles with 0 posts. It asserts that the response
        includes profiles meeting the filtering condition.
        """
        user1 = User.objects.create_user(
            username="user1", password="password1"
        )
        user2 = User.objects.create_user(
            username="user2", password="password2"
        )

        profile1 = Profile.objects.filter(owner=user1).first()
        profile2 = Profile.objects.filter(owner=user2).first()

        if not profile1:
            profile1 = Profile.objects.create(
                owner=user1,
                name="Profile User 1",
                content="Profile Content User 1",
            )
        if not profile2:
            profile2 = Profile.objects.create(
                owner=user2,
                name="Profile User 2",
                content="Profile Content User 2",
            )

        response = self.client.get("/profiles/?posts_count=0")

        self.assertEqual(response.status_code, status.HTTP_200_OK)

        self.assertTrue(
            any(item["id"] == profile1.id for item in response.json())
        )

        self.assertTrue(
            any(item["id"] == profile2.id for item in response.json())
        )

        self.assertTrue(
            any(
                item["id"] == self.profile.id
                for item in response.json()
            )
        )

    def test_profile_list_ordering_followers(self):
        """
        Test ordering profiles based on the number of followers.

        Creates users, their profiles, and establishes follower
        relationships. Sends a request to list profiles, ordering them
        by the number of followers in descending order. Asserts that
        the response includes profiles in the correct order.
        """
        user1 = User.objects.create_user(
            username="user1", password="password1"
        )
        user2 = User.objects.create_user(
            username="user2", password="password2"
        )

        Follower.objects.create(owner=self.user, followed=user1)

        profile1 = Profile.objects.filter(owner=user1).first()
        profile2 = Profile.objects.filter(owner=user2).first()

        if not profile1:
            profile1 = Profile.objects.create(owner=user1)
        if not profile2:
            profile2 = Profile.objects.create(owner=user2)

        Follower.objects.create(owner=user1, followed=user2)
        Follower.objects.create(owner=user2, followed=self.user)

        response = self.client.get(
            "/profiles/", {"ordering": "-followers_count"}
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)

        profiles = response.json()
        expected_profiles_count = 3

        self.assertEqual(len(profiles), expected_profiles_count)

        self.assertEqual(profiles[0]["id"], self.profile.id)
        self.assertEqual(profiles[1]["id"], profile1.id)
        self.assertEqual(profiles[2]["id"], profile2.id)

    def test_profile_list_response_fields(self):
        """
        Test that the profile list response contains the expected fields.

        The expected fields include:
        - id
        - owner
        - created_at
        - updated_at
        - name
        - content
        - image
        - is_owner
        - following_id
        - posts_count
        - followers_count
        - following_count
        """
        response = self.client.get("/profiles/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        profiles = response.json()
        expected_fields = [
            "id",
            "owner",
            "created_at",
            "updated_at",
            "name",
            "content",
            "image",
            "is_owner",
            "following_id",
            "posts_count",
            "followers_count",
            "following_count",
        ]

        for field in expected_fields:
            self.assertTrue(
                all(field in profile for profile in profiles)
            )

    def test_no_profiles(self):
        """
        Test that the API returns an empty list when there are no profiles in the database.
        """
        Profile.objects.all().delete()

        response = self.client.get("/profiles/")

        self.assertEqual(response.status_code, status.HTTP_200_OK)

        self.assertEqual(len(response.json()), 0)

    def test_single_profile_in_database(self):
        """
        Test the behavior when a single profile is present in the database.

        It checks that the API returns the profile details and the details can be retrieved.
        """
        profiles_count_before = Profile.objects.count()
        self.assertEqual(profiles_count_before, 1)

        response = self.client.get("/profiles/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        profiles = response.json()
        self.assertEqual(len(profiles), 1)

        self.assertEqual(profiles[0]["id"], self.profile.id)
        self.assertEqual(profiles[0]["owner"], self.user.username)

        self.assertEqual(profiles[0]["id"], self.profile.id)

        detail_response = self.client.get(
            f"/profiles/{self.profile.id}/"
        )
        self.assertEqual(
            detail_response.status_code, status.HTTP_200_OK
        )
        self.assertEqual(
            detail_response.json()["id"], self.profile.id
        )

        self.client.logout()
        unauthorized_response = self.client.get(
            f"/profiles/{self.profile.id}/"
        )
        self.assertEqual(
            unauthorized_response.status_code, status.HTTP_200_OK
        )
