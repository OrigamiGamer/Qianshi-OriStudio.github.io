{
    // init Count.
    var curDate = new Date();
        var curYear = curDate.getFullYear();
        var curMonth = curDate.getMonth() + 1;
        var curDay = document.createElement('text') // = curDate.getDay();
            curDay.null = curDate.getDate()
        var fullDays;
    var selectedColor = 'white';
    var loadStatus = 1;
    // end
    initEnd = () =>{
        var defaultStyle = 'background: #606060; color: #fff; border-radius: 3px 0 0 3px;';
        var doneStyle = 'background: green; color: #fff; border-radius: 0 3px 3px 0;';
        var errorStyle = 'background: red; color: #fff; border-radius: 0 3px 3px 0;';
        console.log(
            '%c initActicles组件模块状态 %c ' + !!loadStatus+' %c 错误码 %c '+loadStatus+' ',
            defaultStyle,
            !!loadStatus? doneStyle: errorStyle,
            defaultStyle,
            !!loadStatus? doneStyle: errorStyle,
        );
    };
    initBegin = () =>{
        try{ //尝试，接着判断会不会崩溃，崩溃了八成被墙了，或者我写列表语法不正确 XD
            var lists;
            let xhr = new XMLHttpRequest ();
            xhr.open('GET','/articles/lists.json',false);
            xhr.send();
        
            lists = JSON.parse(xhr.responseText);
        }catch(e){ // 被墙了，只能找不到咯
            console.error('Cannot find "/articles/lists.json" File !\n',e);
            loadStatus = -1 // ErrCode -1, cannot find
        };
        if(!lists){console.error('Failed to GET "/articles/lists.json" !');loadStatus = -2;return};// ErrCode -2,cannot Parse.
        // -------------------------------------------------------------------------------------------------------------------
        //if (curMonth != 2) {
        //    fullDays = (curMonth == 4 || curMonth == 6 || curMonth == 9 || curMonth == 11)?30:31;
        //} else {
        //    fullDays = ((curYear % 4 == 0 && curYear % 100 != 0)||(curYear % 400 == 0))?29:28;
        //}
        2 != curMonth ? fullDays = 4 == curMonth || 6 == curMonth || 9 == curMonth || 11 == curMonth ? 30 : 31 : fullDays = curYear % 4 == 0 && curYear % 100 != 0 || curYear % 400 == 0 ? 29 : 28;
        //var test = ''
        for(tempPos=1;tempPos<=fullDays;tempPos++){
            let x = tempPos - 7 * parseInt((tempPos - 1) / 7);
            let y = parseInt((tempPos - 1) / 7) + 1;
            let newElement = document.createElement('text');

            newElement.id = 10 * x + y;
            newElement.className = 'calendarChild textCenterExtra';
            newElement.style.left = 18 + (x - 1) * (18 + 48) + 'px';
            newElement.style.top = 18 + (y - 1) * (18 + 48) + 'px';
            if(curDay.null == tempPos){
                console.log(curDay.null,tempPos)
                curDay = newElement;
                curDay.classList.add('dateSelected')
            };
            newElement.innerText = tempPos;
            document.getElementById('calendar-date').appendChild(newElement);
            //test = test + '|' + tempPos +((tempPos%7==0)?'\n':'');
        };
        //console.log(test)
        // -------------------------------------------------------------------------------------------------------------------
        console.log(fullDays);

















    };
};
EventUtil.addHandler(window,'load',load = (e) =>{
    initBegin();
    EventUtil.addHandler(
        document.getElementById("calendar-date"),
        "click",
        (calendarCicked = (e) => {
        var newDay = EventUtil.getTarget(e);
        if (newDay.id.length > 2) {
            return;
        }
            curDay.classList.remove('dateSelected');
            curDay = newDay
            curDay.classList.add('dateSelected');
            console.log(curDay.innerText);
        })
    );
    initEnd();
});