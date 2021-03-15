from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserAccountManager(BaseUserManager):
    def create_user(self, email, name,image='https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Man-Person-People-Avatar-User-Happy-512.png', password=None):
        if not email:
            raise ValueError('Users must have an email address')
        
        email = self.normalize_email(email)
        user = self.model(email=email, name=name, image=image)

        user.set_password(password)
        user.save()

        return user
    
    def create_superuser(self, email, name, password, image='https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Man-Person-People-Avatar-User-Happy-512.png' ):
        user = self.create_user(email, name, image, password)
        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    image = models.TextField(default='https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Man-Person-People-Avatar-User-Happy-512.png')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'image']

    def get_full_name(self):
        return self.name
    
    def get_short_name(self):
        return self.name
    
    def __str__(self):
        return self.email