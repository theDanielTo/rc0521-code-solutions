/* exported invert */
function invert(source) {
  const newObj = {};
  for (const prop in source) {
    newObj[source[prop]] = prop;
  }
  return newObj;
}
