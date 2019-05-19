/*1 ,获取要 操作的节点对象 一组li 合一组div类名item
2 循环遍历给每一个里绑定onmouseenter 事件
给每一个li节点对象添加一个属性xiabiao 代表当前是li的位置(目的是为了和事件中获取对象的内容项)
3 更改当前li的现实装袋以及对应的内容项的状态
4 onmouseleave 恢复到原来的状态;

*/
// 一组li对象
var lisNode=document.querySelectorAll('.sidebar li');
// 一组div 对象
var itemsNode=document.querySelectorAll('.sidebar .item');

var sidebarNode=document.querySelector('.sidebar');
for(var index=0; index<lisNode.length; index++){
  // 下标
  lisNode[index].num=index;
  lisNode[index].onmouseenter=function(){
    for(var j=0; j<lisNode.length; j++){
      lisNode[j].className="";
      itemsNode[j].className='item';
    }
    this.className='active';
    itemsNode[this.num].className="item active";
  }
}
sidebarNode.onmouseleave=function(){
  for(var j=0; j<lisNode.length;j++){
    lisNode[j].className="";
    itemsNode[j].className="item";
  }

}
