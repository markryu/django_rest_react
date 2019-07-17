# Separation of Concerns

Documented Decision Making and Process for Creating a Sample Project

There will be two folders inside the git head and the pipenv files.



# Backend



`pipenv shell`
- create a virtual environment for python backend purposes

`mkdir frontend backend`
- separate the concerns for frontend and backend

`pipenv install django djangorestframework`
- install django and the rest framework for the backend

`django-admin startproject <project_name>`

`python manage.py startapp <app_name>`
- start a django project and then create an app
- register the apps in the installed_apps in the settings of the main project settings
- for django rest framework, add it to the settings as installed apps and rest framework settings ... it can be copied from the documentation, you also need it to be included in the urls.py of the main project settings


create Models in the Models.py
- Always Create the models first
- register it in the admin.py `admin.site.register(<model_name>)`

`mkdir api`
- create a folder for the api of your app, then create a __init__.py for the django settings to see it as an included folder within the project
- create the urls.py and include the directory urls using `include` in the main project urls.py

`serializers.py`
- create serializers.py inside the api folder
- the serializer works similarly with the forms, it simply let's outside data types to be converted into python data types or objects
- the serializer can inherit properties from rest_framework serializers.ModelSerializer
- the class can then have an overwritten class Meta. the meta needs the model and the fields that needs to be serialized, if all is needed you an just use `__all__`

`views.py`
- the views.py inside the api will be using the apiview from the restframework rather than the generic views that is usually used by django e.g. listapiview, retrieveapiview...see documentation for more examples
- the views need the queryset and the serializer class ass variables inside the classes
- for the urls.py, it will be just similar to a bare django project as you just need to import the class-based views and use the `.as_view()` methods.


# Frontend

