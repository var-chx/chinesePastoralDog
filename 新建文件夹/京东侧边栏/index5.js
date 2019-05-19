var lisNode=document.querySelectorAll('li');
var itemsNode=document.querySelectorAll('.item');
var sidebarNode=document.querySelector('.sidebar');
// for (var index=0; index<lisNode.length; index++){
//   lisNode[index].num=index;
//   lisNode[index].onmouseenter=function(){
//     // this.className='active';
//     for(var j=0 ; j<itemsNode.length; j++){
//       itemsNode[j].className="item";
//     }
//     itemsNode[this.num].className= 'item active';
//   }
// }
// sidebarNode.onmouseleave=function(){
//   for(var j=0; j<itemsNode.length; j++){
//     itemsNode[j].className="item";
//   }
// }
for (var index=0; index<lisNode.length; index++){
   lisNode[index].num=index;
   lisNode[index].onmouseenter=function(){
     for(var j=0; j<itemsNode.length;j++){
       itemsNode[j].className='item';
     }
   itemsNode[this.num].className='item active';

  }

}
sidebarNode.onmouseleave=function(){
  for(var j=0 ; j<itemsNode.length; j++){
    itemsNode[j].className='item';
  }
}






