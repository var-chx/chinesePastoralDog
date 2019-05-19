var abc=document.querySelector('.map');
(function(){
    // 游戏构造函数
    function Game(map){
        this.snake = new Snake() ;
        this.food = new Food(0,0,20,20,'green',abc);
        this.map = map;
        that = this;
    };
    // 通过原型添加方法
    Game.prototype.init = function(){
        this.food.init();
        this.snake.init(abc);
        
      
          
        this.runSnake ();
        

    }
   Game.prototype.runSnake= function(){
        setInterval(function(){
            this.snake.moveSnake();

            this.snake.init(abc);
            
            
            


        }.bind(that),150)
        

    }
 






    window.Game = Game;

})();
var game = new Game(abc);
game.init();