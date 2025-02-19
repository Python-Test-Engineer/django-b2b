from django.urls import path
from htmx import views

app_name = "htmx"

urlpatterns = [
    path("", views.index, name="index"),
]
