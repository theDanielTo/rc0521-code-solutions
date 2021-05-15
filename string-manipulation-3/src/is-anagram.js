/* exported isAnagram */
function isAnagram(firstString, secondString) {
  // const tempArr1 = firstString.split(' ');
  // const tempArr2 = secondString.split(' ');
  // let newStr1 = '';
  // let newStr2 = '';
  // for (const elem of tempArr1) newStr1 += elem;
  // for (const elem of tempArr2) newStr2 += elem;
  const newStr1 = firstString.replace(/\s+/g, '');
  const newStr2 = secondString.replace(/\s+/g, '');
  if (newStr1.length !== newStr2.length) return false;
  const sorted1 = newStr1.split('').sort().join('');
  const sorted2 = newStr2.split('').sort().join('');
  return (sorted1 === sorted2);
}
