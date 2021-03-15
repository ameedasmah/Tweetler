from rest_framework import serializers
from tweets.models import Tweet
from comments.serializers import CommentSerializer
from likes.serializers import LikeSerializer
from favorite.serializers import FavouriteSerializer

class TweetSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user_id.name', read_only=True )
    userImage = serializers.CharField(source='user_id.image', read_only=True )
    comments = CommentSerializer(many=True, read_only=True)
    tweet_likes = LikeSerializer(many=True, read_only=True)
    tweet_bookmarks = FavouriteSerializer(many=True, read_only=True)
    class Meta:
        model = Tweet
        fields = ('id', 'user_id', 'user', 'userImage', 'content', 'image', 'created_at', 'comments', 'tweet_likes', 'tweet_bookmarks')
