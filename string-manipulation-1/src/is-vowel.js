/* exported isVowel */
function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (const elem of vowels) { if (elem === char.toLowerCase()) return true; }
  return false;
}
