var lastDom, lastIndex = searchObj.curIndex;
window.importantMD = [
    '/pages/important/homePage.md',
    '/pages/important/lists.md',
    '/pages/important/about.md',
    '/pages/important/language.md',
    '/pages/important/setting.md'
]
EventUtil.addHandler(window,'load',()=>{
    updateBavigationBar(null, true)
    lastDom = document.getElementsByClassName('navigationBar_li')[lastIndex];
    //lastDom.style.color = 'white';

    {
        var barLi = document.getElementsByClassName('navigationBar_li');
        for (let i = 0; i < barLi.length; i++) {
            barLi[i].style.top = (i + 1)*48 + 12 + 'px'
        }
        var invertedLi = document.getElementsByClassName('inverted_li')
        var barHeight = document.getElementById('navigationBar').clientHeight;
        for (let i = invertedLi.length -1; i >= 0; i--) {
            invertedLi[invertedLi.length -1 -i].style.top = barHeight - (i + 1) * 48 + 12 + 'px';
        }
    }
})

EventUtil.addHandler(window, 'click',(e)=>{
    updateBavigationBar (e);
})
updateBavigationBar = (e, isReset) =>{
    if (isReset) {
        let array = document.getElementsByClassName('navigationBar_li')
        array[0].style.color = '#858585'
        array[lastIndex].style.color = 'white';
        return
    }

    var curDom = EventUtil.getTarget(e);
    var curIndex = curDom.getAttribute('index') ;
    if (curDom.className.split(' ')[0] == 'navigationBar_li') {
        if(curIndex == lastIndex)
        {
            return;
        }else{
            lastDom.style.color = '#858585';
            curDom.style.color = 'white';
            lastIndex = curIndex;
            lastDom = curDom;
            location.search = '?curIndex=' + curIndex
            document.getElementsByTagName ('markdown')[0].innerHTML = converter.makeHtml (funcExtra.XHR_Get (importantMD[curIndex]));
        };
    };
}