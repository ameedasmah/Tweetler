from rest_framework import serializers
from favorite.models import Favourite

class FavouriteSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user_id.name', read_only=True )
    userImage = serializers.CharField(source='user_id.Image', read_only=True )
    content = serializers.CharField(source='tweet_id.content', read_only=True )
    class Meta:
        model = Favourite
        fields = ('id', 'user_id', 'user', 'userImage', 'tweet_id', 'content')
        