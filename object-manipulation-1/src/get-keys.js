/* exported getKeys */
function getKeys(object) {
  const objKeys = [];
  for (const key in object) objKeys.push(key);
  return objKeys;
}
