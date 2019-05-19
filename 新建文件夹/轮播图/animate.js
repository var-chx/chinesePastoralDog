var contentNode=document.querySelector('.content');
var leftBtnNode=document.querySelector('.leftBtn');
var rightBtnNode=document.querySelector('.rightBtn');
var lisNode=document.querySelectorAll('.banner li');
var bannerNode=document.querySelector('.banner');
function getStyle(node,attr){
  var styleNode;
  if (node.currentStyle==undefined){
    styleNode=getComputedStyle(node,null);
  }else {
    styleNode=node.currentStyle;
  }
  return styleNode[attr];
}
function animate(node,attr,speed,fn){
  clearInterval(node.flag); 
  node.flag=setInterval(function(){
    for (var key in attr){
      var v=parseInt(getStyle(node,key));
      if (v!= attr[key]){
        var step=((attr[key]-v)/40);
        if (step>0){
          step=Math.ceil(step);
        }else {
          step=Math.floor(step);
        }
        var v=v +step;
        node.style[key]= v + 'px';
      }else {
        clearInterval(node.flag);
        if(fn!=undefined){
          fn();
        }
      }
    }
  },speed)
}

var index=0;
var lock=true;
rightBtnNode.onclick=function(){
  if(lock==true){
    lock=false;
    index++;
    // alert(index);
    var targetValue=index *-790;
    // console.log(index,'zhong');
    var temp=index;
    animate(contentNode,{left:targetValue},3,function(){
      // console.log(index,'上');
      if(temp>6){
        index=0;
        contentNode.style.left= 0 +'px';
      }
      lock=true;
    });
  // console.log(lisNode.length);
    for(var j=0;j<lisNode.length;  j++){
      lisNode[j].className="";
    }
  
    if(index>6){
      index=0;
    }
    lisNode[index].className="active";
  }
}
// rightBtnNode.onclick=function(){
//   index++;
//   var targetValue=index*-790;
//   animate(contentNode,{left:targetValue},3,function(){
//     console.log(index,'shang');
//     if(index>6){
//       contentNode.style.left= 0 +'px';
//       index=0;
//     }
//   });
//   for (var i=0;i<lisNode.length; i++){
//     lisNode[i].className="";
//   }
//   console.log(index,'xia');
//   if(index<7){
//     lisNode[index].className="active";
//   }
//   else{
//     lisNode[0].className='active';
//   }
// }
var lock=true;
leftBtnNode.onclick=function(){
  if(lock==true){
    lock=false;
    index--;
    if (index<0){
      index=6;
      contentNode.style.left=7*-790 +'px';
    }
    var targetValue=index*-790;
    animate(contentNode,{left:targetValue},3,function(){
      lock=true;

    });
    for(var i=0; i<lisNode.length; i++){
      lisNode[i].className="";
    }
    // console.log(3);
    if(index<7){
      lisNode[index].className="active";
    }else {
      lisNode[index].className='active';
    }

  }

}
for(var i=0; i<lisNode.length; i++){
  lisNode[i].num=i;
  lisNode[i].onclick=function(){
    var targetValue=this.num*-790;
    animate(contentNode,{left:targetValue},3);
    for(var j=0; j<lisNode.length; j++){
      lisNode[j].className="";
    }
    this.className="active";
  }
}
var flag100;
function autoplay(){
  flag100=setInterval(function(){
    rightBtnNode.onclick();

  },100)
}
autoplay();
bannerNode.onmouseenter=function(){
  clearInterval(flag100);
}
bannerNode.onmouseleave=function(){
  autoplay();
}





  
  
    
    







