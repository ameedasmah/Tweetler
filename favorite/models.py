from django.db import models
from users.models import UserAccount
from tweets.models import Tweet

# Create your models here.
class Favourite(models.Model):
    user_id = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name='user_bookmarks')
    tweet_id = models.ForeignKey(Tweet, on_delete=models.CASCADE, related_name='tweet_bookmarks')
    
    class Meta:
        unique_together = ('user_id','tweet_id')

    def __str__(self):
        return self.user_id.name