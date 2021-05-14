/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() !== 'javascript') {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  } else {
    let wordCapitalized = '';
    for (let i = 0; i < word.length; i++) {
      if (i === 0 || i === 4) wordCapitalized += word[i].toUpperCase();
      else wordCapitalized += word[i].toLowerCase();
    }
    return wordCapitalized;
  }
}
