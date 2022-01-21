import MediaPlayer from "./classes/MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [
    //new AutoPlay()
  ],
});

const play = document.getElementById("play");
play.onclick = () => player.togglePlay();

const mute = document.getElementById("mute");
mute.onclick = () => player.toggleMute();
