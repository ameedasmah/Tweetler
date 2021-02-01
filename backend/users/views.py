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
    print(request.data)
    myaccount = UserAccount.objects.get(pk=request.data['pk'])
    serializer = UserSerializered(myaccount, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def uploadImg(request):
    print(">>>>>>>>>>>>>>")
    print(request.data)
    UserAccount.objects.filter(pk=request.data['user_Id']).update(
        image=request.data['image'])
    return Response({"success": True})
# @api_view(['POST'])
# def details(request):
#     myaccount = UserAccount.objects.all().filter(pk=request.data['pk'])
#     serializer = StudentCreateSerializer(myaccount, many=True)
#     return Response(serializer.data)
