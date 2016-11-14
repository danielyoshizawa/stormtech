from rest_framework import viewsets
from stormtech_django.models import Book
from stormtech_django.serializer import BookSerializer


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

