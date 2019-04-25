/*获取要操作的节点对象
1 左侧 的div节点对象

*/
var leftboxNode=document.querySelector('.leftbox');
var toolNode=document.querySelector('.tool');
var rightboxNode=document.querySelector('.rightbox');
var bImgNode=document.getElementById('_bImg');




leftboxNode.onmouseenter=function(){
  toolNode.className="active tool";
  rightboxNode.className="rightbox active";
  // alert(1);
}
leftboxNode.onmouseleave=function(){
  toolNode.className="tool";
  rightboxNode.className="rightbox";
}

leftboxNode.onmousemove=function(e){
  var _e=window.event||e;
  var z=leftboxNode.offsetTop;
  var i=leftboxNode.offsetLeft;
  var x=_e.clientX-i-toolNode.offsetWidth/2;
  if (x<0){
    x=0;
  }else if(x>150){
    x=150;
  }
  // 150=leftboxNode.offsetWidth-toolNode.offsetWidth;
  // 一般模式
  // console.log(leftboxNode.offsetWidth);
  // 必须是行内元素才能获取到
  // console.log(toolNode.style.width);
  

  var y=_e.clientY-z-toolNode.offsetHeight/2;
  if (y<0) {
    y=0;
  }
  else if(y>150){
    y=150;
  }

  // console.log(i);


  // console.log(x);
  // console.log(y);




  toolNode.style.left=x +'px';
  toolNode.style.top=y +'px';
  bImgNode.style.left= -2*x+ 'px';
  bImgNode.style.top= -2*y+ 'px';


  

}
