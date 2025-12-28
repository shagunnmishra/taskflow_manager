# backend/models.py
from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=100)
    status = models.CharField(max_length=20, default="Pending")

    def __str__(self):
        return self.title
