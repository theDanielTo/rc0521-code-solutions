/* exported titleCase */
function titleCase(title) {
  const titleAndSub = title.split(': ');
  // if title has subtitle capitalize seperately
  if (titleAndSub.length === 2) {
    let newTitle = titleAndSub[0][0].toUpperCase();
    let newSub = titleAndSub[1][0].toUpperCase();
    newTitle += capitilizeWords(titleAndSub[0]);
    newTitle = changeSpecialCases(newTitle.split(' '));
    newSub += capitilizeWords(titleAndSub[1]);
    newSub = newSub.split(' ')[0] + ' ' + changeSpecialCases(newSub.split(' ').slice(1));
    return newTitle + ': ' + newSub;
  // no subtitle. this works
  } else {
    let newtitle = titleAndSub[0][0].toUpperCase();
    newtitle += capitilizeWords(titleAndSub[0]);
    newtitle = changeSpecialCases(newtitle.split(' '));
    return newtitle;
  }
}

// capitalize first char of each word.
function capitilizeWords(string) {
  let newStr = '';
  for (let i = 1; i < string.length; i++) {
    if (string[i] === ' ' || string[i] === '-') {
      newStr += string[i] + string[i + 1].toUpperCase();
      i++;
    } else newStr += string[i];
  }
  return newStr;
}

// uncapitalize minor words & replace special words.
function changeSpecialCases(arrOfWords) {
  const minorWords = [
    'And', 'Or', 'Nor', 'But', 'A', 'An', 'The', 'As',
    'At', 'By', 'For', 'In', 'Of', 'On', 'Per', 'To'
  ];
  for (let i = 0; i < arrOfWords.length; i++) {
    if (arrOfWords[i] === 'Javascript') arrOfWords[i] = 'JavaScript';
    else if (arrOfWords[i] === 'Api') arrOfWords[i] = 'API';
    else if (minorWords.includes(arrOfWords[i])) {
      arrOfWords[i] = arrOfWords[i].toLowerCase();
    }
  }
  return arrOfWords.join(' ');
}
