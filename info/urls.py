from django.conf.urls import url
from django.urls import path

from . import views

urlpatterns = [
    url('^$', views.info_index),
    url("^index_home", views.index_home),
    url("^json/item.json", views.item),
    url("^json/brand.json", views.brand),

]
