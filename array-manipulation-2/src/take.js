/* exported take */
function take(array, count) {
  if (array.length === 0) return [];
  const tempArr = [];
  for (let i = 0; i < count; i++) tempArr.push(array[i]);
  return tempArr;
}
