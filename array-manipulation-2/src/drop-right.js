/* exported dropRight */
function dropRight(array, count) {
  if (array.length === 0) return [];
  const tempArr = [];
  let i = array.length - count - 1;
  while (i >= 0) {
    tempArr.unshift(array[i]);
    i--;
  }
  return tempArr;
}
