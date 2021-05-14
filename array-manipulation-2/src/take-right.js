/* exported takeRight */
function takeRight(array, count) {
  if (array.length === 0) return [];
  const tempArr = [];
  let i = array.length - 1;
  while (count > 0) {
    tempArr.unshift(array[i]);
    count--;
    i--;
  }
  return tempArr;
}
