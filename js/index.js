var music=document.getElementById('music');
var audio=document.getElementsByTagName('audio')[0];
var page1=document.getElementById('page1');
var page2=document.getElementById('page2');
var page3=document.getElementById('page3');



//当音乐播放停止后，自动停止光盘的旋转效果
audio.addEventListener('ended',function(){
	music.setAttribute('class','');
},false);



//点击音乐图标时，控制音乐是否播放，此方法在手机端会有300ms的延迟
// music.onclick=function(){
// 	if(audio.paused){
// 		audio.play();
// 		this.setAttribute('class','play');
// 		// this.style.animationPlayState='running';  兼容性不好
// 	}else{
// 		audio.pause();
// 		this.setAttribute('class','');
// 		// this.style.animationPlayState='paused';
// 	}	
// };



//点击音乐图标时，控制音乐是否播放，此方法在手机端不会有300ms的延迟
music.addEventListener('touchstart',function(event){
	if(audio.paused){
		audio.play();
		this.setAttribute('class','play');
	}else{
		audio.pause();
		this.setAttribute('class','');
	}	
},false);



page1.addEventListener('touchstart',function(event){
	page1.style.display='none';
	page2.style.display='block';
	page3.style.display='block';
	page3.style.top='100%';
	setTimeout(function(){
		page2.setAttribute('class','page fadeOut');
		page3.setAttribute('class','page fadeIn');
	},5500);
},false);
