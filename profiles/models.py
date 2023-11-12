from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save


class Profile(models.Model):
    """
    Model representing user profiles.
    """

    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=255, blank=True)
    content = models.TextField(blank=True)
    image = models.ImageField(
        upload_to="images/",
        default="../default_profile_gj2yan.jpg",
        blank=True,
    )

    class Meta:
        """
        Meta class for defining metadata options for the Profile model.
        """

        ordering = ["-created_at"]

    def __str__(self):
        """
        Returns a string representation of the profile owner's username.
        """
        return f"{self.owner}'s profile"


def create_profile(sender, instance, created, **kwargs):
    """
    Signal handler to create a profile when a new user is created.
    """
    if created:
        Profile.objects.create(owner=instance)


post_save.connect(create_profile, sender=User)
