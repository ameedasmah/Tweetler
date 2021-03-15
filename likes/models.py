from django.db import models
from users.models import UserAccount
from tweets.models import Tweet

class Like(models.Model):
    user_id = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name='user_likes')
    tweet_id = models.ForeignKey(Tweet, on_delete=models.CASCADE, related_name='tweet_likes')

    class Meta:
        unique_together = ('user_id','tweet_id')

    def __str__(self):
        return "%s %s" % (self.user_id.name, self.tweet_id.content)


# Create your models here.
