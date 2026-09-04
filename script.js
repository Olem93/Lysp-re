//model

const app = document.getElementById("app");
const audioAmbience = new Audio("soundtrack-lamp.mp3");
let autoChange = 1;
let switchChanger = 1;
//let shrekChange = 1;
let timeOut;
let seconds = 5000;
let isLightOff = false;
//let isDoorShrekOff = false;
let audioFlicker = new Audio("lampflicker.mp3");
let audioBuzz = new Audio("lampsound.mp3");
let audioSwamp = new Audio("swampDialogue.mp3");
let audioStartling = new Audio("startlingSound.mp3");
let audioNotButtons = new Audio("notTheButtons.mp3");
let audioMuffinman = new Audio("muffinMan.mp3");
let audioLightswitch = new Audio("lightswitch.mp3");
let audioSteps1 = new Audio("steps1.mp3");
let audioSteps2 = new Audio("steps2.mp3");
let audioAllstar = new Audio("soundtrackAllstar.mp3");

//view

pageView();
function pageView() {
  app.innerHTML = /*html*/ `
    <div style="background-color: transparent; width: 32px; height: 45px; position: absolute; top: 440px; left: 200px;" 
    onclick="buttonClicked(); new Audio('lightswitch.mp3').play();"></div>
    <div style="background-color: transparent; width: 140px; height: 600px; position: absolute; top: 120px; left: 800px;" 
    onclick="doorClicked()"></div>
     <div style="background-color: transparent; width: 140px; height: 300px; position: absolute; top: 240px; left: 600px;" 
    onclick="shrekClicked()"></div>
    `;
}

//controller

//---shrekdoor//

function doorClicked() {
  if (shrekState()) {
    document.body.style.backgroundImage = "url('lightOffBG5.jpg')";
    stopAudio();
    audioSteps2.play();
    audioAllstar.play();
    seconds = 13000;
    stopAudio();
    stopTimeout();
  } else {
    changeLightState();
  }
}

function shrekState() {
  isLightOff = !isLightOff;
  return !isLightOff;
}

function shrekClicked() {
  if (changeLightState()) {
    document.body.style.backgroundImage = "url('lightOffBG9.jpg')";
    stopAudio();
    audioLightswitch.play();
    audioStartling.play();
    audioSwamp.play();
    seconds = 6000;
    stopAudio();
    stopTimeout();
  } else {
    changeLightState();
  }
}

//---lights//

// switch (switchChanger) {
//   case 1:
//     document.body.style.backgroundImage = "url('lightOnBG.jpg')";
//     audioFlicker.play();
//     audioBuzz.loop = true;
//     audioBuzz.play();
//     break;
//   case 2:
//     document.body.style.backgroundImage = "url('lightOffBG10.jpg')"; // lys av, musikk trigger.
//     audioAmbience.loop = true;
//     audioAmbience.play();
//     stopAudio();
//     break;
//   case 3:
//     lightsOff();
//     break;
//   default:
//     document.body.style.backgroundImage = "url('lightOffBG1.jpg')";
//     stopAudio();
//     stopTimeout();
// }

function buttonClicked() {
  if (switchChanger === 1) {
    document.body.style.backgroundImage = "url('lightOnBG.jpg')"; //lyspære på normal
    audioFlicker.play();
    audioBuzz.loop = true;
    audioBuzz.play();
    switchChanger = 2;
  } else if (switchChanger === 2) {
    document.body.style.backgroundImage = "url('lightOffBG10.jpg')"; // lys av, musikk trigger.
    audioAmbience.loop = true;
    audioAmbience.play();
    stopAudio();

    switchChanger = 3;
  } else if (switchChanger === 3) {
    // kjører liftsOff funksjonen som kjører bilder i RNG
    lightsOff();
    changeLightState();
    switchChanger = 4;
  } else {
    document.body.style.backgroundImage = "url('lightOffBG10.jpg')"; // lys av normal
    seconds = 5000;
    stopAudio();
    stopTimeout();
    switchChanger = 3; // Kjører nr 3 igjen. Fra og med nå bytter den bare fram og tilbake
    // mellom 3 og 4 til siden er oppdatert. Fungerer ikke helt pr nå, som om lightsOff() ikke start på nytt, til slutt er det bare normal pære.
  }
  console.log(switchChanger);
}

// OG function buttonClicked() {
//   if (changeLightState()) {
//     lightsOff();
//   } else {
//     document.body.style.backgroundImage = "url('lightOffBG10.jpg')";
//     seconds = 5000;
//     autoChange = 1;
//     stopTimeout();
//   }
// }

// function lightOnFirst() {
//   document.body.style.backgroundImage = "url('lightOnBG.jpg')";
//   audioFlicker.play();
//   audioBuzz.loop = true;
//   audioBuzz.play();
// }

function changeLightState() {
  isLightOff = !isLightOff;
  return isLightOff;
}

function lightsOff() {
  if (autoChange === 1) {
    document.body.style.backgroundImage = "url('lightOnBG.jpg')";
    audioFlicker.play();
    audioBuzz.play();
    seconds = 500;
  } else if (autoChange === 2) {
    document.body.style.backgroundImage = "url('lightOnBG.jpg')";
    audioBuzz.play();
    seconds = 200;
  } else if (autoChange === 3) {
    document.body.style.backgroundImage = "url('lightOnBG.jpg')";
    audioBuzz.play();
    seconds = 300;
  } else if (autoChange === 4) {
    document.body.style.backgroundImage = "url('lightOnBG.jpg')";
    audioBuzz.play();
    seconds = 800;
  } else if (autoChange === 5) {
    document.body.style.backgroundImage = "url('lightOffBG2.jpg')";
    stopAudio();
    seconds = 200;
  } else if (autoChange === 6) {
    document.body.style.backgroundImage = "url('lightOffBG2.jpg')";
    stopAudio();
    seconds = 200;
  } else if (autoChange === 7) {
    document.body.style.backgroundImage = "url('lightOffBG2.jpg')";
    stopAudio();
    seconds = 500;
  } else if (autoChange === 8) {
    document.body.style.backgroundImage = "url('lightOffBG3.jpg')";
    stopAudio();
    seconds = 800;
  } else if (autoChange === 9) {
    document.body.style.backgroundImage = "url('lightOffBG4.jpg')";
    stopAudio();
    seconds = 800;
  } else if (autoChange === 10) {
    document.body.style.backgroundImage = "url('lightOffBG8.jpg')";
    audioSteps1.play();
    stopAudio();
    seconds = 800;
  } else if (autoChange === 11) {
    document.body.style.backgroundImage = "url('lightOffBG11.jpg')";
    audioMuffinman.play();
    stopAudio();
    seconds = 5000;
  } else if (autoChange === 12) {
    document.body.style.backgroundImage = "url('lightOffBG6.jpg')";
    stopAudio();
    seconds = 600;
  } else if (autoChange === 13) {
    document.body.style.backgroundImage = "url('lightOffBG7.jpg')";
    stopAudio();
    seconds = 300;
  } else if (autoChange === 14) {
    document.body.style.backgroundImage = "url('lightOffBG2.jpg')";
    stopAudio();
    audioNotButtons.play();
    seconds = 3000;
  } else {
    document.body.style.backgroundImage = "url('lightOnBG.jpg')";
    stopAudio();
    stopTimeout();
    audioBuzz.loop = true;
    audioBuzz.play();
    return;
  }
  autoChange = getRandomNumber();
  timeOut = setTimeout(lightsOff, seconds);
}

function stopTimeout() {
  clearTimeout(timeOut, audioBuzz);
}

function stopAudio() {
  audioBuzz.pause();
  audioBuzz.currentTime = 0;
}
function getRandomNumber() {
  return Math.floor(Math.random() * 15) + 1;
}
