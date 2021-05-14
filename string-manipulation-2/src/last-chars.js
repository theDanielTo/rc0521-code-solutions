/* exported lastChars */
function lastChars(length, string) {
  if (string.length > length) return string.slice(string.length - length);
  else return string.slice(0);
}
