/* exported intersection */
function intersection(first, second) {
  const intersectArr = [];
  for (const elem of first) {
    if (second.includes(elem)) intersectArr.push(elem);
  }
  return intersectArr;
}
