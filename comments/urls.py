from django.urls import path, include
from comments.views import CommentList

urlpatterns = [
    path('', CommentList.as_view()),
]