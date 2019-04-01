from django.db import models


# Create your models here.

class Question(models.Model):
    right_question = models.TextField()
    matched_num = models.IntegerField(default=0)
    category = models.TextField()

    def __str__(self):
        return self.right_question


class QuestionMatch(models.Model):
    query_question = models.TextField()
    right_question = models.ForeignKey(Question, on_delete=models.CASCADE)

    def __str__(self):
        return self.query_question


class UnmatchedQuestion(models.Model):
    query_question = models.TextField()

    def __str__(self):
        return self.query_question
