/* exported filterOutStrings */
function filterOutStrings(values) {
  var filteredArr = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') filteredArr.push(values[i]);
  }
  return filteredArr;
}
