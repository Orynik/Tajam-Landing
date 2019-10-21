"use strict";
let Play = document.querySelector(".play");
let videoEl = document.getElementById("video");

Play.onclick = () => {
    videoEl.play();
    Play.style.display = "none";
    videoEl.controls = true;
}

videoEl.onended = () =>{
    videoEl.load();
    Play.style.display = "block";
    videoEl.controls = false;
}

