from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    #path('', include('django_nextjs.urls')),
    path('', include('recipes.urls')),
    path('admin/', admin.site.urls),
]
