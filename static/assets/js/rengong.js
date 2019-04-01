/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var tiwen= document.getElementByClass("tiwen");
for(var i=0;i<tiwen.length;i++){
    tiwen[i].onclick=function(){
        alert(tiwen[i].innerText);
        $('#ques').append(tiwen[i].innerText);
};
}

