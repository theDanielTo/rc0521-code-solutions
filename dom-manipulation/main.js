let buttonClicks = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function (event) {
  buttonClicks++;
  $clickCount.textContent = 'Clicks: ' + buttonClicks;
  if (buttonClicks < 4) $hotButton.className = 'hot-button cold';
  else if (buttonClicks < 8) $hotButton.className = 'hot-button cool';
  else if (buttonClicks < 12) $hotButton.className = 'hot-button tepid';
  else if (buttonClicks < 16) $hotButton.className = 'hot-button warm';
  else if (buttonClicks < 20) $hotButton.className = 'hot-button hot';
  else $hotButton.className = 'hot-button nuclear';
});
