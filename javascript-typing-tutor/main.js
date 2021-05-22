const $inputForm = document.querySelector('.input-form');
const $textInput = document.querySelector('input');
const $startButton = document.querySelector('#start-btn');
const $tutorText = document.querySelector('.tutor-text');

const $incompleteText = document.querySelector('.incomplete');
const $completedText = document.querySelector('.complete');
const $currentLetter = document.querySelector('.current-letter');

const $finishedCard = document.querySelector('.finished-card');
const $accuracyDiv = document.querySelector('.typing-acc');
const $accuracyText = document.querySelector('#accuracy');
const $playAgainButton = document.querySelector('#play-again-btn');

let incorrectPresses = 0;
let textLength = 1;

$startButton.addEventListener('click', function (event) {
  $currentLetter.textContent = $textInput.value[0];
  $incompleteText.textContent = $textInput.value.slice(1);
  textLength = $incompleteText.textContent.length + 1;
  $inputForm.className = 'input-form hidden';
  $tutorText.className = 'tutor-text';
});

document.addEventListener('keydown', function (event) {
  const hasntStarted = $currentLetter.textContent.length !== 0;
  if ($incompleteText.textContent.length === 0 && hasntStarted) {
    $finishedCard.className = 'finished-card';
    $accuracyDiv.className = 'typing-acc';
    $completedText.textContent += $currentLetter.textContent;
    $currentLetter.textContent = '';
    $incompleteText.textContent = '';
  } else if (event.key === $currentLetter.textContent && hasntStarted) {
    $currentLetter.className = '';
    $completedText.textContent += $currentLetter.textContent;
    $currentLetter.textContent = $incompleteText.textContent[0];
    $incompleteText.textContent = $incompleteText.textContent.slice(1);
  } else {
    if (event.key !== 'Shift' && hasntStarted) {
      $currentLetter.className = 'incorrect';
      incorrectPresses++;
      $accuracyText.textContent = calcAcc(textLength, incorrectPresses);
    }
  }
});

$playAgainButton.addEventListener('click', function (event) {
  $finishedCard.className = 'finished-card hidden';
  $accuracyDiv.className = 'typing-acc hidden';
  $inputForm.className = 'input-form';
  $tutorText.className = 'tutor-text hidden';
  $textInput.focus();
  resetText();
});

function calcAcc(length, presses) {
  if (length - presses <= 0) return 0 + '%';
  return Number.parseFloat(((textLength - incorrectPresses) / textLength * 100).toFixed(2)) + '%';
}

function resetText() {
  incorrectPresses = 0;
  $completedText.textContent = '';
  $currentLetter.textContent = '';
  $incompleteText.textContent = '';
  textLength = 0;
  $textInput.value = '';
  $accuracyText.textContent = 100 + '%';
}
