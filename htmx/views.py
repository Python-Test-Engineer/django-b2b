from django.shortcuts import render


def index(request):
    print(request.htmx)
    if request.htmx:
        print("htmx request :)")
        return render(request, "htmx/partials/test.html")
    else:
        print("not htmx request :(")
        return render(request, "htmx/index.html")
    return render(request, "htmx/index.html")
