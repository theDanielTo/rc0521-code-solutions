var convertMinutesToSeconds = minutes => minutes * 60;
console.log('Calling convertMinutesToSeconds(5):', convertMinutesToSeconds(5));

var greet = name => `Hey, ${name}`;
console.log('Calling greet("Beavis")', greet('Beavis'));

var getArea = (width, height) => width * height;
console.log('Calling getArea(20, 40):', getArea(20, 40));

var somePerson = {
  firstName: 'Gandalf',
  lastName: 'the Grey'
};
console.log('Value of somePerson:', somePerson);
var getFirstName = person => person.firstName;
console.log('Calling getFirstName(somePerson):', getFirstName(somePerson));

var someArr = [1, 2, 3, 4, 5];
console.log('Value of someArr:', someArr);
var getLastElement = arr => arr[arr.length - 1];
console.log('Calling getLastElementt(someArr):', getLastElement(someArr));
