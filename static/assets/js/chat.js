/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function () {
    var h = window.innerHeight;
    var myInput = document.getElementById('send_txt');
    myInput.addEventListener('focus', handler, false);

    function handler() {
        $('body').height(h);
    }

//常见问题 恒生电子切换  选项卡切换
    var oTab = document.getElementById("tab");
    var aH3 = oTab.getElementsByTagName("h3");
    var aDiv = oTab.getElementsByClassName("box");
    for (var i = 0; i < aH3.length; i++) {
        aH3[i].index = i;
        aH3[i].onclick = function () {
            for (var i = 0; i < aH3.length; i++) {
                aH3[i].className = "";
                aDiv[i].style.display = "none";
            }
            this.className = "active";
            aDiv[this.index].style.display = "block";
        };
    }
//常见问题
    $(document).ready(function () {
        ajax("true", "false", "GET", "item.json", "json", "", addBox);//调用函数
    });

    function addBox(result) {
        var html = '';
        $.each(result, function (i, item) {
            html = '<li>' + item["question"] + '</li>';
            $('#biaozhun').append(html);//after方法:在每个匹配的元素之后插入内容。
        });
    }

    var ul = document.querySelector('ul');
    ul.addEventListener('click', function (even) {
        if (even.target.tagName.toLowerCase() === 'li') {
            $('#chat_ul').append(question(even.target.innerText));
            $('#chat_ul').append(cjwt(even.target.innerText));
            boxScroll(chat_ul);
        }
    });

// 绑定表情 发送消息
    $('#emoji').SinaEmotion($('.chackTextarea'));
    var chat_ul = document.getElementById("chat_ul");
    var send_txt = document.getElementById("send_txt");
    var submit = document.getElementById("submit");
// 测试本地解析
    var submiti = 0;
    var zan = 0;
    var cai = 0;
    var numzan = 0;
    var numcai = 0;
    var rengong = 0;
    /*
    //人工
     $(document).on("click", "#rgfw", function(){
         $('#chat_ul').append('<div class="tishi">您已开启人工服务，人工客服正在赶来...</div>');
         boxScroll(chat_ul);
         ajax("true", "true", "POST", "url1", "json",JSON.stringify({"question":""}),send);
     });
    function send(){
        alert("传输成功:");
    }
    */
//提交信息
    submit.onclick = function () {
        var inputText = $('.chackTextarea').val();
        console.log(inputText);
        if (inputText !== '') {
            $('#chat_ul').append(question(AnalyticEmotion(inputText)));
            $.post("ask", {'text': AnalyticEmotion(inputText)}, function (result) {
                if (result == 'false') {
                    $('#chat_ul').append(reply(numzan + ' ' + numcai));
                }
                else {
                    $('#chat_ul').append(cjwt(result));
                }

            })
        boxScroll(chat_ul);
        submiti += 1;
        zan = 0;
        cai = 0;
    };
    };
    /*
    //接收信息
    $(document).ready(function(){
        ajax("true", "false", "GET", "url3", "json", "", rec);//调用函数
    });
    function rec(result){
         $.each(result,function(i,item){
             $('#chat_ul').append(reply(item["question"]));
     });
    }
    */
    var html;

    function question(content) {
        html = '<li style="list-style-type: none;">';
        html += '<div class="answerHead" id="answerHead">';
        html += '<img src="img/users.png" class="rightimg" />';
        html += '<div class="righttxt">';
        html += '<p>' + content + '</p>';
        html += '</div>';
        html += '</div>';
        html += '</li>';
        return html;
    }

    var html;

    function reply(content1, content2) {
        html = '<li style="list-style-type: none;">';
        html += '<div class="nesHead" id="nesHead">';
        html += '<img src="img/kefu.png" class="leftimg" />';
        html += '<div class="lefttxt">';
        html += '<p>' + content1 + '</p>';
        html += '<div>您可能还想问：</div>';
        html += '<p style="color:blue;">' + content2 + '</p>';
        html += '<div class="pingjia">';
        html += '<div style="width:100%;margin-left:-0.5rem;">答案对您有帮助吗？</div>';
        html += '<div class="haoping" style="float:left;width:5rem;">' + '<img src="img/空心赞.png" id="haoping" style="height:1rem;width: 1rem;"> 有帮助  ' + '</div>';
        html += '<div class="chaping" style="float:left;width:5rem;">' + '<img src="img/空心踩.png" id="chaping" style="height:1rem;width: 1rem;"> 没帮助  ' + '</div>';
        html += '</div>';
        html += '<div class="zhuanjie">';
        html += '<div style="float:left;margin-left:0.5rem;">未解决您的问题？</div>';
        html += '<div id="rgfw" style="float:left;margin-left:0.5rem;color:#0000cc;cursor:pointer;"> 转人工服务</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</li>';
        return html;
    }

    var html;

    function cjwt(content) {
        html = '<li style="list-style-type: none;">';
        html += '<div class="nesHead" id="nesHead">';
        html += '<img src="img/kefu.png" class="leftimg" />';
        html += '<div class="lefttxt">';
        html += '<p>' + content + '</p>';
        html += '</div>';
        html += '</div>';
        html += '</li>';
        return html;
    }

    function boxScroll(o) {
        o.scrollTop = o.scrollHeight;
    }

    $(document).on("click", ".haoping", function () {
        if ((zan % 2 === 0) && (cai % 2 === 0)) {
            $(this).html("<img src='img/实心赞.png' style='height:1rem;width: 1rem;'> 有帮助  ");
            zan = 1;
            numzan += 1;
        }
    });
    $(document).on("click", ".chaping", function () {
        if ((zan % 2 === 0) && (cai % 2 === 0)) {
            $(this).html("<img src='img/实心踩.png' style='height:1rem;width: 1rem;'> 没帮助  ");
            cai = 1;
            numcai += 1;
        }
    });
//手机
    var chat_ul = document.getElementById('chat_ul');
    var mobadd = document.getElementById('mobileadd');
    var winWide = window.screen.width;  //获取当前屏幕分辨率
    if (winWide <= 1000) {
        var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        $(window).on('resize', function () {
            var nowClientHeight = document.documentElement.clientHeight || document.body.clientHeight;
            var height = clientHeight - nowClientHeight;
            if (height > 0) {
                chat_ul.style.height = '80%';
            }
        });

        document.onclick = function () {
            var obj = event.srcElement;
            if (obj.id === "add") {
                if (mobadd.style.display === 'none') {
                    chat_ul.style.height = '55%';
                    mobadd.style.display = 'block';

                }
                else {
                    chat_ul.style.height = '89%';
                    mobadd.style.display = 'none';
                }
            }
            else {
                chat_ul.style.height = '89%';
                mobadd.style.display = 'none';
            }
        };
    }

//封装 ajax
    function ajax(sync, cache, type, url, datatype, data, func) { //封装ajax的一些常用参数  //data数据可以为空
        $.ajax({
            async: sync,//异步
            cache: cache,
            type: type,
            url: url,
            dataType: datatype,
            data: data,
            beforSend: function () {
                // 禁用按钮防止重复提交
                $("#rgfw").attr({disabled: "disabled"});
            },
            error: function (data) {
                //请求失败时被调用的函数
                alert("传输失败:");
            },
            success: function (data) {
                func(data);
            }
        });
    }
};