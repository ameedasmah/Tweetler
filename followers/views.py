from django.shortcuts import render
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from followers.models import Follower
from followers.serializers import FollowerSerializer
# Create your views here.

class FollowerList(generics.ListCreateAPIView):
    queryset = Follower.objects.all()
    serializer_class = FollowerSerializer

@api_view(['POST'])
def unFollow(request):
    follow = Follower.objects.get(id=request.data['id'])
    follow.delete()
    
    return Response({'success':True})


