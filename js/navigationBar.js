var lastDom, lastIndex
EventUtil.addHandler(window,'load',()=>{
    lastDom = document.getElementsByClassName('navigationBar_li')[0];
    lastIndex = 0;

    lastDom.style.color = 'white';
})

EventUtil.addHandler(window, 'click',(e)=>{
    var curDom = EventUtil.getTarget(e);
    var curIndex = curDom.getAttribute('index') ;
    if (curDom.className.split(' ')[0] == 'navigationBar_li') {
        if(curIndex == lastIndex)
        {
            return;
        }else{
            lastIndex = curIndex;
            lastDom.style.color = '#858585';
            curDom.style.color = 'white';
            lastDom = curDom;
        };
    };
})