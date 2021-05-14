/* exported flatten */
function flatten(array) {
  const newArr = [];
  for (const elem of array) {
    if (Array.isArray(elem)) {
      for (const item of elem) {
        newArr.push(item);
      }
    } else {
      newArr.push(elem);
    }
  }
  return newArr;
}
