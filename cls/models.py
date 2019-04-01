from django.db import models


# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=10)
    studentId = models.CharField(max_length=10)
    studentPW = models.CharField(max_length=10)

    def __str__(self):
        return self.name


class ZZB(models.Model):
    name = models.CharField(max_length=10)

    day1class1 = models.BooleanField(default=False)
    day1class2 = models.BooleanField(default=False)
    day1class3 = models.BooleanField(default=False)
    day1class4 = models.BooleanField(default=False)
    day2class1 = models.BooleanField(default=False)
    day2class2 = models.BooleanField(default=False)
    day2class3 = models.BooleanField(default=False)
    day2class4 = models.BooleanField(default=False)
    day3class1 = models.BooleanField(default=False)
    day3class2 = models.BooleanField(default=False)
    day3class3 = models.BooleanField(default=False)
    day3class4 = models.BooleanField(default=False)
    day4class1 = models.BooleanField(default=False)
    day4class2 = models.BooleanField(default=False)
    day4class3 = models.BooleanField(default=False)
    day4class4 = models.BooleanField(default=False)
    day5class1 = models.BooleanField(default=False)
    day5class2 = models.BooleanField(default=False)
    day5class3 = models.BooleanField(default=False)
    day5class4 = models.BooleanField(default=False)

    def __str__(self):
        return self.name
