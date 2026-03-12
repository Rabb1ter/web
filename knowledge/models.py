from django.db import models
from django.utils import timezone


class KnowledgeItem(models.Model):
    CATEGORY_CHOICES = [
        ('threat-intel', 'Threat Intelligence'),
        ('governance', 'Security Governance'),
        ('compliance', 'Compliance & Standards'),
        ('incident-response', 'Incident Response'),
        ('cloud-security', 'Cloud Security'),
        ('zero-trust', 'Zero Trust'),
        ('appsec', 'Application Security'),
        ('data-protection', 'Data Protection'),
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=220, unique=True)
    category = models.CharField(max_length=60, choices=CATEGORY_CHOICES)
    summary = models.TextField()
    content = models.TextField()
    tags = models.CharField(max_length=200, blank=True)
    source_url = models.URLField(blank=True)
    published_at = models.DateTimeField(default=timezone.now)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-published_at']

    def __str__(self):
        return self.title

    @property
    def tags_list(self):
        return [tag.strip() for tag in self.tags.split(',') if tag.strip()]
