from django.shortcuts import render, redirect
from .forms import ProductForm
from .models import Product


def index(request):

    return render(request, "products/index.html")


def product_add_edit(request, pk=None):
    if pk:
        product = Product.objects.get(pk=pk)
    else:
        product = None

    if request.method == 'POST':
        form = ProductForm(request.POST, request.FILES, instance=product)
        if form.is_valid():
            form.save()
            return redirect('product_list')
    else:
        form = ProductForm(instance=product)

    return render(request, 'products/product_form.html', {'form': form, 'product': product})