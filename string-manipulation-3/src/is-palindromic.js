/* exported isPalindromic */
function isPalindromic(string) {
  const tempArr = string.split(' ');
  let newStr = '';
  for (const elem of tempArr) newStr += elem;
  for (let i = 0; i < newStr.length / 2; i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
