var student = {
  firstName: 'Daniel',
  lastName: 'To',
  age: 2019
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'QC Inspector';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Toyota',
  model: '4Runner',
  year: 2018
};

vehicle['color'] = 'Slate Grey';
vehicle['isConvertible'] = false;
console.log("value of vehicle['color']", vehicle['color']);
console.log("value of vehicle['isConvertible']", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Perogie',
  type: 'Dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
