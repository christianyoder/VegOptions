from django.conf.urls import url
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    url(r'^get_wiki_summary/$', views.get_wiki_summary, name='get_wiki_summary'),
]