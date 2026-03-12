import os
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ciso_knowledge.settings')

application = get_asgi_application()
