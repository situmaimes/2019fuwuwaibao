import json
from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.

def info_index(request):
    return render(request, 'info_index.html')


def index_home(request):
    return render(request, "index_home.html")


def item(request):
    data = [
        {"question": "自助开户后如何补办三方存管？", "time": 3231},
        {"question": "转账失败的原因？", "time": 3089},
        {"question": "证券转银行为什么转不了？", "time": 3066},
        {"question": "银证转账的时间？", "time": 3054},
        {"question": "信用证券账户可以注销后重新开户吗？", "time": 3033},
        {"question": "信用账户三方存管的银行有哪些？", "time": 3012},
        {"question": "信用账户如何操作配债？", "time": 3006},
        {"question": "信用账户可以交易哪些股票？", "time": 3003},
        {"question": "信用账户可以购买ST股票吗？", "time": 2987},
        {"question": "信用账户开通条件？", "time": 2979},
        {"question": "创业板如何开通？", "time": 2946},
        {"question": "当日卖出股票后可以转出资金吗？", "time": 2856},
        {"question": "股票的交易时间？", "time": 2833},
        {"question": "客户编号忘记了如何找回？", "time": 2726},
        {"question": "如何才可以买股票？", "time": 2703},
        {"question": "如何更换同一银行的三方存管银行卡？", "time": 2623},
        {"question": "如何开户？", "time": 2594},
        {"question": "如何收取股票交易佣金？", "time": 2579},
        {"question": "如何修改交易密码？", "time": 2566},
        {"question": "银证转账的时间？", "time": 2478}
    ]
    return HttpResponse(json.dumps(data), content_type="application/json")


def brand(request):
    data = {
        "brand":
            [
                {
                    "people": 12332,
                    "reply": 36362,
                    "day": 3642,
                    "visit": 12121
                }
            ]
    }
    return HttpResponse(json.dumps(data), content_type="application/json")
