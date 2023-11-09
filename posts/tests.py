from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Post

class PostListViewTests(APITestCase):
    def setUp(self):
        User.objects.create_user(username='adam', password='pass')
    
    def test_can_list_posts(self):
        adam = User.objects.get(username='adam')
        Post.objects.create(owner=adam, title='a title')
        response = self.client.get('/posts/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        print(response.data, len(response.data))
    
    def test_logged_in_user_can_create_post(self):
        self.client.login(username='adam', password='pass')
        response = self.client.post('/posts/', {'title': 'a title'})
        count = Post.objects.count()
        self.assertEqual(count, 1)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
    
    def test_unauthenticated_user_cannot_create_post(self):
        self.client.logout()
        response = self.client.post('/posts/', {'title': 'a title'})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)


class PostDetailViewTests(APITestCase):
    def setUp(self):
        self.adam = User.objects.create_user(username='adam', password='pass')
        self.brian = User.objects.create_user(username='brian', password='pass')
        self.post_adam = Post.objects.create(owner=self.adam, title='a title', content='adams content')
        self.post_brian = Post.objects.create(owner=self.brian, title='some other title', content='brians content')

    def test_can_retrieve_post_using_valid_id(self):
        response = self.client.get(f'/posts/{self.post_adam.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], 'a title')
    
    def test_retrieve_post_with_invalid_id_returns_404(self):
        invalid_id = 99999
        response = self.client.get(f'/posts/{invalid_id}/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
    
    def test_user_can_update_own_post(self):
        self.client.login(username='adam', password='pass')
        response = self.client.put('/posts/1/', {'title': 'a new title'})
        post = Post.objects.filter(pk=1).first()
        self.assertEqual(post.title, 'a new title')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
    def test_user_cannot_update_another_users_post(self):
        self.client.login(username='adam', password='pass')
        response = self.client.put(f'/posts/{self.post_brian.id}/', {'title': 'Updated Title'})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
