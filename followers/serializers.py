from rest_framework import serializers
from followers.models import Follower

class FollowerSerializer(serializers.ModelSerializer):
    userTo = serializers.CharField(source='user_to.name', read_only=True)
    userFrom = serializers.CharField(source='user_from.name', read_only=True)
    class Meta:
        model = Follower
        fields = ('id', 'user_to', 'userTo', 'user_from', 'userFrom', 'created_at')

