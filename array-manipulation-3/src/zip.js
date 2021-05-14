/* exported zip */
function zip(first, second) {
  const newArr = [];
  const smallerLength = (first.length < second.length) ? first.length : second.length;
  for (let i = 0; i < smallerLength; i++) {
    newArr.push([first[i], second[i]]);
  }
  return newArr;
}
