from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from .views import logout_route

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/api-auth/", include("rest_framework.urls")),
    # Ensure custom logout route precedes the default 
    #  in Django REST auth URLs.
    path("api/dj-rest-auth/logout/", logout_route),
    path("api/dj-rest-auth/", include("dj_rest_auth.urls")),
    path(
        "dj-rest-auth/registration/",
        include("dj_rest_auth.registration.urls"),
    ),
    path("", TemplateView.as_view(template_name='index.html')),
    path("api/", include("profiles.urls")),
    path("api/", include("posts.urls")),
    path("api/", include("comments.urls")),
    path("api/", include("likes.urls")),
    path("api/", include("followers.urls")),
]

handler404 = TemplateView.as_view(template_name='index.html')