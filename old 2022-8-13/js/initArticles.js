{
    var argType = window.location.search;

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
        {
            var newType = {};
            let tmp = argType.split("?").pop().split("#").shift().split("&");
            for (var i = tmp.length - 1; i >= 0; i--) {
              newType[tmp[i].split("=")[0]] = tmp[i].split("=")[1];
            };
            argType = newType;
            try{
            }catch(e){
                
            };
        }
    };
};
EventUtil.addHandler(window,'load',load = (e) =>{
    initBegin();
    initEnd();
});