from django.contrib import admin
from .models import KnowledgeItem


@admin.register(KnowledgeItem)
class KnowledgeItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'published_at')
    search_fields = ('title', 'summary', 'tags')
    prepopulated_fields = {'slug': ('title',)}
