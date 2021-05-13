/* exported reverse */
function reverse(array) {
  const reversedArr = [];
  for (const elem of array) { reversedArr.unshift(elem); }
  return reversedArr;
}
