from django.shortcuts import render
from rest_framework import generics

from comments.models import Comment
from comments.serializers import CommentSerializer
# Create your views here.

class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
