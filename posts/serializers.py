from rest_framework import serializers
from likes.models import Like
from comments.models import Comment
from profiles.serializers import ProfileSerializer
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    profile_image = serializers.ReadOnlyField(source='owner.profile.image.url')
    like_id = serializers.ReadOnlyField()
    likes_count = serializers.ReadOnlyField()
    comments_count = serializers.ReadOnlyField()

    def get_is_owner(self, obj):
        request = self.context.get('request')
        return request.user == obj.owner

    def get_like_id(self, obj):
        user = self.context['request'].user
        if user.is_authenticated:
            like = Like.objects.filter(
                owner=user, post=obj
            ).first()
            return like.id if like else None
        return None

    def validate_image(self, value):
        if value.size > 1024 * 1024 * 2:
            raise serializers.ValidationError('Image size larger than 2MB!')
        if value.width > 4096:
            raise serializers.ValidationError('Image width larger than 4096px')
        if value.height > 4096:
            raise serializers.ValidationError('Image height larger than 4096px')
        return value
    
    class Meta:
        model = Post
        fields = ['id', 'owner', 'created_at', 'updated_at', 'title', 'content', 'image', 'is_owner', 'profile_id', 'profile_image', 'like_id', 'likes_count', "comments_count"]
