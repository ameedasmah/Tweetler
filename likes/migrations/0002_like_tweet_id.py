# Generated by Django 3.1.5 on 2021-02-05 14:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('likes', '0001_initial'),
        ('tweets', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='like',
            name='tweet_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tweet_likes', to='tweets.tweet'),
        ),
    ]
