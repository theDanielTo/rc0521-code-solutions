/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];

}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  var depositSum = 0;
  var withdrawSum = 0;
  for (const transaction of this.transactions) {
    if (transaction.type === 'deposit') depositSum += transaction.amount;
    else withdrawSum += transaction.amount;
  }
  return depositSum - withdrawSum;
};
