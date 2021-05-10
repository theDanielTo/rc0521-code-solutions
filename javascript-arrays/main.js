var colors = ['red', 'white', 'blue'];

console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);
var americaIs = `America is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`;
console.log(americaIs);
colors[2] = 'green';
var mexicoIs = `Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`;
console.log(mexicoIs);

var students = ['Carlos', 'Dorothy Ann', 'Arnold', 'Ralphie'];

var numberOfStudents = students.length;
console.log(`There are ${numberOfStudents} students in this class!`);
var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('lastStudent:', lastStudent);
console.log('value of students:', students);
