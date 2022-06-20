const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
$(document).ready(function(){})
function HtmlUrlRead(URL) {
	var xhr = new XMLHttpRequest()
	xhr.open('Get',URL,false)
	xhr.send(null)
	return (xhr.responseText)
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
// ------------------------------User Function----------------------------
function Main_LeftTab_OnClick(){
	MainLeftTab = document.getElementById("Main-LeftTab")
	MainLeftTab.className = MainLeftTab.className != "EasingOut_Left"?"EasingOut_Left":"";
}
async function Main_LeftTab_li_ReadMe_OnClick(){
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
	var DOM_Element = document.getElementById('ClientDiv-ReadMe-li-TencentQQ-' + SystemInfo().isPc != false ? 'PC': 'Mobile' );
	DOM_Element.style.display = DOM_Element.style.display!="block"?"block":"none";
}
