/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

// console.log('Value of :',);

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log('Value of getNumbersToTen():', getNumbersToTen());
console.log('Value of getNumbersToTen():', getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log('Value of getEvenNumbersToTwenty():', getEvenNumbersToTwenty());
console.log('Value of getEvenNumbersToTwenty():', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

console.log('Value of repeatWord("word", 4):', repeatWord('word', 4));
console.log('Value of repeatWord("word", 4):', repeatWord('word', 4));

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string.charAt(i));
  }
}

console.log('Value of logEachCharacter(""):', logEachCharacter(''));
console.log('Value of logEachCharacter("Daniel To"):', logEachCharacter('Daniel To'));
console.log('Value of logEachCharacter("This is a full sentence."):', logEachCharacter('This is a full sentence.'));

function doubleAll(numbers) {
  var doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

console.log('Value of doubleAll([1, 2, 3, 4, 5]):', doubleAll([1, 2, 3, 4, 5]));
console.log('Value of doubleAll([10, 20, 30, 40, 50]):', doubleAll([10, 20, 30, 40, 50]));

function getKeys(object) {
  var keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

var obj1 = {
  a: 'A',
  b: 'B'
};
var obj2 = {
  one: 1,
  two: 2,
  three: 3
};
console.log('Value of obj1:', obj1);
console.log('Value of obj2:', obj2);
console.log('Value of getKeys(obj1):', getKeys(obj1));
console.log('Value of getKeys(obj2):', getKeys(obj2));

function getValues(object) {
  var values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}

console.log('Value of getValues(obj1):', getValues(obj1));
console.log('Value of getValues(obj2):', getValues(obj2));
