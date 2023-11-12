from django.db import models
from django.contrib.auth.models import User
from posts.models import Post


class Like(models.Model):
    """
    Represents a Like on a Post by a User.
    """

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, related_name="likes"
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        """
        Meta class for the Like model to specify additional properties.
        """

        ordering = ["-created_at"]
        unique_together = ["owner", "post"]

    def __str__(self):
        """
        Returns a string representation of the Like object.
        """
        return f"{self.owner.username} likes {self.post.title}"
