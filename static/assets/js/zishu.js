
var txtobj={
   divName:"send_message", //外层容器的class
   textareaName:"chackTextarea", //textarea的class
   numName:"num", //数字的class
   num:200 //数字的最大数目
  };
  
  var textareaFn=function(){
   //定义变量
   var $onthis;//指向当前
   var $divname=txtobj.divName; //外层容器的class
   var $textareaName=txtobj.textareaName; //textarea的class
   var $numName=txtobj.numName; //数字的class
   var $num=txtobj.num; //数字的最大数目

   function numChange(){
    var add = document.getElementById('add');
    var submit = document.getElementById('submit');
    
    var strlen=0; //初始定义长度为0
    var txtval = $.trim($onthis.val());
    for(var i=0;i<txtval.length;i++){
      strlen=strlen+1;//
    }
    
$(function(){  //手机
	//判断屏幕宽度
	var winWide = window.screen.width;  //获取当前屏幕分辨率
	if(winWide <= 1000){  //1000及以下分辨率  手机设备
        if(strlen>0){
        submit.style.display="block";
        add.style.display="none";
    }
    else{
        submit.style.display="none";
        add.style.display="block";
    } 	
    }
});
   //计算字数 
    if($num-strlen<0){
     $par.html("超出 <b style='color:red;font-weight:lighter' class="+$numName+">"+Math.abs($num-strlen)+"</b> 字"); //超出的样式
    }
    else{
     $par.html("您还可以输入<b class="+$numName+">"+($num-strlen)+"</b> 字"); //正常时候
    }
    $b.html($num-strlen);   
   }
   $("."+$textareaName).live("focus",function(){
    $b=$(this).parents("."+$divname).find("."+$numName); //获取当前的数字
    $par=$b.parent(); 
    $onthis=$(this); //获取当前的textarea
    var setNum=setInterval(numChange,500);    
   });
  };    
  textareaFn();