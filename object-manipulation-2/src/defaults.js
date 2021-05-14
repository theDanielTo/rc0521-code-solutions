/* exported defaults */
function defaults(target, source) {
  for (const prop in source) {
    let isAlreadyDefined = false;
    for (const targetProp in target) {
      if (prop === targetProp) {
        isAlreadyDefined = true;
        break;
      }
    }
    if (!isAlreadyDefined) target[prop] = source[prop];
  }
}
