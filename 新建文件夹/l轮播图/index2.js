var itemNode=document.querySelector('.item');
var rightNode=document.querySelector('.rightbutton');
var leftNode=document.querySelector('.leftbutton');
var contentNode=document.querySelector('.content');
var lisNode=document.querySelectorAll('.banner li');
var bannerNode=document.querySelector('.banner');

function getStyle(node,obj){
  var styleNode;
  if (node.currentStyle){
    styleNode=node.currentStyle;
  } else {
    styleNode=getComputedStyle(node,null);
  }
  return styleNode[obj];
}
function animate(node,obj,speed,fn){
  clearInterval(node.flag);
  node.flag=setInterval(function(){
    for(var key in obj){
      var v=parseInt(getStyle(node,key));
      if(v!=obj[key]){
        var step=(obj[key]-v)/40;
        if(step>0){
          step=Math.ceil(step);
        } else {
          step=Math.floor(step);
        }
        var v= v+ step;
        node.style[key]= v + 'px';
      } else {
        clearInterval(node.flag);
        if (fn !=undefined){
          fn();
        }
      }
    }
  },speed)
}



var index=0;
var lock=true;
rightNode.onclick=function(){
  console.log("我在门的外表  只要点我  我就执行")
  if (lock===true){
    console.log("我在门里 锁住我了")
    lock=false;
    index++;
    var targetValue=index*-790;
    var temp=index;
    animate(contentNode,{left:targetValue},3,function(){
      console.log(index, '上边')
      if(temp==7){
        alert(1);
        index=0;
        contentNode.style.left=0 +'px';
      }
      lock=true;
    });
    // // alert(index);
    console.log(index, "下边");
    if(index==7){
      index=0;
    }
    for(var j=0; j<lisNode.length; j++){
      lisNode[j].className="";
    }
    lisNode[index].className='active';
  }
};


leftNode.onclick=function(){
 
  if (lock){
    lock=false;
    

    index--;
    if(index<0){
      index=6;
      contentNode.style.left=7*-790 +'px';
    }
    // 目标值
  var targetValue=index*-790; 
  var temp=index;
  animate(contentNode,{left:targetValue},10,function(){
    // if(temp==7){
      
    //   contentNode.style.left=0 +'px';
    // }
    lock=true;
  });
  
  // // alert(index);
  // console.log(index);
  // if(index==7){
  //   index=0;
  // }
  for(var j=0; j<lisNode.length; j++){
    lisNode[j].className="";
  }
  lisNode[index].className='active';
  }


}

// 绑定小点点
for (var i=0; i<lisNode.length; i++ ){
  lisNode[i].num= i; 
  
  lisNode[i].onclick=function(){
    // alert(this.num);
    var targetValue=this.num*-790;
    animate(contentNode,{left:targetValue},10);
    for(var j=0; j<lisNode.length; j++){
      lisNode[j].className="";
    }
    this.className='active';
  }
  
}
// 自动播放
var flag100;
function autoplay(){
  flag100=setInterval(function(){
    console.log("我是定时器  我会一直执行")
    rightNode.onclick();

  },100)
}



bannerNode.onmouseenter=function(){
  clearInterval(flag100);

}
bannerNode.onmouseleave=function(){
  autoplay();

}
autoplay();




