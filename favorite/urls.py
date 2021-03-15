from django.urls import path, include
from favorite.views import FavouriteList

urlpatterns = [
    path('', FavouriteList.as_view()),
]