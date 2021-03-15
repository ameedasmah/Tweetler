from django.db import models
from tweets.models import Tweet
from users.models import UserAccount

# Create your models here.
class Comment(models.Model):
    user_id = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name='user_comments')
    tweet_id = models.ForeignKey(Tweet, on_delete=models.CASCADE, related_name='comments')
    content = models.CharField(max_length=5000)
    image = models.CharField(max_length=1000, default='', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "%s %s %s" % (self.user_id.name, self.tweet_id.content, self.content)