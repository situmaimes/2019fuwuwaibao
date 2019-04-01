from django.conf.urls import url
from django.urls import path

from . import views

urlpatterns = [
    url('^$', views.index),
    url("^huaxiang", views.huaxiang , name='huaxiang'),
    url("^item.json", views.item),
    path('img/<str:file_name>/', views.read_img, name='vote'),
    url("^ask", views.ask),
]