# Generated by Django 5.1.6 on 2025-02-25 17:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("products", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="category",
            old_name="created_ont",
            new_name="created_on",
        ),
    ]
