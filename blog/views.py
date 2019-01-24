from django.shortcuts import render
# views for the app 'blog'
def index(request):
	return render(request, 'blog/header.html')