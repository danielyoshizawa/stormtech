from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=256, blank=False, null=False, default='')
    author = models.CharField(max_length=256, blank=False, null=False, default='')
    year = models.IntegerField(max_length=4, blank=True, null=True)

    def __str__(self):
        return self.title
