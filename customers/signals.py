from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

from customers.models import Profile


@receiver(post_save, sender=User, dispatch_uid='save_new_user_profile')
def save_profile(sender, instance, created, **kwargs):
    if created:
        profile = Profile(user=instance)
        profile.save()
