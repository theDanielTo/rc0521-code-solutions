/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) newStr += string[secondIndex];
    else if (i === secondIndex) newStr += string[firstIndex];
    else newStr += string[i];
  }
  return newStr;
}
