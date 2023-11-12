from django.db.utils import IntegrityError
from django.contrib.auth.models import User
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from .models import Like
from posts.models import Post
from .serializers import LikeSerializer


class LikeViewsTestCase(TestCase):
    """
    Test case for Like views.
    """

    def setUp(self):
        """
        Set up initial data for tests.
        """
        self.user = User.objects.create_user(
            username="testuser", password="testpass"
        )
        self.post = Post.objects.create(
            title="Test Post", content="Test content", owner=self.user
        )
        self.other_user = User.objects.create_user(
            username="otheruser", password="otherpass"
        )
        self.other_post = Post.objects.create(
            title="Other Post",
            content="Other content",
            owner=self.other_user,
        )
        self.client = APIClient()
        self.client.force_authenticate(user=self.user)
        self.like = Like.objects.create(
            owner=self.user, post=self.post
        )
        self.like_other_user = Like.objects.create(
            owner=self.other_user, post=self.other_post
        )

    def test_create_like_view(self):
        """
        Test create like view with a possible duplicate.
        """
        response = self.client.post(
            "/likes/", {"post": self.post.id}, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST
        )
        self.assertEqual(
            response.data.get("detail"), "possible duplicate"
        )

    def test_create_like_view_success(self):
        """
        Test create like view successfully.
        """
        new_post = Post.objects.create(
            title="Another Post",
            content="Another content",
            owner=self.user,
        )
        response = self.client.post(
            "/likes/", {"post": new_post.id}, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_201_CREATED
        )
        self.assertEqual(
            response.data.get("owner"), self.user.username
        )
        self.assertEqual(response.data.get("post"), new_post.id)

    def test_create_like_same_post_twice(self):
        """
        Test create like view for the same post twice.
        """
        response = self.client.post(
            "/likes/", {"post": self.post.id}, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST
        )
        self.assertEqual(
            response.data.get("detail"), "possible duplicate"
        )

    def test_delete_own_like(self):
        """
        Test delete own like.
        """
        response = self.client.delete(f"/likes/{self.like.id}/")
        self.assertEqual(
            response.status_code, status.HTTP_204_NO_CONTENT
        )
        self.assertFalse(
            Like.objects.filter(id=self.like.id).exists()
        )

    def test_retrieve_own_like_details(self):
        """
        Test retrieve own like details.
        """
        response = self.client.get(f"/likes/{self.like.id}/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(
            response.data.get("owner"), self.user.username
        )
        self.assertEqual(response.data.get("post"), self.post.id)

    def test_delete_other_user_like(self):
        """
        Test delete other user's like (forbidden).
        """
        response = self.client.delete(
            f"/likes/{self.like_other_user.id}/"
        )
        self.assertEqual(
            response.status_code, status.HTTP_403_FORBIDDEN
        )
        self.assertTrue(
            Like.objects.filter(id=self.like_other_user.id).exists()
        )
