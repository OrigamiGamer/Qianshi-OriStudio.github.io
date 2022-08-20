var funcExtra = {
    XHR_Get:function (url){
        var XHR, result;
        try {
            XHR = new XMLHttpRequest ();
        } catch (e) {
            // if IE6
            XHR = new ActiveXObject("Microsoft.XMLHTTP");
        }
        XHR.open ('GET', url, false);
        XHR.onreadystatechange = ()=>{
            if(200 <= XHR.status < 300 || XHR.status === 304){
                result = XHR.responseText;
            }else{
                throw ("Cannot 'Get' from " + url);
            }
        }
        XHR.send ();
        return result;
    },
    getSearchData:function (){
        let obj = {};
        let arr = window.location.search.slice(1).split('&');
        arr.forEach(item => {
            let newArr = item.split('=');
            obj[newArr[0]] = newArr[1];
        })
        return obj;
    }








}