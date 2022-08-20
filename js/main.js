EventUtil.addHandler(window,'load',() =>{
    // Create DomControl.
    var imageDom = new Image();
    imageDom.src = '/resource/headImage.jpg';
    imageDom.style = 'position: absolute;left: 12px;top: 12px;width:24 px;height: 24px;'
    imageDom.setAttribute('draggable', false)
    document.getElementById('navigationBar').appendChild(imageDom);

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

    {
        var markdownDom = document.getElementsByTagName ('markdown'),
            converter = new showdown.Converter(),
            XHR = new XMLHttpRequest(),
            returnData;
        XHR.open ('GET', markdownDom[0].getAttribute ('data'), false);
        XHR.onreadystatechange = () =>{
            if (XHR.readyState == 4 && (XHR.status == 200 || XHR.status == 0))
            {
                returnData = XHR.responseText;
            }else{
                throw('Error: cannot "GET" from this <'+markdownDom[0].getAttribute ('data')+'>');
            };
        };
        XHR.send ();
        markdownDom[0].innerHTML = converter.makeHtml (returnData)
    }
});