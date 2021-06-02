const timerH1 = document.querySelector('h1');

let i = 4;
var intervalID = setInterval(function () {
  i--;
  timerH1.textContent = i;
  if (i === 0) {
    timerH1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}, 1000);
