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

`pipenv install django-cors-headers`
- the cors headers allows other headers to communicate ( for this project specifically with your api)
- add it in installed apps and for the middleware ... see documentation
- CORS_ORIGIN_ALLOW_ALL = True ... this is not a safe setting but for the sake of the testing and sample project it allows everything to be allowed

# Frontend

`npm init react-app <app_name>`
- this should be ran within the frontend folder
- this will create the react app within the folder
- you can then run the home page by running `npm start` inside the folder in the command line


Remove the app.css when you don't need it.

Create a components and containers folder
- the components will contain, of course components and layouts for layouts - this is purely React specific ( I am not that well-versed... yet)
- for now I copied the components and layout from the antdesign


App.js will be your actual app that will be shown in the browser when you run npm start.
In the containers folder, you can create a `Layout.js` file. 
For the syntax:

```javascript
import React from 'react';
/* paste imports here from the antdesign,
*/

const CustomLayout = (props) -> {
    return (
        // paste the layout here
        // the layout should not be rendered in the dom,
        // the layout will then be imported into the App.js since it will be the one rendering it into the browser
        // this is done so that separations of the containers and components are visible for the programmers
    )
}

`npm install axios --save`
- it works like an ajax or data communication for the rendering
- axios is the one that gets data from the api


export default CustomLayout;
```

You can then import the customlayout using the syntax `import CustomLayout from 'relative_url_to_the_file';` within the App.js

For the components, it follows the same concept, you create a component file (ends with .js) then import it within the App.js
Also you should add the props.children for the Layout to render the props or data needed for the view to render

For creating aList view, syntax below

```javascript

class ArticleList extends React.Component {
    state = {
        articles: []
    }

    componentDidMount() {
        axios.get('http:insertyourhostapihere/api/')
        .then(res => {
            this.setState({
                articles: res.data
            })
        })

    }
    rendder () {
        return (
            <Component_name data={} />
        )
    }
}
```