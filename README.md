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


