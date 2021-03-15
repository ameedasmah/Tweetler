from django.urls import path, include
from followers.views import FollowerList, unFollow

urlpatterns = [
    path('', FollowerList.as_view()),
    path('remove', unFollow),
    
]