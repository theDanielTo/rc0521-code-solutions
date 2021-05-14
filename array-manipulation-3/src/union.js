/* exported union */
function union(first, second) {
  const unionArr = [...first];
  for (const elem of second) {
    if (!unionArr.includes(elem)) unionArr.push(elem);
  }
  return unionArr;
}
