const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
$(document).ready(function(){})
function IndexFunctionInit() {
	document.getElementById('ClientDiv-Center-Banner').innerHTML = HtmlUrlRead('https://api.ixiaowai.cn/tgrj/index.php');
	ClientDiv_ReadMe_Left_Info_Init()
	SelectOptionsImport()
	OutPutAboutMe()
	document.getElementById('NeteaseMusicLoader').src = 'https://music.163.com/outchain/player?type=0&id=411796573&auto=1&height=90'
}
function HtmlUrlRead(URL) {
	var xhr = new XMLHttpRequest()
	xhr.open('Get',URL,false)
	xhr.send(null)
	return (xhr.responseText)
}
function AjaxHtmlReadJson(Path) {
	$.ajax({
		url: Path,
		type: "GET",
		dataType: "json",
		async: true,
		success: function(data) {
			return (data.responseText);
		}
	});
}
function getJsonLength(jsonData) {
	var jsonlength = 0;
	for (var item in jsonData){
		jsonlength++ ;
	}
	return jsonlength
}
function OutPutAboutMe() {
	console.log('# 千矢 - Creakler')
	console.log('# Bili: https://space.bilibili.com/439946965')
	console.log('# QQ: 2937396379 非诚勿扰')
	console.log('# 是 OrigamiStudio 的一员')
	console.log('# 正在开发的有: ')
	console.log('EzUpdate GitHub->https://github.com/Qianshi-OriStudio/EzUpdate')
}
// Get BrowserUA -----------------------------------------------
SystemInfo = function() {
  	var ua = navigator.userAgent, //获取浏览器UA
 	isWindowsPhone = /(?:Windows Phone)/.test(ua),
	isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
	isAndroid = /(?:Android)/.test(ua),
	isFireFox = /(?:Firefox)/.test(ua),
	isChrome = /(?:Chrome|CriOS)/.test(ua),
	isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
	isPhone = /(?:iPhone)/.test(ua) && !isTablet,
	isPc = !isPhone && !isAndroid && !isSymbian;
	return {
		isTablet : isTablet,
		isPhone: isPhone,
		isAndroid : isAndroid,
		isPc : isPc
	};
};
if (!SystemInfo().isPc){
	console.warn('The current device environment is not a PC, and errors may occur!')
}
// ------------------------------Interface   ------------------------------
function getCookie(name){
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i].trim();
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
function SetCookieValue(Value, Key) {
	DelCookieValue(Value)
	document.cookie = Value + '=' + Key;
}
function DelCookieValue(Value) {
	document.cookie= Value + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
}
function GetCookieKey(Value){
	Key = getCookie(Value)
	if(Key == null){
		return null;
	}else{
		return Key;
	}
}
function jsleft(lefts,leftn){
    var sl=lefts;
    sl = sl.substring(0,leftn);     
    return sl;
}
function FromFalseToTrue(URL) {
	for (var i = 0; i < 2; i++) {
		var Ret = HtmlUrlRead(URL);
		var xhr = new XMLHttpRequest();
		xhr.open('GET',Ret,true);
		xhr.onreadystatechange = function () {
			if(xhr.readyState == 4){
				if (xhr.state == 200 || xhr.status == 0) {
					return xhr.responseStream
				}
			}
		xhr.send(null);
		}
	}
}
// ------------------------------Options Proc------------------------------
function SelectOptionsImport(){
	var jsonData = HtmlUrlRead('config/DefaultBackgroundApiList.json')
	var jsonObj = JSON.parse(jsonData);
	var DOM_Select = document.getElementById('ClientDiv-OptionsUI-ul-BackgroundSelect-Select');
	DOM_Select.innerHTML = ''
	var cookie_BGApi = GetCookieKey('BackgroundApi');
	for (var i = 0; i < getJsonLength(jsonObj.List); i++) {
		if (cookie_BGApi) {
			if(cookie_BGApi == md5(jsonObj.ListName[i])){
				var currentIndex = i;
			}
		} else if (jsonObj.ListName[i] == jsonObj.DefaultValue) {
			var currentIndex = i;
		} else if (!currentIndex && !cookie_BGApi) {
			console.error('Cookie-Config Be Changed And Danger!');
		}
		var DOM_NewOption = document.createElement('option');
		DOM_NewOption.text = jsonObj.ListName[i];
		DOM_NewOption.value = md5(jsonObj.ListName[i]);
		DOM_Select.appendChild(DOM_NewOption);
	}
	document.firstElementChild.style.backgroundImage = 'url('+jsonObj.List[currentIndex]+')';
	DOM_Select.options[currentIndex].selected = true;
}
function ApplyOptionsSave() {
	var jsonData = HtmlUrlRead('config/DefaultBackgroundApiList.json')
	var jsonObj = JSON.parse(jsonData);
	var cookie_BGApi = GetCookieKey('BackgroundApi');
	for (var i = 0; i < getJsonLength(jsonObj.List); i++) {
		if (cookie_BGApi) {
			if(cookie_BGApi == md5(jsonObj.ListName[i])){
				var currentAPI = jsonObj.List[i];
			}
		} else if (jsonObj.ListName[i] == jsonObj.DefaultValue) {
			var currentAPI = jsonObj.List[i];
		} else if (!currentAPI && !cookie_BGApi) {
			console.error('Cookie-Config Be Changed And Danger!');
		}
	}
	document.firstElementChild.style.backgroundImage = 'url('+ currentAPI +')';
}
function SelectOptionsSave(x) {
	SetCookieValue('BackgroundApi', x);
	ApplyOptionsSave();
}
// ------------------------------User Function------------------------------
function ClientDiv_LeftTab_OnClick(){
	ClientDivLeftTab = document.getElementById("ClientDiv-LeftTab")
	ClientDivLeftTab.className = ClientDivLeftTab.className != "EasingOut_Left"?"EasingOut_Left":"";
}
async function ClientDiv_LeftTab_li_ReadMe_OnClick(){
	var nul = document.getElementById('ClientDiv-Center-ExChangeLink')
	if(nul.className=='FIF FI'){
		Js_ExchangeLink()
	}
	var ReadMe = document.getElementById("ClientDiv-ReadMe")
	ReadMe.style.display = ReadMe.className != 'FOF FO'?'block':'block'
	await sleep(10)
	/* ReadMe.style.display = ReadMe.style.display != "none"?"none":"inline"; */
	ReadMe.className = ReadMe.className != "FOF FO"?"FOF FO":"FIF FI"
	await sleep(990)
	ReadMe.style.display = ReadMe.className != 'FIF FI'?'none':'block'
}
async function Js_ExchangeLink(){
	if(document.getElementById('ClientDiv-ReadMe').className=='FIF FI'){
		Main_LeftTab_li_ReadMe_OnClick()
	}
	var Banner = document.getElementById("ClientDiv-Center-Banner")
	var ExChangeLink = document.getElementById("ClientDiv-Center-ExChangeLink")
//	Banner.style.display = Banner.className!='FOF FO EasingOut_Bottom'?'none':'block';
//	ExChangeLink.style.display = ExChangeLink.className!='FOF FO EasingOut_Bottom'?'none':'block';
	if (Banner.className != 'FOF FO EasingOut_Bottom') {
		ExChangeLink.style.display = 'block';
	} else {
		Banner.style.display = 'block';
	}
	await sleep(10)
	Banner.className = Banner.className != "FOF FO EasingOut_Bottom"?"FOF FO EasingOut_Bottom":"FIF FI";
	ExChangeLink.className = ExChangeLink.className != "FOF FO EasingOut_Bottom"?"FOF FO EasingOut_Bottom":"FIF FI";
	await sleep(990)
	Banner.style.display = Banner.className!='FOF FO EasingOut_Bottom'?'block':'none';
	ExChangeLink.style.display = ExChangeLink.className!='FOF FO EasingOut_Bottom'?'block':'none';
}
function ClientDiv_ReadMe_Left_Info_Init(){
	var System = SystemInfo().isPc != false ? 'PC': 'Mobile' ;
	var DOM_Element = document.getElementById('ClientDiv-ReadMe-li-TencentQQ-' + System);
	DOM_Element.style.display = DOM_Element.style.display!="block"?"block":"none";
}
async function ClientDiv_LeftTab_OnMouseLeave(x) {
	await sleep(250)
	x.className = 'EasingOut_Left'
}
async function ClientDiv_LeftTab_OnMouseOver(x) {
	x.className = '';
}
async function ClientDiv_OptionsUI_OnClick(){
	OptionsUI_li = document.getElementById('ClientDiv-OptionsUI-ul');
	OptionsUI_li.style.display = 'block';
	await sleep (1)
	OptionsUI_li.className = OptionsUI_li.className != 'FOF FO EasingOut_Left'?'FOF FO EasingOut_Left':'FIF FI';
	await sleep(610)
	OptionsUI_li.style.display = OptionsUI_li.className != 'FOF FO EasingOut_Left' ? 'block' : 'none';
}