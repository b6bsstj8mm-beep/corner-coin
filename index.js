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
    if (!this.isAllowed()) {
      return false;
    }

    this.account.transactions.push(this);
    return true;
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }

  isAllowed() {
    return this.amount <= this.account.balance;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }

  isAllowed() {
    return true;
  }
}

// Create account
const myAccount = new Account("snow-patrol");

// Initial deposit
const initialDeposit = new Deposit(myAccount, 500.0);
initialDeposit.commit();

console.log("Initial balance:", myAccount.balance);

// Transaction 1 - Withdrawal
const t1 = new Withdrawal(myAccount, 50.25);

console.log("Transaction 1 successful:", t1.commit());
console.log("Transaction 1:", t1);

// Transaction 2 - Withdrawal
const t2 = new Withdrawal(myAccount, 9.99);

console.log("Transaction 2 successful:", t2.commit());
console.log("Transaction 2:", t2);

// Transaction 3 - Deposit
const t3 = new Deposit(myAccount, 120.0);

console.log("Transaction 3 successful:", t3.commit());
console.log("Transaction 3:", t3);

// Current balance
console.log("Balance before invalid withdrawal:", myAccount.balance);

// Test an invalid withdrawal
const t4 = new Withdrawal(myAccount, 1000.0);

console.log("Transaction 4 successful:", t4.commit());

// The balance should NOT change
console.log("Balance after invalid withdrawal:", myAccount.balance);

// Transaction history
console.log("Transaction History:", myAccount.transactions);

console.log(
  "Number of successful transactions:",
  myAccount.transactions.length,
);