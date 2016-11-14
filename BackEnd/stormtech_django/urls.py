from django.conf.urls import url, include
from stormtech_django.views import BookViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'books', BookViewSet)

urlpatterns = [
    url(r'^', include(router.urls))
]