from django.conf import settings
from django.db.models import Q, Count
from django.shortcuts import render, get_object_or_404

from .models import KnowledgeItem


CATEGORY_LABELS = dict(KnowledgeItem.CATEGORY_CHOICES)


def index(request):
    latest_items = KnowledgeItem.objects.all()[:6]
    category_stats = (
        KnowledgeItem.objects.values('category')
        .annotate(total=Count('id'))
        .order_by('-total')
    )
    categories = [
        {
            'value': item['category'],
            'label': CATEGORY_LABELS.get(item['category'], item['category']),
            'total': item['total'],
        }
        for item in category_stats
    ]

    context = {
        'site_name': settings.SITE_NAME,
        'latest_items': latest_items,
        'categories': categories,
        'total_items': KnowledgeItem.objects.count(),
    }
    return render(request, 'knowledge/index.html', context)


def catalog(request):
    query = request.GET.get('q', '').strip()
    active_category = request.GET.get('category', 'all').strip()

    items = KnowledgeItem.objects.all()

    if active_category and active_category != 'all':
        items = items.filter(category=active_category)

    if query:
        items = items.filter(
            Q(title__icontains=query)
            | Q(summary__icontains=query)
            | Q(content__icontains=query)
            | Q(tags__icontains=query)
        )

    category_stats = (
        KnowledgeItem.objects.values('category')
        .annotate(total=Count('id'))
        .order_by('category')
    )
    categories = [
        {
            'value': item['category'],
            'label': CATEGORY_LABELS.get(item['category'], item['category']),
            'total': item['total'],
        }
        for item in category_stats
    ]

    context = {
        'site_name': settings.SITE_NAME,
        'items': items,
        'query': query,
        'categories': categories,
        'active_category': active_category,
    }
    return render(request, 'knowledge/catalog.html', context)


def detail(request, slug):
    item = get_object_or_404(KnowledgeItem, slug=slug)
    related_items = (
        KnowledgeItem.objects.filter(category=item.category)
        .exclude(id=item.id)[:4]
    )

    context = {
        'site_name': settings.SITE_NAME,
        'item': item,
        'related_items': related_items,
        'category_label': CATEGORY_LABELS.get(item.category, item.category),
    }
    return render(request, 'knowledge/detail.html', context)
