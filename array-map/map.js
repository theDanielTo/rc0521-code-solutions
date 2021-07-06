function map(array, transform) {
  const mappedArr = [];
  for (const elem of array) {
    mappedArr.push(transform(elem));
  }
  return mappedArr;
}
