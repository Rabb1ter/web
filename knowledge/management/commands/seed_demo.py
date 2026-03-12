import json
from pathlib import Path
from datetime import datetime

from django.core.management.base import BaseCommand
from django.utils import timezone

from knowledge.models import KnowledgeItem


class Command(BaseCommand):
    help = 'Seed demo knowledge items.'

    def handle(self, *args, **options):
        if KnowledgeItem.objects.exists():
            self.stdout.write(self.style.WARNING('Knowledge items already exist. Skipping.'))
            return

        data_path = Path(__file__).resolve().parents[2] / 'data' / 'demo_items.json'
        if not data_path.exists():
            self.stdout.write(self.style.ERROR('Demo data file not found.'))
            return

        with data_path.open('r', encoding='utf-8') as f:
            items = json.load(f)

        created = 0
        for item in items:
            published_at = datetime.fromisoformat(item['published_at'])
            if timezone.is_naive(published_at):
                published_at = timezone.make_aware(published_at)

            KnowledgeItem.objects.create(
                title=item['title'],
                slug=item['slug'],
                category=item['category'],
                summary=item['summary'],
                content=item['content'],
                tags=item.get('tags', ''),
                source_url=item.get('source_url', ''),
                published_at=published_at,
            )
            created += 1

        self.stdout.write(self.style.SUCCESS(f'Seeded {created} knowledge items.'))
