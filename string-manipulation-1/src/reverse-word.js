/* exported reverseWord */
function reverseWord(word) {
  let reversedStr = '';
  for (let i = word.length - 1; i >= 0; i--) { reversedStr += word.charAt(i); }
  return reversedStr;
}
