from django.urls import path, include
from likes.views import LikeList, unLike

urlpatterns = [
    path('', LikeList.as_view()),
    path('remove', unLike),
]