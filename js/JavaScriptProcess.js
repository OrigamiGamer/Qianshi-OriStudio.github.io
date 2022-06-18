function GetFaviconIcon(URL){
	var xhr = XMLHttpRequest()
	xhr.open('GET','http://statics.dnspod.cn/proxy_favicon/_/favicon?domain='+URL,true);
	xhr.send(null);
	return(xhr.responseText)
}