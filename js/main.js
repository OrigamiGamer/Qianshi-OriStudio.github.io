window.searchObj = funcExtra.getSearchData();
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