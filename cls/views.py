from django.http import HttpResponse
from django.shortcuts import render

from .models import Student


# Create your views here.
def student(request):
    return render(request, 'student.html')


def studentsubmit(request):
    name = request.POST.get("name")
    studentId = request.POST.get("id")
    studentPW = request.POST.get("password")
    students = [i.studentId for i in Student.objects.all()]
    if studentId in students:
        student = Student.objects.get(studentId=studentId)
        student.name = name
        student.studentPW = studentPW
        student.save()
        return render(request, 'result.html', context={'message': '恭喜成功修改'})
    else:
        student = Student(name=name, studentId=studentId, studentPW=studentPW)
        student.save()
        return render(request, 'result.html', context={'message': '恭喜成功添加'})


def zzb(request):
    return render(request, 'zzb.html')


def zzbsubmit(request):
    return
