/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance <= 0 || !Number.isInteger(balance)) return null;

  var newAccount = new Account(this.nextAccountNumber, holder);
  newAccount.deposit(balance);
  this.accounts.push(newAccount);

  this.nextAccountNumber++;
  return newAccount.number;
};

Bank.prototype.getAccount = function (number) {
  for (const account of this.accounts) {
    if (account.number === number) return account;
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;
  for (const account of this.accounts) {
    totalAssets += account.getBalance();
  }
  return totalAssets;
};
