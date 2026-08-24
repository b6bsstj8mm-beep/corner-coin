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

  commit() {
    this.account.balance += this.value;
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

// Transaction 1 - Withdrawal
const t1 = new Withdrawal(myAccount, 50.25);
t1.commit();
console.log("Transaction 1:", t1);
console.log("Value 1:", t1.value);

// Transaction 2 - Withdrawal
const t2 = new Withdrawal(myAccount, 9.99);
t2.commit();
console.log("Transaction 2:", t2);
console.log("Value 2:", t2.value);

// Transaction 3 - Deposit
const t3 = new Deposit(myAccount, 120.0);
t3.commit();
console.log("Transaction 3:", t3);
console.log("Value 3:", t3.value);

// Final account balance
console.log("Balance:", myAccount.balance);