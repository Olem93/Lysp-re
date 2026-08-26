let autoChange = 1;
let timeOut;
let seconds = 5000;

// function lightsOff() {
//   //document.body.style.backgroundImage = "url('lyspærePåBG.jpg')";
//   document.body.style.backgroundColor = "red";
// }

function lightsOff() {
  if (autoChange === 1) {
    document.body.style.backgroundImage = "url('lightOnBG.jpg')";
    autoChange = 2;
    seconds = 50;
  } else if (autoChange === 2) {
    document.body.style.backgroundImage = "url('lightOffBG2.jpg')";
    autoChange = 3;
    seconds = 70;
  } else if (autoChange === 3) {
    document.body.style.backgroundImage = "url('lightOnBG.jpg')";
    autoChange = 4;
    seconds = 90;
  } else if (autoChange === 4) {
    document.body.style.backgroundImage = "url('lightOffBG2.jpg')";
    autoChange = 5;
    seconds = 100;
  } else if (autoChange === 5) {
    document.body.style.backgroundImage = "url('lightOnBG.jpg')";
    autoChange = 6;
    seconds = 1000;
  } else if (autoChange === 6) {
    document.body.style.backgroundImage = "url('lightOffBG3.jpg')";
    autoChange = 7;
    seconds = 600;
  } else if (autoChange === 7) {
    document.body.style.backgroundImage = "url('lightOnBG.jpg')";
    autoChange = 8;
    seconds = 7000;
  } else if (autoChange === 8) {
    document.body.style.backgroundImage = "url('lightOffBG2.jpg')";
    autoChange = 9;
    seconds = 100;
  } else if (autoChange === 9) {
    document.body.style.backgroundImage = "url('lightOnBG.jpg')";
    autoChange = 10;
    seconds = 1000;
  } else if (autoChange === 10) {
    document.body.style.backgroundImage = "url('lightOffBG4.jpg')";
    autoChange = 11;
    seconds = 600;
  } else if (autoChange === 11) {
    document.body.style.backgroundImage = "url('lightOnBG.jpg')";
    autoChange = 12;
    seconds = 900;
  } else if (autoChange === 12) {
    document.body.style.backgroundImage = "url('lightOffBG5.jpg')";
    autoChange = 13;
    seconds = 900;
  } else if (autoChange === 13) {
    document.body.style.backgroundImage = "url('lightOnBG.jpg')";
    autoChange = 14;
    seconds = 900;
  } else {
    document.body.style.backgroundImage = "url('lightOffBG1.jpg')";
  }
  timeOut = setTimeout(lightsOff, seconds);
}
function stopTimeout() {
  clearTimeout(timeOut);
}
