from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Post
from likes.models import Like
from .serializers import PostSerializer


class PostListViewTests(APITestCase):
    """
    Test cases for the PostList view.
    """

    def setUp(self):
        """
        Set up the initial data for the tests.
        """
        self.adam = User.objects.create_user(
            username="adam", password="pass"
        )

    def test_can_list_posts(self):
        """
        Test listing posts.
        """
        adam = User.objects.get(username="adam")
        Post.objects.create(owner=adam, title="a title")
        response = self.client.get("/posts/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_logged_in_user_can_create_post(self):
        """
        Test creating a post by a logged-in user.
        """
        self.client.login(username="adam", password="pass")
        response = self.client.post("/posts/", {"title": "a title"})
        count = Post.objects.count()
        self.assertEqual(count, 1)
        self.assertEqual(
            response.status_code, status.HTTP_201_CREATED
        )

    def test_unauthenticated_user_cannot_create_post(self):
        """
        Test that an unauthenticated user cannot create a post.
        """
        self.client.logout()
        response = self.client.post("/posts/", {"title": "a title"})
        self.assertEqual(
            response.status_code, status.HTTP_403_FORBIDDEN
        )

    def test_list_posts_response(self):
        """
        Test the response format and fields for listing posts.
        """
        adam = User.objects.get(username="adam")
        Post.objects.create(owner=adam, title="a title")

        response = self.client.get("/posts/")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIsInstance(response.data, list)

        expected_fields = [
            "id",
            "owner",
            "created_at",
            "updated_at",
            "title",
            "content",
            "likes_count",
            "comments_count",
        ]

        for post_data in response.data:
            self.assertTrue(
                all(field in post_data for field in expected_fields)
            )

        self.assertGreater(len(response.data), 0)

    def test_authenticated_user_can_create_post(self):
        """
        Test that an authenticated user can create a post.
        """
        self.client.login(username="adam", password="pass")

        response = self.client.post(
            "/posts/", {"title": "New Post Title"}
        )

        self.assertEqual(
            response.status_code, status.HTTP_201_CREATED
        )

        count = Post.objects.count()
        created_post = Post.objects.first()

        self.assertEqual(count, 1)
        self.assertEqual(created_post.title, "New Post Title")
        self.assertEqual(created_post.owner, self.adam)

        self.assertEqual(response.data["title"], "New Post Title")
        self.assertEqual(response.data["owner"], self.adam.username)

    def test_user_can_delete_own_post(self):
        """
        Test that a user can delete their own post.
        """
        self.client.login(username="adam", password="pass")
        self.post_adam = Post.objects.create(
            owner=self.adam, title="a title", content="adams content"
        )
        response = self.client.delete(f"/posts/{self.post_adam.id}/")
        self.assertEqual(
            response.status_code, status.HTTP_204_NO_CONTENT
        )

        post_exists = Post.objects.filter(
            pk=self.post_adam.id
        ).exists()
        self.assertFalse(post_exists)


class PostDetailViewTests(APITestCase):
    """
    Test cases for the PostDetail view.
    """

    def setUp(self):
        """
        Set up the initial data for the tests.
        """
        self.adam = User.objects.create_user(
            username="adam", password="pass"
        )
        self.brian = User.objects.create_user(
            username="brian", password="pass"
        )
        self.post_adam = Post.objects.create(
            owner=self.adam, title="a title", content="adams content"
        )
        self.post_brian = Post.objects.create(
            owner=self.brian,
            title="some other title",
            content="brians content",
        )

    def test_can_retrieve_post_using_valid_id(self):
        """
        Test retrieving a post using a valid ID.
        """
        response = self.client.get(f"/posts/{self.post_adam.id}/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["title"], "a title")

    def test_retrieve_post_with_invalid_id_returns_404(self):
        """
        Test retrieving a post with an invalid ID returns a 404.
        """
        invalid_id = 99999
        response = self.client.get(f"/posts/{invalid_id}/")
        self.assertEqual(
            response.status_code, status.HTTP_404_NOT_FOUND
        )

    def test_user_can_update_own_post(self):
        """
        Test that a user can update their own post.
        """
        self.client.login(username="adam", password="pass")
        response = self.client.put(
            "/posts/1/", {"title": "a new title"}
        )
        post = Post.objects.filter(pk=1).first()
        self.assertEqual(post.title, "a new title")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_user_cannot_update_another_users_post(self):
        """
        Test that a user cannot update another user's post.
        """
        self.client.login(username="adam", password="pass")
        response = self.client.put(
            f"/posts/{self.post_brian.id}/",
            {"title": "Updated Title"},
        )
        self.assertEqual(
            response.status_code, status.HTTP_403_FORBIDDEN
        )

    def test_user_can_delete_own_post(self):
        """
        Test that a user can delete their own post.
        """
        self.client.login(username="adam", password="pass")
        response = self.client.delete(f"/posts/{self.post_adam.id}/")
        self.assertEqual(
            response.status_code, status.HTTP_204_NO_CONTENT
        )

        post_exists = Post.objects.filter(
            pk=self.post_adam.id
        ).exists()
        self.assertFalse(post_exists)

    def test_user_cannot_delete_another_users_post(self):
        """
        Test that a user cannot delete another user's post.
        """
        self.client.login(username="brian", password="pass")
        response = self.client.delete(f"/posts/{self.post_adam.id}/")
        self.assertEqual(
            response.status_code, status.HTTP_403_FORBIDDEN
        )

    def test_update_post_with_invalid_id_returns_404(self):
        """
        Test updating a post with an invalid ID returns a 404.
        """
        self.client.login(username="adam", password="pass")
        invalid_id = 99999
        response = self.client.put(
            f"/posts/{invalid_id}/", {"title": "Updated Title"}
        )
        self.assertEqual(
            response.status_code, status.HTTP_404_NOT_FOUND
        )
