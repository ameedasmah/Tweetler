from djoser.serializers import UserCreateSerializer, UserSerializer
from rest_framework import serializers

from tweets.serializers import TweetSerializer
from comments.serializers import CommentSerializer
from likes.serializers import LikeSerializer
from followers.serializers import FollowerSerializer
from favorite.serializers import FavouriteSerializer
from django.contrib.auth import get_user_model
User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'name', 'password')

class UserSerializered(serializers.ModelSerializer):
    tweets = TweetSerializer(many=True, read_only=True)
    user_comments = CommentSerializer(many=True, read_only=True)
    user_likes = LikeSerializer(many=True, read_only=True)
    userFrom = FollowerSerializer(many=True, read_only=True)
    userTo = FollowerSerializer(many=True, read_only=True)
    user_bookmarks = FavouriteSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ('id' , 'email', 'name', 'image', 'tweets', 'user_comments','user_likes', 'userFrom', 'userTo', 'user_bookmarks')