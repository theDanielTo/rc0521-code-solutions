const backgroundDiv = document.querySelector('.background');
const lightBulbButton = document.querySelector('button');

lightBulbButton.addEventListener('click', function (event) {
  if (lightBulbButton.className === 'light-button') {
    backgroundDiv.className = 'background dark-background';
    lightBulbButton.className = 'dark-button';
  } else {
    backgroundDiv.className = 'background light-background';
    lightBulbButton.className = 'light-button';
  }
});
