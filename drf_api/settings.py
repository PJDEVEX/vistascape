import os
from pathlib import Path
import dj_database_url


# Load environment variables from 'env.py' file if present
if os.path.exists("env.py"):
    import env

# Base directory of the Django project
BASE_DIR = Path(__file__).resolve().parent.parent

# Django secret key
SECRET_KEY = os.environ.get("SECRET_KEY")

# Development mode indicator
DEV = os.environ.get("DEV")

# Debug mode based on the presence of 'DEBUG' in environment variables
DEBUG = "DEBUG" in os.environ

# Allowed hosts
ALLOWED_HOSTS = [
    "8000-pjdevex-vistascape-6h836ku7ccn.ws-eu107.gitpod.io",
    "127.0.0.1",
    *os.environ.get("ALLOWED_HOSTS", "").split(
        ","
    ),  # Allow multiple hosts from environment variable
]

# List of installed Django apps
INSTALLED_APPS = [
    # Core Django apps
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    # 3rd party apps
    "cloudinary_storage",
    "cloudinary",
    "rest_framework",
    "django_filters",
    "rest_framework.authtoken",
    "dj_rest_auth",
    "dj_rest_auth.registration",
    "django.contrib.sites",
    "allauth",
    "allauth.account",
    "allauth.socialaccount",
    "corsheaders",
    # Custom apps
    "profiles",
    "posts",
    "comments",
    "likes",
    "followers",
]

SITE_ID = 1

# Django REST framework settings
REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework.authentication.SessionAuthentication"
        if "DEV" in os.environ
        else "dj_rest_auth.jwt_auth.JWTCookieAuthentication"
    ],
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.PageNumberPagination",
    "PAGE_SIZE": 20,
    "DATETIME_FORMAT": "%d %b %Y",
}

# Configure default renderer for non-development environments
if "DEV" not in os.environ:
    REST_FRAMEWORK["DEFAULT_RENDERER_CLASSES"] = [
        "rest_framework.renderers.JSONRenderer"
    ]

# JWT authentication settings
REST_USE_JWT = True
JWT_AUTH_COOKIE = "my-app-auth"
JWT_AUTH_SECURE = True
JWT_AUTH_REFRESH_COOKIE = "my-refresh-token"
JWT_AUTH_SAMESITE = "None"

# Cross-Origin Resource Sharing
CORS_ALLOW_CREDENTIALS = True

# Additional serializers for Django REST framework authentication
REST_AUTH_SERIALIZERS = {
    "USER_DETAILS_SERIALIZER": "drf_api.serializers.CurrentUserSerializer"
}

# Django middleware configuration
MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

# Configure CORS origins if 'CLIENT_ORIGIN' is present in environment variables
if "CLIENT_ORIGIN" in os.environ:
    CORS_ALLOWED_ORIGINS = [os.environ.get("CLIENT_ORIGIN")]

# Django project URL configuration
ROOT_URLCONF = "drf_api.urls"

# Django template settings
TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [os.path.join(BASE_DIR, 'staticfiles', 'build')],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

# WSGI application for Django project
WSGI_APPLICATION = "drf_api.wsgi.application"

# Default language code and time zone
LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"

# Internationalization
USE_I18N = True
USE_L10N = True
USE_TZ = True

# Database
DATABASES = {
    "default": (
        {
            "ENGINE": "django.db.backends.sqlite3",
            "NAME": BASE_DIR / "db.sqlite3",
        }
        if "DEV" in os.environ
        else dj_database_url.parse(os.environ.get("DATABASE_URL"))
    )
}

# Password validation
AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

# Static and media file
STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / "staticfiles"
WHITENOISE_ROOT = BASE_DIR / "staticfiles" / "build"
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
MEDIA_URL = "/media/"
DEFAULT_FILE_STORAGE = (
    "cloudinary_storage.storage.MediaCloudinaryStorage"
)
