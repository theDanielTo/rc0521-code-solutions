/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var wordsWithSuffix = [];
  for (let i = 0; i < words.length; i++) {
    wordsWithSuffix.push(words[i] + suffix);
  }
  return wordsWithSuffix;
}
