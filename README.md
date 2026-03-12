# CISO Knowledge

A futuristic CISO knowledge hub built with Django + MySQL.

## Features
- Tech-style landing page
- Knowledge base listing with search + category filters
- Detail pages with tags and related insights
- Demo dataset loader

## Local Dev
```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
export $(cat .env | xargs)
python manage.py migrate
python manage.py seed_demo
python manage.py runserver 8000
```

## Production (example)
```bash
python -m venv /opt/ciso-venv
source /opt/ciso-venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py seed_demo
python manage.py collectstatic
```

Start with gunicorn:
```bash
gunicorn ciso_knowledge.wsgi:application --bind 0.0.0.0:8000
```
