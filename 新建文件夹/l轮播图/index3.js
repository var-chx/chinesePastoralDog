var rightNode= document.querySelector('.rightbutton');
var leftNode=document.querySelector('.leftbutton');
var contentNode=document.querySelector('.content');
var itemsNode=document.querySelectorAll('.item');
var lisNode = document.querySelectorAll("li")

function getStyle(node,obj){
  var styleNode;
  if ( node.currentStyle){
    styleNode=node.currentStyle;
  } else {
    styleNode=getComputedStyle(node,null);
  }
  return styleNode[obj];

}

function animate(node,obj,speed,fn){
  clearInterval(node.flag);
  // var go=true;
  node.flag=setInterval(function(){
    for(var key in obj){
      var v=parseInt(getStyle(node,key));
      if (v!=obj[key]) {
        // 缓冲运动
        var step;
        step=(obj[key]-v)/20;
        if(step>0){
          step=Math.ceil(step);
        } else if(step<0){
         step=Math.floor(step);
        }
        var v=v +step;
        node.style[key]= v +'px';
      } else {
        clearInterval(node.flag);
        if(fn!=undefined){
          fn();
        }
      }
    }
  },speed)
}

// var index = 0;
// var lock = true
// rightNode.onclick=function(){
//     if (lock == true) {
//       lock = false
//       index++
//       var goleft = index * (-790)
//       animate(contentNode,{left:goleft},5, function () {
//         if (index == 7) {
//           contentNode.style.left = 0 + 'px';
//           index = 0
//         }
//         lock = true
//       });
//     }
//     for (var i = 0;i < lisNode.length; i++) {
//       lisNode[i].className= ''
//     }

//     if (index<7) {
//       lisNode[index].className= 'active'
//     } else {
//       lisNode[0].className= 'active'
//     }
// }


var index=0;
var goleft;
var lock=true;
rightNode.onclick=function(){
  if (lock==true){
    lock = false;
    index++;
    console.log(index);
    goleft=index*(-790);
    animate(contentNode,{left:goleft},5,function(){
      if (index == 7){
        contentNode.style.left=0+ 'px';
        index=0;
      }
      lock=true;
    });
  }
    for(var i=0; i<lisNode.length; i++){
      lisNode[i].className="";
    }
    
    if (index<7){
      lisNode[index].className="active";
    } else {
      lisNode[0].className='active';
    }
}



var count=0;
var lock=true;


leftNode.onclick=function(){
  if(lock==true){
    lock=false;
    count--;
  console.log(count);
  if (count<0){
      contentNode.style.left=7*-790 +'px';
      count=6;
    }
    var goright=count*(-790);
  animate(contentNode,{left:goright},5,function(){
    lock=true;
  });
  
  }
  
  for(var j=0;j<lisNode.length; j++){
    lisNode[j].className="";
  }
  lisNode[count].className="active";
}



// function abd (a,b,abc) {
//   abc()
//   console.log(a)
//   console.log(b)
// }



// abd (4,5,function() {
//   console.log("今天我很开心")
// })


// console.log(6)
 




