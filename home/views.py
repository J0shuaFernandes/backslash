from django.shortcuts import render
from django.http import HttpResponse

def index(request):
	#return HttpResponse('<h2>Home</h2>')
	return render(request, 'home/home.html')