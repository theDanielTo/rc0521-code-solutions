const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const x = parseInt(process.argv[2]);
const y = parseInt(process.argv[4]);

switch (process.argv[3]) {
  case 'plus':
    console.log(add(x, y));
    break;
  case 'minus':
    console.log(subtract(x, y));
    break;
  case 'times':
    console.log(multiply(x, y));
    break;
  case 'over':
    console.log(divide(x, y));
    break;
  default:
    console.log('Not a valid operation.');
}
