from django.urls import path, include
from tweets.views import TweetList, details, bookmakrs

urlpatterns = [
    path('', TweetList.as_view()),
    path('details/', details),
    path('bookmakrs/', bookmakrs)


]
