from django.db import models
from django.contrib.auth.models import User


class Follower(models.Model):
    """
    Model representing a follower relationship between users.
    """

    owner = models.ForeignKey(
        User, related_name="following", on_delete=models.CASCADE
    )
    followed = models.ForeignKey(
        User, related_name="followed", on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        """
        Metadata options for the Follower model.
        """

        ordering = ["-created_at"]
        unique_together = ["owner", "followed"]

    def __str__(self):
        """
        Returns a string representation of the Follower instance.
        """
        return f"{self.owner} {self.followed}"
