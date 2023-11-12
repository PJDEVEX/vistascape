from rest_framework import generics, permissions, filters
from django.db.models import Count
from django_filters.rest_framework import DjangoFilterBackend
from drf_api.permissions import IsOwnerOrReadOnly
from .models import Post
from .serializers import PostSerializer


class PostList(generics.ListCreateAPIView):
    """
    List posts or create a post if logged in
    The perform_create method associates the post with the logged in user.
    """
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Post.objects.annotate(
        likes_count=Count("owner__like", distinct=True),
        comments_count=Count("owner__comment", distinct=True)).order_by("-created_at")
    serializer_class = PostSerializer
    filter_backends = [filters.OrderingFilter, filters.SearchFilter, DjangoFilterBackend]
    ordering_fields = [
        "likes_count",
        "comments_count",
    ]
    search_fields = ['owner__username', 'title']

    filterset_fields = ['owner__profile', 'owner__followed__owner__profile', 'likes__owner__profile']    

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a post and edit or delete it if you own it.
    """
    serializer_class = PostSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Post.objects.all()
