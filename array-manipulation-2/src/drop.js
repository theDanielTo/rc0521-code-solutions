/* exported drop */
function drop(array, count) {
  const tempArr = [];
  for (let i = count; i < array.length; i++) tempArr.push(array[i]);
  return tempArr;
}
