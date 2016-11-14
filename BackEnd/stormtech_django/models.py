from django.db import models

class Book(models.Model):
    title = models.TextField(max_length=256, blank=False, null=False, default='')
    author = models.TextField(max_length=256, blank=False, null=False, default='')
    year = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.title
