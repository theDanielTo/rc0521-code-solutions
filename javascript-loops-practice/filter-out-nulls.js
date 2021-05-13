/* exported filterOutNulls */
function filterOutNulls(values) {
  var valuesWithoutNulls = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) valuesWithoutNulls.push(values[i]);
  }
  return valuesWithoutNulls;
}
