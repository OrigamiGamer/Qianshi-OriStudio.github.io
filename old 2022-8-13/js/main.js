{
	let imgUrlArr = [
	'https://www.acy.moe/api/1/',
	'https://www.dmoe.cc/random.php',
	'https://api.ixiaowai.cn/api/api.php',
	'https://api.qicaiyun.top/ercy/api.php',
	'Null, return 0',
	'https://api.yimian.xyz/img?type=moe&size=1920x1080',
	'https://api.yimian.xyz/img?type=wallpaper',
	'https://img.paulzzh.com/touhou/random',
	'https://img.xjh.me/random_img.php',
	'https://acg.toubiec.cn/random.php'
	];
	let time_ = new Date().valueOf()
	var imgUrl = imgUrlArr[time_.toString().substr(-1)];
	//var imgUrl = 'https://images4.alphacoders.com/841/841629.jpg'
}
EventUtil.addHandler(window,'load',load = (e) =>{
	if(window.location.pathname == '/404.html')
	{
		//console.warn('警告: 你所寻找的资源不存在!');
		throw '错误: 你所寻找的资源不存在!';
	}else{
		loadRescourse();
	}
});
loadRescourse = () =>{
	window.curStatus = document.getElementsByClassName('statusLoad')[0]
	console.log('start loading');
	curStatus.innerText = '(0/1) Loading background-image';
	document.firstElementChild.style.backgroundImage = 'url('+imgUrl+')';
	{
		let imgStatus = new Image();
		imgStatus.src = imgUrl;
		console.debug(imgUrl)
	
		var id = setInterval(()=>{
			if(imgStatus.complete){
				clearInterval(id);
				if(!(imgStatus.fileSize > 0 || (imgStatus.width > 0 && imgStatus.height > 0)))
				{
					curStatus.innerText = '╳ Error, we will try again ... ╳';
					console.error("当前的 API 所提供的壁纸是不存在的。")
					setTimeout("location.reload()",3000);
					return;
				}else{
					console.info('success to wallpaper load!');
					loadedEnd();
				}
			}
		},10);
	};
}
async function loadedEnd(){
	var loadingScreen = document.getElementById('body-loadingScreen');
	curStatus.innerText = ' Done.';
	await sleep(100);
	loadingScreen.firstElementChild.className = 'centerExtra alphaOutFrame alphaOut';
	curStatus.className = 'centerExtra statusLoad alphaOutFrame alphaOut';
	await sleep(1000);
	loadingScreen.firstElementChild.innerText = '嗨~别来无恙啊！';
	loadingScreen.firstElementChild.className = 'centerExtra alphaInFrame alphaIn';
	await sleep(1200);
	loadingScreen.className = 'alphaOutFrame alphaOut';
	await sleep(1000);
	loadingScreen.remove()
}
// - - - - - - - - interface - - - - - - - - 
sleep=(time)=>{
	return new Promise((resolve) => setTimeout(resolve, time));
}