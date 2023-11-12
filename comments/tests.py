from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.test import APITestCase
from posts.models import Post
from .models import Comment


class CommentListViewTests(APITestCase):
    def setUp(self):
        # Create a user
        self.user = User.objects.create_user(
            username="testuser", password="testpass"
        )

        # Create a post with the user as the owner
        self.post = Post.objects.create(
            title="Test Post", content="Test content", owner=self.user
        )

    def test_can_list_comments(self):
        self.client.force_authenticate(user=self.user)
        Comment.objects.create(
            owner=self.user, post=self.post, content="Test comment"
        )
        response = self.client.get("/comments/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["content"], "Test comment")

    def test_unauthenticated_user_cannot_create_comment(self):
        self.client.logout()
        response = self.client.post(
            "/comments/", {"content": "New comment"}
        )
        self.assertEqual(
            response.status_code, status.HTTP_403_FORBIDDEN
        )

    def test_authenticated_user_can_create_comment(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.post(
            "/comments/",
            {"content": "New comment", "post": self.post.id},
        )
        self.assertEqual(
            response.status_code, status.HTTP_201_CREATED
        )
        self.assertEqual(Comment.objects.count(), 1)
        self.assertEqual(
            Comment.objects.first().content, "New comment"
        )
        self.assertEqual(Comment.objects.first().owner, self.user)


class CommentDetailViewTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username="testuser", password="testpass"
        )
        self.post = Post.objects.create(
            title="Test Post", content="Test content", owner=self.user
        )
        self.comment = Comment.objects.create(
            owner=self.user, post=self.post, content="Test comment"
        )

    def test_can_retrieve_comment(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.get(f"/comments/{self.comment.id}/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["content"], "Test comment")

    def test_unauthenticated_user_cannot_update_comment(self):
        self.client.logout()
        response = self.client.put(
            f"/comments/{self.comment.id}/",
            {"content": "Updated comment"},
        )
        self.assertEqual(
            response.status_code, status.HTTP_403_FORBIDDEN
        )

    def test_authenticated_user_can_update_own_comment(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.put(
            f"/comments/{self.comment.id}/",
            {"content": "Updated comment"},
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.comment.refresh_from_db()
        self.assertEqual(self.comment.content, "Updated comment")

    def test_authenticated_user_cannot_update_other_user_comment(
        self,
    ):
        other_user = User.objects.create_user(
            username="otheruser", password="testpass"
        )
        self.client.force_authenticate(user=other_user)
        response = self.client.put(
            f"/comments/{self.comment.id}/",
            {"content": "Updated comment"},
        )
        self.assertEqual(
            response.status_code, status.HTTP_403_FORBIDDEN
        )
