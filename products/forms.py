from django import forms
from .models import Product

# class ProductForm(forms.ModelForm):
#     class Meta:
#         model = Product
#         fields = ('name', 'short_description', 'long_description', 'image', 'price', 'category')

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ('name', 'short_description', 'long_description', 'image', 'price', 'category')
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', 'required': False}),
            'short_description': forms.Textarea(attrs={'class': 'form-control', 'rows': 3, 'required': False}),
            'long_description': forms.Textarea(attrs={'class': 'form-control', 'rows': 5, 'required': False}),
            'image': forms.FileInput(attrs={'class': 'form-control-file', 'required': False}),
            'price': forms.NumberInput(attrs={'class': 'form-control', 'required': False}),
            'category': forms.Select(attrs={'class': 'form-control', 'required': False}),
        }