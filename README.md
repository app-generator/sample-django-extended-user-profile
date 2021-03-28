# Django User Profile

Django Sample project that allows registered users to edit their profile. The code is provided on top of [Django Volt](https://appseed.us/admin-dashboards/django-dashboard-volt) - the original starter, a popular open-source Djaango starter.

#### Status: @WIP

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
   |-- customers/                          # Handles the profile edit     <-------- NEW
   |    |-- __init__.py                    # Defines App init             <-------- NEW
   |    |-- admin.py                       # Defines App admin            <-------- NEW
   |    |-- apps.py                        # Defines App apps             <-------- NEW
   |    |-- forms.py                       # Defines App forms            <-------- NEW
   |    |-- models.py                      # Defines App models           <-------- NEW
   |    |-- signals.py                     # Defines App signals          <-------- NEW
   |    |-- tests.py                       # Defines App tests            <-------- NEW
   |    |-- urls.py                        # Defines App routes           <-------- NEW
   |    |-- views.py                       # Defines App views            <-------- NEW
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

### Settings

In this section, the user can change profile information, including name, email, avatar, ... etc. 
To do this, we create a new app called `customers`, then create a model named `Profile` to store user information.

![Settings screenshot](https://raw.githubusercontent.com/app-generator/django-user-profile/master/media/django-dashboard-volt-screen-settings.png)

* create `customers` app:
```bash
$ python manage.py startapp customers
```

* create the `Profile` model

`customers/models.py`:
```python
from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext as _
from django.contrib.staticfiles.templatetags.staticfiles import static


class Profile(models.Model):
    GENDER_MALE = 1
    GENDER_FEMALE = 2
    GENDER_CHOICES = [
        (GENDER_MALE, _("Male")),
        (GENDER_FEMALE, _("Female")),
    ]

    user = models.OneToOneField(User, related_name="profile", on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to="customers/profiles/avatars/", null=True, blank=True)
    birthday = models.DateField(null=True, blank=True)
    gender = models.PositiveSmallIntegerField(choices=GENDER_CHOICES, null=True, blank=True)
    phone = models.CharField(max_length=32, null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True)
    number = models.CharField(max_length=32, null=True, blank=True)
    city = models.CharField(max_length=50, null=True, blank=True)
    zip = models.CharField(max_length=30, null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = _('Profile')
        verbose_name_plural = _('Profiles')

    @property
    def get_avatar(self):
        return self.avatar.url if self.avatar else static('assets/img/team/default-profile-picture.png')
```

> **get_avatar:** In this property, if the avatar value isn't set, the default value will return. Otherwise, the user's avatar address will be returned.

Migrate changes:
```bash
$ python manage.py makemigrations
$ python manage.py migrate
```

* create related form to show inputs & store data.
    
1- make `forms.py` file in `customers` app:
```bash
$ vim customers/forms.py
```
    
2- add `ProfileForm` form
`customers/forms.py`:
```python
from django import forms

from customers.models import Profile


class ProfileForm(forms.ModelForm):
    first_name = forms.CharField(max_length=255)
    last_name = forms.CharField(max_length=255)
    email = forms.EmailField()

    class Meta:
        model = Profile
        fields = '__all__'
        exclude = ['user']
```

> Note: We have three fields (first_name, last_name, email) that are outside the profile model (they are in the user model). We need to add these three fields to our form.

* create `ProfileView` in `customers/views.py`:
```python
from django.shortcuts import render, redirect
from django.views import View

from customers.forms import ProfileForm
from customers.models import Profile


class ProfileView(View):
    profile = None

    def dispatch(self, request, *args, **kwargs):
        self.profile, __ = Profile.objects.get_or_create(user=request.user)
        return super(ProfileView, self).dispatch(request, *args, **kwargs)

    def get(self, request):
        context = {'profile': self.profile}
        return render(request, 'customers/profile.html', context)

    def post(self, request):
        form = ProfileForm(request.POST, request.FILES, instance=self.profile)

        if form.is_valid():
            profile = form.save()
            
            # to save user model info
            profile.user.first_name = form.cleaned_data.get('first_name')
            profile.user.last_name = form.cleaned_data.get('last_name')
            profile.user.email = form.cleaned_data.get('email')
            profile.user.save()
            
        return redirect('profile')
```

> dispatch method: In this section, if the user does not have a profile, it will be created and the value of the profile object will set in the profile field.

* make link to `ProfileView`:

1- make `urls.py` in `customers` app:
```bash
$ vim customers/urls.py
```

2- import the following codes in it:
```python
from django.urls import path
from customers import views

urlpatterns = [
    path('profile/', views.ProfileView.as_view(), name='profile'),
]
```

3- update `core/urls` to support `customers` urls:
```python
from django.conf import settings
from django.contrib import admin
from django.conf.urls.static import static
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),  # Django admin route
    path('customers/', include("customers.urls")),  # Django customers route
    # ...
]

# to support and show media & static files in developer mode
if settings.DEVEL:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

<br />

---
[Django Bootstrap 5](https://appseed.us/admin-dashboards/django-dashboard-volt) Volt - Provided by **AppSeed [App Generator](https://appseed.us/app-generator)**.
