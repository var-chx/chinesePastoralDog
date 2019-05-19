/* 获取操作对象 左右两个按钮
li里面的小点点 一组内容项 代表证个内容项的banner
2 定义一个全局变量表示当前显示的是哪一个内容项
3 给右键绑定onclick事件
4给左键绑定onclick 事件;
5 鼠标进入到li中 绑定onmouseenter事件 以及给没个节点对象添加下标属性
6在onmouseenter事件中 先把所有的LI 和内容回复到原来的状态 然后在操作*/

var leftBtnNode=document.querySelector('.leftBtn');
var rightBtnNode= document.querySelector('.rightBtn');
var itemsNode=document.querySelectorAll('.item');
var lisNode=document.querySelectorAll('.banner li');
var bannerNode=document.querySelector('.banner');
var index=0;

// 右键点击
rightBtnNode.onclick=function(){
  index++;
  if(index==lisNode.length){
    index=0;
  }
  console.log(index);
  for(var j=0; j<lisNode.length; j++){
    lisNode[j].className="";
    itemsNode[j].className="item";
  }
  lisNode[index].className='active';
  itemsNode[index].className='item active';
}

// 左键点击
leftBtnNode.onclick=function(){
  index--;
  
  if(index<0){
    index=lisNode.length-1;
  }
  // console.log(index);
  for(var j=0; j<lisNode.length; j++){
    lisNode[j].className="";
    itemsNode[j].className="item";
  }
  lisNode[index].className="active";
  itemsNode[index].className="item active";
}

// li小点点操作
for(var i=0; i<lisNode.length; i++){
  lisNode[i].num=i;
  lisNode[i].onmouseenter=function(){
    for(var j=0; j<lisNode.length; j++){
      lisNode[j].className="";
      itemsNode[j].className="item";
    }
    index=this.num;
    lisNode[index].className="active";
    itemsNode[index].className='item active';
  }

}


// 定时器
var flag=setInterval(function(){
  rightBtnNode.onclick();

},100)

// 鼠标进入停止定时器
bannerNode.onmouseenter=function(){
  clearInterval(flag);
}

bannerNode.onmouseleave=function(){
  flag=setInterval(function(){
    rightBtnNode.onclick();
  },300)
}



