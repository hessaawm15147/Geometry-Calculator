from django.urls import path
from project import views

urlpatterns = [
    path('', views.index, name='index')
]