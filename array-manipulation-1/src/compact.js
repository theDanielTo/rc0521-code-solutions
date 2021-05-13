/* exported compact */
function compact(array) {
  const compactArr = [];
  for (const elem of array) { if (elem) compactArr.push(elem); }
  return compactArr;
}
