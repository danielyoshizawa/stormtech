from rest_framework import viewsets
from rest_framework.decorators import list_route, detail_route
from rest_framework.response import Response

from stormtech_django.models import Book
from stormtech_django.serializer import BookSerializer


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    @list_route()
    def sorted_books(self, request):
        books = self.get_object()

        return Response(200)

    @detail_route(methods=['post'])
    def sort_books(self, request):
        instance = self.get_object()
        sorted(instance, key= lambda book: book.title)
        serializer = BookSerializer(instance)

        return Response(serializer.data);