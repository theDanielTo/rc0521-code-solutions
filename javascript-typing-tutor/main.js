const quotes = [
  "Frankly, my dear, I don't give a damn.",
  'May the force be with you.',
  'Stella! Hey, Stellaaaaaaaaaaaaaa',
  "Here's Johnny!",
  'We got this team! :D'
];

const tutorText = document.querySelector('.incomplete');
const completedText = document.querySelector('.complete');
const currentLetter = document.querySelector('.current-letter');
const finishedCard = document.querySelector('.finished-card');
const accuracyText = document.querySelector('#accuracy');
const playAgainButton = document.querySelector('button');
let incorrectPresses = 0;
let textLength = tutorText.textContent.length + 1;

document.addEventListener('keydown', function (event) {
  if (tutorText.textContent.length === 0) {
    document.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        finishedCard.className = 'finished-card hidden';
        resetText();
      }
    });
    finishedCard.className = 'finished-card';
    completedText.textContent += currentLetter.textContent;
    currentLetter.textContent = '';
    tutorText.textContent = '';
  } else if (event.key === currentLetter.textContent) {
    currentLetter.className = '';
    completedText.textContent += currentLetter.textContent;
    currentLetter.textContent = tutorText.textContent[0];
    tutorText.textContent = tutorText.textContent.slice(1);
  } else {
    if (event.key !== 'Shift') {
      currentLetter.className = 'incorrect';
      incorrectPresses++;
      accuracyText.textContent = nearestHundredth(((textLength - incorrectPresses) / textLength * 100)) + '%';
    }
  }
});

playAgainButton.addEventListener('click', function (event) {
  finishedCard.className = 'finished-card hidden';
  resetText();
});

function nearestHundredth(x) {
  if (x <= 0) return 0;
  return Number.parseFloat(x).toFixed(2);
}

function resetText() {
  incorrectPresses = 0;
  const randomIndex = Math.floor(Math.random() * quotes.length);
  completedText.textContent = '';
  currentLetter.textContent = quotes[randomIndex][0];
  tutorText.textContent = quotes[randomIndex].slice(1);
  textLength = tutorText.textContent.length + 1;
  accuracyText.textContent = 100 + '%';
}
