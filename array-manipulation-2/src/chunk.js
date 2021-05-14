/* exported chunk */
function chunk(array, size) {
  if (array.length === 0) return [];
  const tempArr = [];
  let index = 0;
  while (index < array.length) {
    const insideArr = [];
    let j = 0;
    while (j < size) {
      if (index < array.length) insideArr.push(array[index]);
      index++;
      j++;
    }
    tempArr.push(insideArr);
  }
  return tempArr;
}
