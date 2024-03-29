if(!funcExtra.getSearchData() || !funcExtra.getSearchData().curIndex)
{
    location.search = '?curIndex=0'
}
window.searchObj = funcExtra.getSearchData()

EventUtil.addHandler(window,'load',() =>{

    var imageDom = new Image();
    imageDom.src = '/resource/headImage.jpg';
    imageDom.style = 'position: absolute;left: 12px;top: 12px;width:24 px;height: 24px;'
    imageDom.setAttribute('draggable', false)
    document.getElementById('navigationBar').appendChild(imageDom);

    {   // here cannot support multiple 'markdown' elements for the time being, and can be modified by adding the 'for' command as appropriate.
        var curArgIndex = searchObj.curIndex;
        var markdownDom = document.getElementsByTagName ('markdown')[0],
            XHR = new XMLHttpRequest(),
            returnData;
        window.converter = new showdown.Converter(),

        XHR.open ('GET',!curArgIndex ? markdownDom.getAttribute ('data'): importantMD[curArgIndex], false);
        XHR.onreadystatechange = () =>{
            if (XHR.readyState == 4 && (XHR.status == 200 || XHR.status == 0))
            {
                returnData = XHR.responseText;
            }else{
                throw('Error: cannot "GET" from this <'+markdownDom.getAttribute ('data')+'>');
            };
        };
        XHR.send ();
        markdownDom.innerHTML = converter.makeHtml (returnData)
    }
});
EventUtil.addHandler(window,'error',()=>{
    console.info('Oops, you found a web bug, please tell me how this happened\n恭喜, 你发现了一个网页虫子 (bug) ,请麻烦告诉我怎么发生这种情况的')
    console.info("You can report questions through Github issues, thank you.\n你可以通过 Github issues' 反馈问题, 谢谢 -w-")
    debugger
})