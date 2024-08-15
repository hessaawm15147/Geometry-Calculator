# Import necessary modules from Django
from django.shortcuts import render
from django.http import HttpResponse

# Define a view function for the index page
def index(request):
    # Render the index.html template and return an HTTP response
    # This function will be called when the user visits the root URL of the site
    return render(request, 'index.html')

# This is where you can define additional views for your Django application
# Create your views here.