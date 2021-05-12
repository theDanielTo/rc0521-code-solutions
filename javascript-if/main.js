/* eslint-disable no-console */
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
var shia = {
  name: 'Shia Lebouf',
  age: 34
};

console.log('Value of shia object:', shia);
console.log('Value of isUnderFive(3):', isUnderFive(3));
console.log('Value of isUnderFive(7):', isUnderFive(7));
console.log('Value of isEven(6):', isEven(6));
console.log('Value of isEven(9):', isEven(9));
console.log('Value of startsWithJ("Javascript"):', startsWithJ('Javascript'));
console.log('Value of startsWithJ("Havascript"):', startsWithJ('Havascript'));
console.log('Value of isOldEnoughToDrink(shia):', isOldEnoughToDrink(shia));
console.log('Value of isOldEnoughToDrive(shia):', isOldEnoughToDrive(shia));
console.log('Value of isOldEnoughToDrinkAndDrive(shia):', isOldEnoughToDrinkAndDrive(shia));
console.log('Value of categorizeAcidity(7):', categorizeAcidity(7));
console.log('Value of categorizeAcidity(5):', categorizeAcidity(5));
console.log('Value of categorizeAcidity(9):', categorizeAcidity(9));
console.log('Value of categorizeAcidity(88):', categorizeAcidity(88));
console.log('Value of introduceWarnerBro("wakko"):', introduceWarnerBro('wakko'));
console.log('Value of introduceWarnerBro("dot"):', introduceWarnerBro('dot'));
console.log('Value of introduceWarnerBro("slappy"):', introduceWarnerBro('slappy'));

function isUnderFive(number) {
  if (number < 5) return true;
  return false;
}

function isEven(number) {
  if (number % 2 === 0) return true;
  return false;
}

function startsWithJ(string) {
  if (string.charAt(0) === 'J') return true;
  return false;
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) return true;
  return false;
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) return true;
  return false;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) return 'neutral';
  else if (pH >= 0 && pH < 7) return 'acid';
  else if (pH > 7 && pH <= 14) return 'base';
  else return 'invalid pH level';
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') return "We're the warner brothers!";
  else if (name === 'dot') return "I'm cute~";
  else return 'Goodnight everybody!';
}
