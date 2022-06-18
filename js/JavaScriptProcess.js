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