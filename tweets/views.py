from django.shortcuts import render
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from tweets.models import Tweet
from users.models import UserAccount
from tweets.serializers import TweetSerializer
from users.serializers import UserSerializered

from datetime import datetime 
# Create your views here.

class TweetList(generics.ListCreateAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

@api_view(['POST'])
def details(request):
    tweet = Tweet.objects.get(id=request.data['id'])
    serializer = TweetSerializer(tweet, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def bookmakrs(request):
    bookmakrs = []
    for v in request.data['user_bookmarks']:
        tweet = Tweet.objects.get(id=v['tweet_id'])
        bookmakrs.append(tweet)
    print(bookmakrs)
    serializer = TweetSerializer(bookmakrs, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def following(request):
    following = []

    for v in request.data['userTo']:
        tweets = Tweet.objects.all().filter(user_id=v['user_to'])
        for v in tweets:
            following.append(v)
    
    serializer = TweetSerializer(following, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def search(request):
    tweets = Tweet.objects.filter(content__icontains=request.data['content'])
    serializer = TweetSerializer(tweets, many=True)
    return Response(serializer.data)

