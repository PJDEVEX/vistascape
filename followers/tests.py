from django.contrib.auth.models import User
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from .models import Follower
from .serializers import FollowerSerializer


class FollowerViewsTestCase(TestCase):
    """
    Test case for Follower views.
    """

    def setUp(self):
        """
        Set up the necessary objects for testing.
        """
        self.user = User.objects.create_user(
            username="testuser", password="testpass"
        )
        self.client = APIClient()
        self.client.force_authenticate(user=self.user)

    def test_follower_list_view(self):
        """
        Test the follower list view.
        """
        response = self.client.get("/followers/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_follower_view(self):
        """
        Test the creation of a new follower.
        """
        another_user = User.objects.create_user(
            username="anotheruser", password="anotherpass"
        )
        response = self.client.post(
            "/followers/",
            {"followed": another_user.id},
            format="json",
        )
        self.assertEqual(
            response.status_code, status.HTTP_201_CREATED
        )

    def test_create_follower_duplicate(self):
        """
        Test the creation of a duplicate follower.
        """
        another_user = User.objects.create_user(
            username="anotheruser", password="anotherpass"
        )
        Follower.objects.create(
            owner=self.user, followed=another_user
        )
        response = self.client.post(
            "/followers/",
            {"followed": another_user.id},
            format="json",
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST
        )

    def test_follower_detail_view(self):
        """
        Test the follower detail view.
        """
        another_user = User.objects.create_user(
            username="anotheruser", password="anotherpass"
        )
        follower = Follower.objects.create(
            owner=self.user, followed=another_user
        )
        response = self.client.get(f"/followers/{follower.id}/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_delete_follower_view(self):
        """
        Test the deletion of a follower.
        """
        another_user = User.objects.create_user(
            username="anotheruser", password="anotherpass"
        )
        follower = Follower.objects.create(
            owner=self.user, followed=another_user
        )
        response = self.client.delete(f"/followers/{follower.id}/")
        self.assertEqual(
            response.status_code, status.HTTP_204_NO_CONTENT
        )
