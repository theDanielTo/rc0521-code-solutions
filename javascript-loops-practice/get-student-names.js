/* exported getStudentNames */
function getStudentNames(students) {
  var namesOfStudents = [];
  for (let i = 0; i < students.length; i++) {
    namesOfStudents.push(students[i].name);
  }
  return namesOfStudents;
}
