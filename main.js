var audio = document.getElementById('myaudio');
var playPauseBTN = document.getElementById('btn-play');
var count = 0;

function play(){
	if(count == 0){
		count = 1;
		audio.play();
		//playPauseBTN.innerHTML = "Pause ⏸";
	}else{
		count = 0;
		audio.pause();
		//playPauseBTN.innerHTML = "Play ►";
	}

}

function stop(){
	play()
	audio.pause();
	audio.currentTime = 0;
	//playPauseBTN.innerHTML = "Play ►";
}

