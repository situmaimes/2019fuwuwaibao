/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
//常见问题
$(document).ready(function(){
    ajax("true", "false", "GET", "json/item.json", "json", "", addBox);//调用函数
    ajax("true", "false", "GET", "json/brand.json", "json", "", first);//调用函数
});
function addBox(result){
 var html='';
 var n=1;
 $.each(result,function(i,item){
 html ='<li>';
 html+='<div style="width: 13%"><div class="num">'+n+'</div></div>';
 html+= '<div class="wenti">'+item["question"]+'</div>';
 html+='<div class="dianji">'+item["time"]+'</div>';
 html+='</li>';
$('#morris-area-chart').append(html);//after方法:在每个匹配的元素之后插入内容。
n +=1;
 });
}
function first(data){
    $('#people').append('<h3>'+data.brand[0].people+'</h3>');
    $('#reply').append('<h3>'+data.brand[0].reply+'</h3>');
    $('#day').append('<h3>'+data.brand[0].day+'</h3>');
    $('#visit').append('<h3>'+data.brand[0].visit+'</h3>');
}
