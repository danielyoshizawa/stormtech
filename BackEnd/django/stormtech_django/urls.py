from django.conf.urls import url, include
from stormtech_django.views import BookViewSet, SortedListViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'books', BookViewSet)
router.register(r'sorted', SortedListViewSet)

urlpatterns = [
    url(r'^', include(router.urls))
]