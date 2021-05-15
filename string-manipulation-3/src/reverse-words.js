/* exported reverseWords */
function reverseWords(string) {
  const wordsArr = string.split(' ');
  const reversedArr = [];
  for (const elem of wordsArr) {
    let tempStr = '';
    for (let i = elem.length - 1; i >= 0; i--) {
      tempStr += elem[i];
    }
    reversedArr.push(tempStr);
  }
  return reversedArr.join(' ');
}
