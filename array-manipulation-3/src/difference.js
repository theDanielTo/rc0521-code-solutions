/* exported difference */
function difference(first, second) {
  const differenceArr = [];
  for (const elem of first) {
    if (!second.includes(elem)) differenceArr.push(elem);
  }
  for (const elem of second) {
    if (!first.includes(elem)) differenceArr.push(elem);
  }
  return differenceArr;
}
