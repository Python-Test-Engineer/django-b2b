# Generated by Django 5.1.6 on 2025-02-25 17:30

import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Category",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("description", models.TextField()),
                ("created_ont", models.DateTimeField(auto_now_add=True)),
                ("updated_on", models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name="Product",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("short_description", models.CharField(max_length=500)),
                ("long_description", models.TextField()),
                ("image", models.ImageField(upload_to="products/images")),
                ("created_on", models.DateTimeField(auto_now_add=True)),
                ("updated_on", models.DateTimeField(auto_now=True)),
                (
                    "category",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="products.category",
                    ),
                ),
            ],
        ),
    ]
