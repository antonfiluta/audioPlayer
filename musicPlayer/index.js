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
music.src = 'audio/vampire.mp3';
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
}, 100);

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
        img.src = array[index].image;
        songNames.innerText = array[index].songN;
        songAs.innerText = array[index].songAth;
        dur.innerHTML = array[index].duration;
        setTimeout(() => {
        r.max = music.duration;
        if (!isPlay) {
            music.play();
         }
        }, 200);
    } else if (index === 0 && n < 0) {
        index = array.length - 1;
        music.src = array[index].link;
        music.currentTime = 0;
        img.src = array[index].image;
        songNames.innerText = array[index].songN;
        songAs.innerText = array[index].songAth;
        dur.innerHTML = array[index].duration;
        setTimeout(() => {
            r.max = music.duration;
            if (!isPlay) {
                music.play();
             }
            }, 200);
    } else {
        index = index + n;
        music.src = array[index].link;
        music.currentTime = 0;
        img.src = array[index].image;
        songNames.innerText = array[index].songN;
        songAs.innerText = array[index].songAth;
        dur.innerHTML = array[index].duration;
        setTimeout(() => {
            r.max = music.duration;
            if (!isPlay) {
                music.play();
             }
            }, 200);
    }
}

const song1 = {
    link: 'audio/vampire.mp3',
    image: 'img/vampire.jpg',
    songN: 'Vampire',
    songAth: 're6ce',
    duration: "02:33"
}

const song2 = {
    link: 'audio/ne_govori_mne.mp3',
    image: 'img/govori.jpeg',
    songN: 'Не говори мне',
    songAth: 'cold carti',
    duration: '01:31'
}

const song3 = {
    link: 'audio/ya_sokhranyu.mp3',
    image: 'img/save.jpg',
    songN: 'Я сохраню',
    songAth: 'cold carti',
    duration: '02:08'
}

const song4 = {
    link: 'audio/skoro.mp3',
    image: 'img/skoro.jpg',
    songN: 'Скоро',
    songAth: 'cold carti',
    duration: '02:38'
}

const song5 = {
    link: 'audio/dobroe_utro.mp3',
    image: 'img/utro.jpg',
    songN: 'Доброе утро',
    songAth: 'cold carti',
    duration: '02:24'
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