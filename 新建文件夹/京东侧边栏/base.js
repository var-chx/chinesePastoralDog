/*
  ˼·��
    ��һ������ȡ��Ҫ�����Ľڵ���� һ��li �� һ��div����item �Լ��������������ģ�������Ϊsidebar��div
    �ڶ�����ѭ��������ÿһ��li�ڵ�����onmouseenter�¼�����ÿһli�ڵ�������һ������ xiaBiao ����ǰ��li��λ�ã�Ŀ�ģ���Ϊ�˺��¼��л�ȡ��Ӧ�������
    ���������Ȱ����е�li�����������ʽ�ָ���ԭ������ʽ��Ȼ����ĵ�ǰli����ʾ״̬�Լ���Ӧ���������״̬
    ���Ĳ������������������ģ�������Ϊsidebar��div������뿪�¼���onmouseleave��,���¼��лָ����е�li�Լ���Ӧ������Ŀ�ʼ״̬
*/

//��һ������ȡ��Ҫ�����Ľڵ���� һ��li �� һ��div����item �Լ��������������ģ�������Ϊsidebar��div
var lisNode = document.querySelectorAll('.sidebar li'); //һ��li�ڶ���
var itemsNode =  document.querySelectorAll('.sidebar .item'); //һ��������
var sidebarNode =  document.querySelector('.sidebar'); //�������������ģ��ڵ����


//�ڶ�����ѭ��������ÿһ��li�ڵ�����onmouseenter�¼�����ÿһli�ڵ�������һ������ xiaBiao ����ǰ��li��λ�ã�Ŀ�ģ���Ϊ�˺��¼��л�ȡ��Ӧ�������
for(var index = 0;index<lisNode.length;index++){
  lisNode[index].num = index;
  lisNode[index].onmouseenter = function(){
    //���������Ȱ����е�li�����������ʽ�ָ���ԭ������ʽ��Ȼ����ĵ�ǰli����ʾ״̬�Լ���Ӧ���������״̬
    for(var j = 0;j<lisNode.length;j++){
      lisNode[j].className = '';
      itemsNode[j].className = 'item';
    }
    this.className = 'active';
    itemsNode[this.num].className = 'item active';
  }
}


//���Ĳ������������������ģ�������Ϊsidebar��div������뿪�¼���onmouseleave��,���¼��лָ����е�li�Լ���Ӧ������Ŀ�ʼ״̬
sidebarNode.onmouseleave = function(){
  for(var j = 0;j<lisNode.length;j++){
    lisNode[j].className = '';
    itemsNode[j].className = 'item';
  }
};