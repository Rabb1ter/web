from django.db import models
from django.utils import timezone


class KnowledgeItem(models.Model):
    CATEGORY_CHOICES = [
        ('threat-intel', '威胁情报'),
        ('governance', '安全治理'),
        ('compliance', '合规与标准'),
        ('incident-response', '应急响应'),
        ('cloud-security', '云安全'),
        ('zero-trust', '零信任'),
        ('appsec', '应用安全'),
        ('data-protection', '数据保护'),
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
