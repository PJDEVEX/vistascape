from rest_framework import generics, permissions
from drf_api.permissions import IsOwnerOrReadOnly
from .models import Like
from .serializers import LikeSerializer


class LikeList(generics.ListCreateAPIView):
    """
    API endpoint for listing and creating Like instances.
    """

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = LikeSerializer
    queryset = Like.objects.all()

    def perform_create(self, serializer):
        """
        Save the owner of the Like instance as the current user.
        """
        serializer.save(owner=self.request.user)


class LikeDetail(generics.RetrieveDestroyAPIView):
    """
    API endpoint for retrieving and deleting a specific Like instance.
    """

    permission_classes = [IsOwnerOrReadOnly]
    queryset = Like.objects.all()
    serializer_class = LikeSerializer
