from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("core.urls")),
    path("core/", include("core.urls")),
    path("products/", include("products.urls")),
    path("htmx/", include("htmx.urls")),
]
