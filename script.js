var audio = document.createElement("AUDIO");
audio.src = "./sound.mp3";
function PlayAudio(){
    audio.play();
    audio.loop = true;
}
