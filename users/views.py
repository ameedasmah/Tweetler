from django.shortcuts import render
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from users.models import UserAccount
from users.serializers import UserSerializered
# Create your views here.

class UserList(generics.ListCreateAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserSerializered

@api_view(['POST'])
def details(request):
    myaccount = UserAccount.objects.get(id=request.data['id'])
    serializer = UserSerializered(myaccount, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def uploadImage(request):
    myaccount = UserAccount.objects.get(id=request.data['id'])
    myaccount.image = request.data['image']
    myaccount.save()
    print(myaccount.image)
    serializer = UserSerializered(myaccount, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def search(request):
    myaccount = UserAccount.objects.filter(name__icontains=request.data['name'])
    serializer = UserSerializered(myaccount, many=True)
    return Response(serializer.data)


