/* exported initial */
function initial(array) {
  const initArr = [];
  for (let i = 0; i < array.length - 1; i++) { initArr.push(array[i]); }
  return initArr;
}
