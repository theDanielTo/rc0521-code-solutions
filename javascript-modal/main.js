const openButton = document.querySelector('.blue-btn');
const noButton = document.querySelector('.red-btn');
const backgroundDiv = document.querySelector('.modal-bg');
const modalBoxDiv = document.querySelector('.modal-box');
const verifyBoxDiv = document.querySelector('#verify');

openButton.addEventListener('click', function (event) {
  backgroundDiv.className = 'modal-bg opened-bg';
  modalBoxDiv.className = 'modal-box opened-box';
});

noButton.addEventListener('click', function (event) {
  modalBoxDiv.className = 'modal-box';
  verifyBoxDiv.className = 'modal-box-2 opened-box';
});

verifyBoxDiv.addEventListener('click', function (event) {
  backgroundDiv.className = 'modal-bg';
});
