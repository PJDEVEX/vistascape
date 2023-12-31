from django.db.utils import IntegrityError
from rest_framework import serializers
from likes.models import Like


class LikeSerializer(serializers.ModelSerializer):
    """
    Serializer for the Like model.

    The create method handles the unique constraint on 'owner' and 'post'.
    """

    owner = serializers.ReadOnlyField(source="owner.username")

    class Meta:
        """
        Meta class for the LikeSerializer.
        Specifies the model and fields for serialization.
        """

        model = Like
        fields = ["id", "created_at", "owner", "post"]

    def create(self, validated_data):
        """
        Create method for handling the creation of a Like instance.
        """
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError(
                {"detail": "possible duplicate"}
            )
