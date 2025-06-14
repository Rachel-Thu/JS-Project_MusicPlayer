// Declare variables using DOM
let trackImage = document.querySelector(".trackImage");
let trackName = document.querySelector(".trackName");
let trackArtist = document.querySelector(".trackArtist");
let audioTag = document.querySelector(".audioTag");
let playBtn = document.querySelector(".playBtn");
let pauseBtn = document.querySelector(".pauseBtn");
let totalDisplay = document.querySelector(".totalDisplay");
let currentDisplay = document.querySelector(".currentDisplay");
let currentTime = document.querySelector(".currentTime");
let count = 0;
let isPlay = false;
  
// Create Array
const songlist = [
    {
        name : "See You Again",
        artist : "Wiz Khalifa featuring: Charlie Puth",
        image : "./Image/Image1.jpg",
        path : "./Music/Music1.mp3" 
    },
    {
        name : "Try Everything",
        artist : "Shakira",
        image : "./Image/Image2.jpg",
        path : "./Music/Music2.mp3" 
    },
    {
        name : "We are Back",
        artist : "Aulii Cravalho",
        image : "./Image/Image3.jpg",
        path : "./Music/Music3.mp3" 
    },
];

// Start Function
function start() {
    trackImage.style.backgroundImage = "url(" + songlist[count].image + ")";
    trackName.textContent = songlist[count].name;
    trackArtist.textContent = songlist[count].artist;
    audioTag.src = songlist[count].path;

};

// Play Function 
function playSong() {
    audioTag.play();
    isPlay = true;
    playBtn.classList.add("hidden");
    pauseBtn.classList.remove("hidden");
};

// Pause Funciton
function pauseSong() {
    audioTag.pause();
    isPlay = false;
    playBtn.classList.remove("hidden");
    pauseBtn.classList.add("hidden");
};

// Next Function
function next() {
    if (count == 2) {
        return;
    };
    if (count < 3) {
        count++;
        start();
        if (isPlay) {
            audioTag.play();
        };
    };  
    randomBgColor();
};

// Previous Function 
function previous() {
    if (count > 0) {
        count--;
        start();
        if (isPlay) {
            audioTag.play();
        };
    };
    randomBgColor();
};

// Display Song Time 
audioTag.addEventListener("loadeddata", function() {
    let totalDuration = Math.floor(audioTag.duration);
    let minutes = Math.floor(totalDuration / 60);
    let seconds = Math.floor(totalDuration % 60);
    totalDisplay.textContent = 
    (minutes < 10 ? "0" + minutes : minutes) + ":" + 
    (seconds < 10 ? "0" + seconds : seconds);

    audioTag.addEventListener("timeupdate", function() {
        let currentDuration = audioTag.currentTime;
        let minutes = Math.floor(currentDuration / 60);
        let seconds = Math.floor(currentDuration % 60);
        currentDisplay.textContent = 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);

        currentTime.style.width = (currentDuration / totalDuration) * 400 + "px";
    });
});

// Random Background Color Function
function randomBgColor() {
    let red = Math.floor(Math.random()*256)+64;
    let green = Math.floor(Math.random()*256)+64;
    let blue = Math.floor(Math.random()*256)+64;
    let bgColor ="rgb(" + red + "," + green + "," + blue + ")";
    document.body.style.background = bgColor;
};

// Call Start Function
start();