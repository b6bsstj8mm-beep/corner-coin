class Account {
  constructor(username) {
    this.username = username;
    this.balance = 500.0;
  }
}

class Transaction {
  constructor(account, amount) {
    this.account = account;
    this.amount = amount;
  }
}

class Withdrawal extends Transaction {
  commit() {
    this.account.balance -= this.amount;
  }
}

class Deposit extends Transaction {
  commit() {
    this.account.balance += this.amount;
  }
}

// Create account
const myAccount = new Account("snow-patrol");

// Transaction 1 - Withdrawal
const t1 = new Withdrawal(myAccount, 50.25);
t1.commit();
console.log("Transaction 1:", t1);

// Transaction 2 - Withdrawal
const t2 = new Withdrawal(myAccount, 9.99);
t2.commit();
console.log("Transaction 2:", t2);

// Transaction 3 - Deposit
const t3 = new Deposit(myAccount, 120.0);
t3.commit();
console.log("Transaction 3:", t3);

// Final account balance
console.log("Balance:", myAccount.balance);