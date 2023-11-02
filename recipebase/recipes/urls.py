from django.urls import path
from .views import index, browse

urlpatterns = [
    path("", index, name="index"),
    path("browse", browse, name="browse"),
]