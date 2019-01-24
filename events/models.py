from django.db import models
# model for entering data to create events
class Event(models.Model):
    title = models.CharField(max_length=30)
    body = models.TextField(max_length=140)
    date = models.DateTimeField()
    image = models.ImageField(blank=True, null=True)

    def __str__(self):
        return self.title 