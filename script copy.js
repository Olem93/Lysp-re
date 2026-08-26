let autoChange = 1;
let timeOut;
let seconds = 5000;
let isLightOff = false;
let audioFlicker = new Audio("lampflicker.mp3");
let audioBuzz = new Audio("lampsound.mp3");

// function lightsOff() {
//   //document.body.style.backgroundImage = "url('lyspærePåBG.jpg')";
//   document.body.style.backgroundColor = "red";
// }

function buttonClicked() {
  if (changeLightState()) {
    lightsOff();
  } else {
    document.body.style.backgroundImage = "url('lightOffBG10.jpg')";
    seconds = 5000;
    autoChange = 1;
    stopTimeout();
  }
}

function changeLightState() {
  isLightOff = !isLightOff;
  return isLightOff;
}

function lightsOff() {
  console.log(autoChange);
  if (autoChange === 1) {
    document.body.style.backgroundImage = "url('lightOnBG.jpg')";
    audioFlicker.play();
    audioBuzz.play();
    seconds = 500;
  } else if (autoChange === 2) {
    document.body.style.backgroundImage = "url('lightOnBG.jpg')";
    audioBuzz.play();
    seconds = 400;
  } else if (autoChange === 3) {
    document.body.style.backgroundImage = "url('lightOnBG.jpg')";
    audioBuzz.play();
    seconds = 500;
  } else if (autoChange === 4) {
    document.body.style.backgroundImage = "url('lightOnBG.jpg')";
    audioBuzz.play();
    seconds = 700;
  } else if (autoChange === 5) {
    document.body.style.backgroundImage = "url('lightOnBG.jpg')";
    audioBuzz.play();
    seconds = 800;
  } else if (autoChange === 6) {
    document.body.style.backgroundImage = "url('lightOnBG.jpg')";
    audioBuzz.play();
    seconds = 1000;
  } else if (autoChange === 7) {
    document.body.style.backgroundImage = "url('lightOnBG.jpg')";
    audioBuzz.play();
    seconds = 100;
    seconds = 4000;
  } else if (autoChange === 8) {
    document.body.style.backgroundImage = "url('lightOffBG2.jpg')";
    stopAudio();
    seconds = 200;
  } else if (autoChange === 9) {
    document.body.style.backgroundImage = "url('lightOffBG3.jpg')";
    stopAudio();
    seconds = 200;
  } else if (autoChange === 10) {
    document.body.style.backgroundImage = "url('lightOffBG4.jpg')";
    stopAudio();
    seconds = 100;
  } else if (autoChange === 11) {
    document.body.style.backgroundImage = "url('lightOffBG5.jpg')";
    stopAudio();
    seconds = 400;
  } else if (autoChange === 12) {
    document.body.style.backgroundImage = "url('lightOffBG6.jpg')";
    stopAudio();
    seconds = 200;
  } else if (autoChange === 13) {
    document.body.style.backgroundImage = "url('lightOffBG7.jpg')";
    stopAudio();
    seconds = 300;
  } else if (autoChange === 14) {
    document.body.style.backgroundImage = "url('lightOffBG8.jpg')";
    stopAudio();
    seconds = 200;
  } else if (autoChange === 15) {
    document.body.style.backgroundImage = "url('lightOffBG9.jpg')";
    stopAudio();
    seconds = 100;
  } else {
    document.body.style.backgroundImage = "url('lightOnBG.jpg')";
    stopTimeout();
    audioBuzz.loop = true;
    audioBuzz.play();
    return;
  }
  autoChange = getRandomNumber();
  timeOut = setTimeout(lightsOff, seconds);
}
function stopTimeout() {
  audioBuzz.pause();
  audioBuzz.currentTime = 0;
  clearTimeout(timeOut, audioBuzz);
}

function stopAudio() {
  audioBuzz.pause();
  audioBuzz.currentTime = 0;
}
function getRandomNumber() {
  return Math.floor(Math.random() * 16) + 1;
}
