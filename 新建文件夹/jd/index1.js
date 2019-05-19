var lisNode=document.querySelectorAll('li');
var itemsNode=document.querySelectorAll('.item');
var sidebarNode=document.querySelector('.sidebar');


var index;
for(var index=0; index<lisNode.length; index++){
  lisNode[index].num=index;
  lisNode[index].onmouseenter=function(){
    for(var j=0;j<itemsNode.length; j++){
      lisNode[j].className="";
      itemsNode[j].className="item";
    }
    this.className='active';
    itemsNode[this.num].className='item active';
  }

  


}
sidebarNode.onmouseleave=function(){
  for(var j=0; j<lisNode.length; j++){
    lisNode[j].className='';
    itemsNode[j].className="item";
  }
}