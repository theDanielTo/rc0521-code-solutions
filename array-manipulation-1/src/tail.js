/* exported tail */
function tail(array) {
  var tailArr = [];
  for (let i = 1; i < array.length; i++) tailArr.push(array[i]);
  return tailArr;
}
