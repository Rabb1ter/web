from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name='KnowledgeItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('slug', models.SlugField(max_length=220, unique=True)),
                (
                    'category',
                    models.CharField(
                        choices=[
                            ('threat-intel', 'Threat Intelligence'),
                            ('governance', 'Security Governance'),
                            ('compliance', 'Compliance & Standards'),
                            ('incident-response', 'Incident Response'),
                            ('cloud-security', 'Cloud Security'),
                            ('zero-trust', 'Zero Trust'),
                            ('appsec', 'Application Security'),
                            ('data-protection', 'Data Protection'),
                        ],
                        max_length=60,
                    ),
                ),
                ('summary', models.TextField()),
                ('content', models.TextField()),
                ('tags', models.CharField(blank=True, max_length=200)),
                ('source_url', models.URLField(blank=True)),
                ('published_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ['-published_at'],
            },
        ),
    ]
