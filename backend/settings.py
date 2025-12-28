INSTALLED_APPS = [
    ...,
    'rest_framework',
    'tasks',   # tumhara app
    'corsheaders',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    ...,
]

CORS_ALLOW_ALL_ORIGINS = True
