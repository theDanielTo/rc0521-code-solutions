/* exported unique */
function unique(array) {
  const uniqueArr = [];
  for (const elem of array) {
    if (!uniqueArr.includes(elem)) {
      uniqueArr.push(elem);
    }
  }
  return uniqueArr;
}
