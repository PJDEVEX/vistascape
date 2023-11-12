from django.db import IntegrityError
from rest_framework import serializers
from .models import Follower


class FollowerSerializer(serializers.ModelSerializer):
    """
    Serializer for the Follower model.

    Create method handles the unique constraint on 'owner' and 'followed'.
    """

    owner = serializers.ReadOnlyField(source="owner.username")
    followed_name = serializers.ReadOnlyField(
        source="followed.username"
    )

    class Meta:
        """
        Meta class for FollowerSerializer.
        Defines the model and fields for serialization.
        """

        model = Follower
        fields = [
            "id",
            "owner",
            "created_at",
            "followed",
            "followed_name",
        ]

    def create(self, validated_data):
        """
        Create method to handle the creation of Follower instances.

        Tries to create the instance and raises a validation error in case of IntegrityError.
        """
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError(
                {"detail": "possible duplicate"}
            )
