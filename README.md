# Django User Profile

Django Sample project that allows registered users to edit their profile

<br />

> Features

- UI-Ready app, SQLite Database, Django Native ORM
- Session-Based Authentication, Forms validation
- Editable user profile: Name, Surname, Email, Phone, and address
- User Profile Page: `settings.html`
- Deployment scripts: Docker, Gunicorn / Nginx
- Support via **Github** and [Discord](https://discord.gg/fZC6hup).

<br />

> Links

- [Django User Profile - Demo](https://django-user-profile.appseed-srv1.com/) - LIVE deployment
- [Django Bootstrap 5 Volt](https://appseed.us/admin-dashboards/django-dashboard-volt) - the original starter

<br />

## Want more? Go PRO!

PRO versions include **Premium UI Kits**, Lifetime updates and **24/7 LIVE Support** (via [Discord](https://discord.gg/fZC6hup))

| [Django Datta PRO](https://appseed.us/admin-dashboards/django-dashboard-dattaable-pro) | [Django Material PRO](https://appseed.us/admin-dashboards/django-dashboard-material-pro) | [Django Volt PRO](https://appseed.us/admin-dashboards/django-dashboard-volt-pro) |
| --- | --- | --- |
| [![Django Datta PRO](https://raw.githubusercontent.com/app-generator/django-dashboard-dattaable-pro/master/media/django-dashboard-dattaable-pro-screen.png)](https://appseed.us/admin-dashboards/django-dashboard-dattaable-pro) | [![Django Material PRO](https://raw.githubusercontent.com/app-generator/django-dashboard-material-pro/master/media/django-dashboard-material-pro-screen.png)](https://appseed.us/admin-dashboards/django-dashboard-material-pro) | [![Django Volt PRO](https://raw.githubusercontent.com/app-generator/django-dashboard-volt-pro/master/media/django-dashboard-volt-pro-screen.png)](https://appseed.us/admin-dashboards/django-dashboard-volt-pro)

<br />
<br />

![Django Bootstrap 5 Volt - Template project provided by AppSeed.](https://raw.githubusercontent.com/app-generator/django-dashboard-volt/master/media/django-dashboard-volt-screen.png)

<br />

## How to use it

```bash
$ # Get the code
$ git clone https://github.com/app-generator/django-user-profile.git
$ cd django-user-profile
$
$ # Virtualenv modules installation (Unix based systems)
$ virtualenv env
$ source env/bin/activate
$
$ # Virtualenv modules installation (Windows based systems)
$ # virtualenv env
$ # .\env\Scripts\activate
$
$ # Install modules - SQLite Storage
$ pip3 install -r requirements.txt
$
$ # Create tables
$ python manage.py makemigrations
$ python manage.py migrate
$
$ # Start the application (development mode)
$ python manage.py runserver # default port 8000
$
$ # Start the app - custom port
$ # python manage.py runserver 0.0.0.0:<your_port>
$
$ # Access the web app in browser: http://127.0.0.1:8000/
```

> Note: To use the app, please access the registration page and create a new user. After authentication, the app will unlock the private pages.

<br />

## Code-base structure

The project is coded using a simple and intuitive structure presented below:

```bash
< PROJECT ROOT >
   |
   |-- core/                               # Implements app logic and serve the static assets
   |    |-- settings.py                    # Django app bootstrapper
   |    |-- static/
   |    |    |-- <css, JS, images>         # CSS files, Javascripts files
   |    |-- templates/                     # Templates used to render pages
   |         |
   |         |-- includes/                 # HTML chunks and components
   |         |-- layouts/                  # Master pages
   |         |-- accounts/                 # Authentication pages
   |         |
   |      index.html                       # The default page
   |       *.html                          # All other HTML pages
   |
   |-- authentication/                     # Handles auth routes (login and register)
   |    |-- urls.py                        # Define authentication routes  
   |    |-- forms.py                       # Define auth forms  
   |
   |-- app/                                # A simple app that serve HTML files
   |    |-- views.py                       # Serve HTML pages for authenticated users
   |    |-- urls.py                        # Define some super simple routes  
   |
   |-- profile/                            # Handles the profile edit     <-------- NEW
   |    |-- views.py                       # Defines App Views            <-------- NEW
   |    |-- urls.py                        # Defines App Routes           <-------- NEW
   |
   |-- requirements.txt                    # Development modules - SQLite storage
   |-- .env                                # Inject Configuration via Environment
   |-- manage.py                           # Start the app - Django default start script
   |
   |-- ************************************************************************
```

<br />

> The bootstrap flow

- Django bootstrapper `manage.py` uses `core/settings.py` as the main configuration file
- `core/settings.py` loads the app magic from `.env` file
- Redirect the guest users to Login page
- Unlock the pages served by *app* node for authenticated users

<br />

## User Profile Feature

@ToDo Help & Explanation

<br />

---
[Django Bootstrap 5](https://appseed.us/admin-dashboards/django-dashboard-volt) Volt - Provided by **AppSeed [App Generator](https://appseed.us/app-generator)**.
