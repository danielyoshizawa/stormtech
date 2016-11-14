from rest_framework import serializers
from stormtech_django.models import Book


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book