# Generated by Django 2.0.4 on 2019-03-19 13:49

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('right_question', models.TextField()),
                ('matched_num', models.IntegerField()),
                ('category', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='QuestionMatch',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('query_question', models.TextField()),
                ('right_question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='service.Question')),
            ],
        ),
        migrations.CreateModel(
            name='UnmatchedQuestion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('query_question', models.TextField()),
            ],
        ),
    ]