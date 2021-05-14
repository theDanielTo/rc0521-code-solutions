/* exported includes */
function includes(array, value) {
  for (const elem of array) {
    if (elem === value) return true;
  }
  return false;
}
