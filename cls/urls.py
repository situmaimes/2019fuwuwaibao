from django.conf.urls import url

from . import views

urlpatterns = [
    url('^$', views.student),
    url('^studentsubmit', views.studentsubmit),
    url('^zzb', views.zzb),
    url("^zzbsubmit", views.zzbsubmit),
]