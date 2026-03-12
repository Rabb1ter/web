from django.urls import path
from . import views

app_name = 'knowledge'

urlpatterns = [
    path('', views.index, name='index'),
    path('knowledge/', views.catalog, name='catalog'),
    path('knowledge/<slug:slug>/', views.detail, name='detail'),
]
