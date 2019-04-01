import json
import os
from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from website.settings import BASE_DIR
from .models import Question, QuestionMatch


# Create your views here.

def index(request):
    return render(request, 'service.html')


def huaxiang(request):
    return render(request, "huaxiang.html")


def item(request):
    data = [
        {"question": "自助开户后如何补办三方存管？", "time": 111},
        {"question": "转账失败的原因？", "time": 111},
        {"question": "证券转银行为什么转不了？", "time": 111},
        {"question": "银证转账的时间？", "time": 111},
        {"question": "信用证券账户可以注销后重新开户吗？", "time": 111},
        {"question": "信用账户三方存管的银行有哪些？", "time": 111},
        {"question": "信用账户如何操作配债？"},
        {"question": "信用账户可以交易哪些股票？"},
        {"question": "信用账户可以购买ST股票吗？"},
        {"question": "信用账户开通条件"},
        {"question": "自助开户后如何补办三方存管？"},
        {"question": "转账失败的原因？"},
        {"question": "证券转银行为什么转不了？"},
        {"question": "银证转账的时间？"},
        {"question": "信用证券账户可以注销后重新开户吗？"},
        {"question": "信用账户三方存管的银行有哪些？"},
        {"question": "信用账户如何操作配债？"},
        {"question": "信用账户可以交易哪些股票？"},
        {"question": "信用账户可以购买ST股票吗？"},
        {"question": "信用账户开通条件"}
    ]
    return HttpResponse(json.dumps(data), content_type="application/json")


def read_img(request, file_name):
    try:
        imagepath = os.path.join(BASE_DIR, "static/assets/img/{}".format(file_name))
        with open(imagepath, 'rb') as f:
            image_data = f.read()
            return HttpResponse(image_data, content_type="image/png")
    except Exception as e:
        print(e)
        return HttpResponse(str(e))


@csrf_exempt
def ask(request):
    query_question = request.POST["text"]
    try:
        right_question = QuestionMatch.objects.get(query_question=query_question)
    except Exception:
        return HttpResponse("false")
    else:
        right_question.right_question.matched_num += 1
        return HttpResponse(right_question.right_question.right_question)
