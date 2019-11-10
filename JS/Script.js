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

// Slider reviewers

let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let slider = document.getElementById("review-slider");

let icons = document.getElementsByClassName('review-img');

let n = 965;
let q = 1920;

let iconCount = 2;

let Buf = q - n;

function prev(){
    slidePrev();
    iconPrev();
}

function next(){
    slideNext();
    iconNext();
}

function slideNext(){
    Buf = q + n;
    q = Buf;
    slider.style.transform = "translate3d("+ -1 * Buf +"px, 0px, 0px)";
    prevButton.classList.remove('disabled');
    if(Buf == 3850){
        nextButton.classList.add('disabled');
    }
}

function slidePrev(){
    Buf = q - n;
    q = Buf;
    slider.style.transform = "translate3d("+ -1 * Buf +"px, 0px, 0px)";
    nextButton.classList.remove('disabled');
    if(Buf == -10){
        prevButton.classList.add('disabled');
    }
}

function iconPrev(){
    icons[iconCount].classList.remove('active');
    iconCount -= 1;
    icons[iconCount].classList.add('active');
}

function iconNext(){
    icons[iconCount].classList.remove('active');
    iconCount += 1;
    icons[iconCount].classList.add('active');
}