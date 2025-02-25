from django.urls import path
from products import views

app_name = "products"

urlpatterns = [
    path("", views.index, name="index"),
    path('add/', views.product_add_edit, name='product_add'),
    path('<pk>/edit/', views.product_add_edit, name='product_edit'),
]