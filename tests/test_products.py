import pytest
from django.urls import reverse
from django.test import Client
from products.models import Product, Category

@pytest.mark.django_db
def test_products_index_view():
    # Create some sample products
    product1 = Product.objects.create(
        name="Product 1",
        short_description="Short desc 1",
        long_description="Long desc 1",
      #   price=10.99,
        image="image1.jpg",
        category=Category.objects.create(name="Category 1")
    )
    product2 = Product.objects.create(
        name="Product 2",
        short_description="Short desc 2",
        long_description="Long desc 2",
      #   price=9.99,
        image="image2.jpg",
        category=Category.objects.create(name="Category 2")
    )

    # Set up the test client
    client = Client()

    # Make a GET request to the products index view
    response = client.get(reverse("products:index"))

    # Assert that the response is a 200 (OK)
    assert response.status_code == 200

    # Assert that the response contains the expected products
   #  assert len(response.context["products"]) == 2
   #  assert response.context["products"][0].name == product1.name
   #  assert response.context["products"][1].name == product2.name

    # Assert that the response contains the expected HTML structure
    assert "<p>A sample set of products at £45.99</p>" in response.content.decode()
   #  assert "<ul>" in response.content.decode()
   #  assert "<li>" in response.content.decode()
   #  assert "</ul>" in response.content.decode()