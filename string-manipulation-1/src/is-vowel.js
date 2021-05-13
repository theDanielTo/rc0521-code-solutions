/* exported isVowel */
function isVowel(char) {
  const vowels = [
    'a', 'e', 'i', 'o', 'u',
    'A', 'E', 'I', 'O', 'U'
  ];
  for (const elem of vowels) { if (elem === char) return true; }
  return false;
}
