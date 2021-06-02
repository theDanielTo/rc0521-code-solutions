const leftArrow = document.querySelector('.fa-chevron-circle-left');
const rightArrow = document.querySelector('.fa-chevron-circle-right');
const progressSquares = document.querySelectorAll('.fa-square');
const imageEl = document.querySelector('img');
const interval = 2000;

let intervalID = setInterval(nextImg, interval);

leftArrow.addEventListener('click', function (event) {
  prevImg();
  clearInterval(intervalID);
  setTimeout(function () {
    intervalID = setInterval(nextImg, interval);
  });
});

rightArrow.addEventListener('click', function (event) {
  nextImg();
  clearInterval(intervalID);
  setTimeout(function () {
    intervalID = setInterval(nextImg, interval);
  });
});

function nextImg() {
  if (imageEl.alt === 'Bulbasaur') {
    imageEl.src = './images/004.png';
    imageEl.alt = 'Charmander';
    progressSquares[0].classList.remove('fas');
    progressSquares[1].classList.add('fas');
  } else if (imageEl.alt === 'Charmander') {
    imageEl.src = './images/007.png';
    imageEl.alt = 'Squirtle';
    progressSquares[1].classList.remove('fas');
    progressSquares[2].classList.add('fas');
  } else if (imageEl.alt === 'Squirtle') {
    imageEl.src = './images/025.png';
    imageEl.alt = 'Pikachu';
    progressSquares[2].classList.remove('fas');
    progressSquares[3].classList.add('fas');
  } else if (imageEl.alt === 'Pikachu') {
    imageEl.src = './images/039.png';
    imageEl.alt = 'Jigglypuff';
    progressSquares[3].classList.remove('fas');
    progressSquares[4].classList.add('fas');
  } else {
    imageEl.src = './images/001.png';
    imageEl.alt = 'Bulbasaur';
    progressSquares[4].classList.remove('fas');
    progressSquares[0].classList.add('fas');
  }
}

function prevImg() {
  if (imageEl.alt === 'Bulbasaur') {
    imageEl.src = './images/039.png';
    imageEl.alt = 'Jigglypuff';
    progressSquares[0].classList.remove('fas');
    progressSquares[4].classList.add('fas');
  } else if (imageEl.alt === 'Charmander') {
    imageEl.src = './images/001.png';
    imageEl.alt = 'Bulbasaur';
    progressSquares[1].classList.remove('fas');
    progressSquares[0].classList.add('fas');
  } else if (imageEl.alt === 'Squirtle') {
    imageEl.src = './images/004.png';
    imageEl.alt = 'Charmander';
    progressSquares[2].classList.remove('fas');
    progressSquares[1].classList.add('fas');
  } else if (imageEl.alt === 'Pikachu') {
    imageEl.src = './images/007.png';
    imageEl.alt = 'Squirtle';
    progressSquares[3].classList.remove('fas');
    progressSquares[2].classList.add('fas');
  } else {
    imageEl.src = './images/025.png';
    imageEl.alt = 'Pikachu';
    progressSquares[4].classList.remove('fas');
    progressSquares[3].classList.add('fas');
  }
}
