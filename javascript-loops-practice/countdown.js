/* exported countdown */
function countdown(number) {
  var countDownArr = [];
  for (let i = number; i >= 0; i--) {
    countDownArr.push(i);
  }
  return countDownArr;
}
