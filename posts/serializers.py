from rest_framework import serializers
from likes.models import Like
from comments.models import Comment
from profiles.serializers import ProfileSerializer
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    """
    Serializer for the Post model.
    """

    owner = serializers.ReadOnlyField(source="owner.username")
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source="owner.profile.id")
    profile_image = serializers.ReadOnlyField(
        source="owner.profile.image.url"
    )
    like_id = serializers.ReadOnlyField()
    likes_count = serializers.ReadOnlyField()
    comments_count = serializers.ReadOnlyField()

    def get_is_owner(self, obj):
        """
        Method to determine if the requesting user is the owner of the post.
        """
        request = self.context.get("request")
        return request.user == obj.owner

    def get_like_id(self, obj):
        """
        Method to get the like ID for the requesting user on the post.
        """
        user = self.context["request"].user
        if user.is_authenticated:
            like = Like.objects.filter(owner=user, post=obj).first()
            return like.id if like else None
        return None

    def validate_image(self, value):
        """
        Method to validate the size and dimensions of the uploaded image.
        """

        def validate_image(self, value):
            if value.size > 2 * 1024 * 1024:
                raise serializers.ValidationError(
                    "Image size larger than 2MB!"
                )
            if value.image.height > 4096:
                raise serializers.ValidationError(
                    "Image height larger than 4096px!"
                )
            if value.image.width > 4096:
                raise serializers.ValidationError(
                    "Image width larger than 4096px!"
                )
            return value

    class Meta:
        """
        Meta class specifying the model and fields for the PostSerializer.
        """

        model = Post
        fields = [
            "id",
            "owner",
            "created_at",
            "updated_at",
            "title",
            "content",
            "image",
            "image_filter",
            "is_owner",
            "profile_id",
            "profile_image",
            "like_id",
            "likes_count",
            "comments_count",
        ]
