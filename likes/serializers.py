from rest_framework import serializers
from likes.models import Like


class LikeSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user_id.name', read_only=True)

    class Meta:
        model = Like
        fields = '__all__'
