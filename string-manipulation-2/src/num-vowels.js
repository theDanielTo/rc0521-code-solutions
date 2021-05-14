/* exported numVowels */
function numVowels(string) {
  if (string.length <= 0) return 0;
  let numOfVowels = 0;
  const toLoweredStr = string.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (const char of toLoweredStr) {
    if (vowels.includes(char)) numOfVowels++;
  }
  return numOfVowels;
}
