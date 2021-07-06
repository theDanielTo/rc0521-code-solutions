function filter(array, predicate) {
  const filteredArr = [];
  for (const elem of array) {
    if (predicate(elem)) filteredArr.push(elem);
  }
  return filteredArr;
}
