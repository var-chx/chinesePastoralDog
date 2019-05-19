var abc=document.querySelector('.map');
(function(){
  var elements=[];
  // 食物构造函数
  function Food(x,y,width,height,color,map){
    this.x=x||0;
    this.y=y||0;
    this.width=width||20;
    this.height=height||20;
    this.color=color||'green';
    this.map = map;
  }
  Food.prototype.init=function(){
    remove();
    // 创建食物
    var div=document.createElement('div');
    this.map.appendChild(div);
    // 设置食物的样式
    div.style.width=this.width + 'px';
    div.style.height=this.height + 'px';
    div.style.backgroundColor=this.color;
    div.style.position="absolute";
    this.x=parseInt(Math.random()*(this.map.offsetWidth/this.width))*this.width;
    this.y=parseInt(Math.random()*(this.map.offsetHeight/this.height))*this.height;
    console.log(this.x, this.y)
    // 设置食物的横纵坐标
    div.style.left=this.x+ 'px';
    div.style.top=this.y+ 'px';
    elements.push(div);
    // console.log(elements);
  }
  // function remove (){
  //   for (var i=0; i<elements.length; i++){
  //     var ele=elements[i];
  //     console.log(ele);
  //     ele.parentNode.removeChild(ele);
  //     elements.splice(i,1);
  //   }
  // }
  
  window.Food = Food;
})();

// var food=new Food(0,0,20,20,'green',abc);
// console.log(food)
// food.init();
// food.init();

