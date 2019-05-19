/*
  思路：
    第一步：获取所要操作的节点对象 一组li 和 一组div类名item 以及代表整个侧边栏模块的类名为sidebar的div
    第二步：循环遍历给每一个li节点对象绑定onmouseenter事件，给每一li节点对象添加一个属性 xiaBiao 代表当前是li的位置（目的：是为了和事件中获取对应的内容项）
    第三步：先把所有的li和内容项的样式恢复到原来的样式，然猴更改当前li的显示状态以及对应的内容项的状态
    第四步：给代表整个侧边栏模块的类名为sidebar的div绑定鼠标离开事件（onmouseleave）,在事件中恢复所有的li以及对应内容项的开始状态
*/

//第一步：获取所要操作的节点对象 一组li 和 一组div类名item 以及代表整个侧边栏模块的类名为sidebar的div
var lisNode = document.querySelectorAll('.sidebar li'); //一组li节对象
var itemsNode =  document.querySelectorAll('.sidebar .item'); //一组内容项
var sidebarNode =  document.querySelector('.sidebar'); //代表整个侧边栏模块节点对象


//第二步：循环遍历给每一个li节点对象绑定onmouseenter事件，给每一li节点对象添加一个属性 xiaBiao 代表当前是li的位置（目的：是为了和事件中获取对应的内容项）
for(var index = 0;index<lisNode.length;index++){
  lisNode[index].num = index;
  lisNode[index].onmouseenter = function(){
    //第三步：先把所有的li和内容项的样式恢复到原来的样式，然猴更改当前li的显示状态以及对应的内容项的状态
    for(var j = 0;j<lisNode.length;j++){
      lisNode[j].className = '';
      itemsNode[j].className = 'item';
    }
    this.className = 'active';
    itemsNode[this.num].className = 'item active';
  }
}


//第四步：给代表整个侧边栏模块的类名为sidebar的div绑定鼠标离开事件（onmouseleave）,在事件中恢复所有的li以及对应内容项的开始状态
sidebarNode.onmouseleave = function(){
  for(var j = 0;j<lisNode.length;j++){
    lisNode[j].className = '';
    itemsNode[j].className = 'item';
  }
};