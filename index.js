class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    return this.transactions.reduce((total, transaction) => {
      return total + transaction.value;
    }, 0);
  }
}

class Transaction {
  constructor(account, amount) {
    this.account = account;
    this.amount = amount;
  }

  commit() {
    this.account.transactions.push(this);
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}

// Create account
const myAccount = new Account("snow-patrol");

// Initial deposit
const initialDeposit = new Deposit(myAccount, 500.0);
initialDeposit.commit();

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

// Transaction history
console.log("Transaction History:", myAccount.transactions);

// Current balance
console.log("Balance:", myAccount.balance);