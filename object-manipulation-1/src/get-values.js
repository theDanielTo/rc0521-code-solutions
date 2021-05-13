/* exported getValues */
function getValues(object) {
  const propVals = [];
  for (const prop in object) propVals.push(object[prop]);
  return propVals;
}
