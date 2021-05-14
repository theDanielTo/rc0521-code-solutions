/* exported capitalizeWords */
function capitalizeWords(string) {
  const arrOfWords = string.split(' ');
  let newStr = '';
  newStr += arrOfWords[0][0].toUpperCase() + arrOfWords[0].slice(1).toLowerCase();
  for (let i = 1; i < arrOfWords.length; i++) {
    newStr += ' ' + arrOfWords[i][0].toUpperCase() + arrOfWords[i].slice(1).toLowerCase();
  }
  return newStr;
}
