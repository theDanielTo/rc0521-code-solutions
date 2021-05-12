// Math objects
var num1 = 5;
var num2 = 10;
var num3 = 100;
var maximumValue = Math.max(num1, num2, num3);
console.log('Value of maximumValue:', maximumValue);

var heroes = ['Spider-Man', 'The Incredible Hulk', 'Deadpool', 'Wolverine'];
console.log('Value of heroes:', heroes);
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('Value of randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('Value of randomHero:', randomHero);

// Array methods
var library = [
  {
    title: 'The Way of Kings',
    author: 'Brandon Sanderson'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien'
  },
  {
    title: 'The Shining',
    author: 'Stephen King'
  }
];
console.log('library:', library);
var lastBook = library.pop();
console.log('Value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('Value of firstBook:', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
console.log('library:', library);
library.push(js);
console.log('library.push(js):', library);
library.unshift(css);
console.log('library.unshift(css):', library);
library.splice(1, 1);
console.log('library.splice(1, 1):', library);
console.log('Final value of library:', library);

// String methods
var fullName = 'Daniel To';
var firstAndLastName = fullName.split(' ');
console.log('Value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Value of sayMyName:', sayMyName);
