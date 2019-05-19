var abc=document.querySelector('.map');
// 小蛇的对象
(function(){
  var elements=[];
  // 小蛇
  function Snake(width,height,direction){
    this.width=width || 20;
    this.height=height || 20;
    this.body=[
      {x:3, y:2, color:'red'},
      {x:2, y:2, color:"orange"},
      {x:1, y:2, color:'orange'}
    ];
    this.direction=direction||'right';
  }
  Snake.prototype.init=function(map){
    remove();
    for(var i =0; i<this.body.length; i ++){
     
      // var div=document.createElement('div');
      // this.map.appendChild(div);
      var div=document.createElement('div');
      map.appendChild(div);
      // 设置div的样式
      div.style.width=this.width +'px';
      div.style.height=this.height + 'px';
      div.style.position="absolute";
      // 设置位置
      div.style.left=this.body[i].x*this.width + 'px';
      div.style.top=this.body[i].y*this.height + 'px';
      div.style.backgroundColor=this.body[i].color;
      // console.log(div.style.left,div.style.top);
      }
      elements.push(div);
      console.log(div);

  };

  Snake.prototype.moveSnake=function(){
    // var i = this.body.length-1;
    for (var i =this.body.length-1; i>0; i--){
      // 把i-1的位置坐标给i
      this.body[i].x =this.body[i-1].x;
      this.body[i].y=this.body[i-1].y;
    }
  //  判断小蛇头部的移动方向
  switch (this.direction){
    case "right":
    this.body[0].x +=1;
    break;
    case "left":
    this.body[0].x-=1;
    break;
    case "top":
    this.body[0].y -=1;
    break;
    case "bottom":
    this.body[0].y +=1;
    break;
  };
  //  //判断小蛇有没有吃到食物
  //       //获取的小蛇的头的横纵坐标
  //       var snakeX=this.body[0].x;
  //       var snakeY=this.body[0].y;
  //       //获取食物的横纵坐标
  //       var foodX=food.x/food.width;
  //       var foodY=food.y/food.height;
  //       //吃食物
  //       if(snakeX==foodX&&snakeY==foodY){
  //           //先获取小蛇的尾巴的数据,然后向小蛇的数组中追加这样的一个数据
  //           var lastBody=this.body[this.body.length-1];
  //           var obj={
  //               x:lastBody.x,y:lastBody.y,color:lastBody.color
  //           };
  //           this.body.push(obj);
  //           //删除食物,重新画出来一个食物
  //           food.init(map);


  //       }
  


  };
  function remove(){
    var i = elements.length -1;
    for (; i>=0; i--) {
      var ele=elements[i];
      console.log(ele);
      ele.parentNode.removeChild(ele);
      elements.splice(i,1);
      

    }
    // console.log(elements);

  }
  window.Snake = Snake;




})();
// var Sna=new Snake();
// Sna.init(abc);


