/* exported pick */
function pick(source, keys) {
  const newObj = {};
  for (const prop in source) {
    if (keys.includes(prop) && source[prop] !== undefined) {
      newObj[prop] = source[prop];
    }
  }
  return newObj;
}
