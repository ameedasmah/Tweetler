from django.urls import path, include
from users.views import UserList, details, uploadImage, search

urlpatterns = [
    path('all', UserList.as_view()),
    path('details', details),
    path('image', uploadImage),
    path('search', search),
]