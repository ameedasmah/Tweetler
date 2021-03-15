from django.shortcuts import render
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from likes.models import Like
from likes.serializers import LikeSerializer

class LikeList(generics.ListCreateAPIView):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer

@api_view(['POST'])
def unLike(request):
    like = Like.objects.get(id=request.data['id'])
    like.delete()
    
    return Response({'success':True})



