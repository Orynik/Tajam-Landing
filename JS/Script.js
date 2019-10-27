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

// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 900,
    framesCount = 60;

anchors.forEach(function(item) {
    // каждому якорю присваиваем обработчик события
    item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
    let scrollBy = coordY / framesCount;

      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
    if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
    } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
    }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
    });
});

let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let slider = document.getElementById("review-slider");

let icons = document.getElementsByClassName('review-img');

let n = 965;
let q = 1920;

let iconCount = 2;


prevButton.onclick = () =>{
    slidePrev();
    iconPrev();
}

nextButton.onclick = () =>{
    slideNext();
    iconNext();
}

function slidePrev(){
    let prevBuf = q - n;
    q = prevBuf;
    slider.style.transform = "translate3d("+ -1 * prevBuf +"px, 0px, 0px)";
    nextButton.classList.remove('disabled');
    if(prevBuf == -10){
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

function slideNext(){
    let nextBuf = q + n;
    q = nextBuf;
    slider.style.transform = "translate3d("+ -1 * nextBuf +"px, 0px, 0px)";
    prevButton.classList.remove('disabled');
    if(nextBuf == 3850){
        nextButton.classList.add('disabled');
    }
}