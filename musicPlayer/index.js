const bod = document.getElementById('body');
const r = document.getElementById("range");
const img = document.getElementById("songImg");
const playImg = document.getElementById("play");
const songNames = document.getElementById("songName");
const songAs = document.getElementById("songA");
const now = document.getElementById("timeNow");
const dur = document.getElementById("duration");
let isPlay = true;
let index = 0;

let music = new Audio();
music.src = 'audio/rizza.mp3';
music.currentTime = 0;

setTimeout(() => {
        r.max = music.duration;
        dur.innerHTML = array[index].duration;
    }, 300);

setInterval(() => {
    r.value = music.currentTime;
    now.innerHTML = formatTime(music.currentTime);
}, 500);

setInterval(() => {
    if (music.paused) {
        playImg.src = 'svg/play.svg';
        isPlay = true;
    } else {
        playImg.src = 'svg/pause.svg';
        isPlay = false;
    }
}, 200);

function play() {
    if (isPlay) {
       music.play();
       isPlay = false;
       playImg.src = 'svg/pause.svg';
    } else {
        music.pause();
        isPlay = true;
        playImg.src = 'svg/play.svg';
    } 
}

music.addEventListener('ended', () => {
  next(1);
});

function next(n) {
    if (index === array.length - 1 && n > 0) {
        index = 0;
        music.src = array[index].link;
        music.currentTime = 0;
        setTimeout(() => {
            r.max = music.duration;
            if (isPlay) {
                music.play();
             }
            }, 150);
        img.src = array[index].image;
        songNames.innerText = array[index].songN;
        songAs.innerText = array[index].songAth;
        dur.innerHTML = array[index].duration;
    } else if (index === 0 && n < 0) {
        index = array.length - 1;
        music.src = array[index].link;
        music.currentTime = 0;
        setTimeout(() => {
            r.max = music.duration;
            if (isPlay) {
                music.play();
             }
            }, 150);
        img.src = array[index].image;
        songNames.innerText = array[index].songN;
        songAs.innerText = array[index].songAth;
        dur.innerHTML = array[index].duration;
    } else {
        index = index + n;
        music.src = array[index].link;
        music.currentTime = 0;
        setTimeout(() => {
            r.max = music.duration;
            if (isPlay) {
                music.play();
             }
            }, 150);
        img.src = array[index].image;
        songNames.innerText = array[index].songN;
        songAs.innerText = array[index].songAth;
        dur.innerHTML = array[index].duration;
    }
}

const song1 = {
    link: 'audio/rizza.mp3',
    image: 'img/rizza.jpeg',
    songN: 'связь',
    songAth: 'LXNER, rizza',
    duration: "02:19"
}

const song2 = {
    link: 'audio/dobroe_utro.mp3',
    image: 'img/utro.jpg',
    songN: 'Доброе утро',
    songAth: 'cold carti',
    duration: '02:24'
}

const song3 = {
    link: 'audio/winter.mp3',
    image: 'img/winter.jpeg',
    songN: 'зима',
    songAth: 'ooes',
    duration: '02:28'
}

const song4 = {
    link: 'audio/govoril.mp3',
    image: 'img/govoril.png',
    songN: 'Я же говорил',
    songAth: 'Sqwore, 17 SEVENTEEN',
    duration: '02:33'
}

const song5 = {
    link: 'audio/friend.mp3',
    image: 'img/friend.png',
    songN: 'Цифровые друзья',
    songAth: 'хочуспать',
    duration: '02:00'
}



const array = [song1, song2, song3, song4, song5];


function rangeFunc() {
    music.currentTime = r.value;
}

r.addEventListener('change', rangeFunc);

function formatTime(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
  
    if (min < 10) {
      min = `0` + min;
    }
    if (sec < 10){
      sec = `0` + sec;
    }
    return `${min}:${sec}`;
  }


img.addEventListener('click', () => {
  bod.style.backgroundImage = "url(img/walper3.png)";
});

img.addEventListener('dblclick', () => {
    bod.style.backgroundImage = "url(img/walper4.png)";
  });