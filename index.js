let balance = 500.0;

class Account {
  constructor(username) {
    this.username = username;
    this.balance = 500.0;
  }
}

class Withdrawal {
  constructor(amount) {
    this.amount = amount;
  }

  commit() {
    balance -= this.amount;
  }
}

class Deposit {
  constructor(amount) {
    this.amount = amount;
  }

  commit() {
    balance += this.amount;
  }
}

const myAccount = new Account("snow-patrol");

const t1 = new Withdrawal(50.25);
t1.commit();
console.log("Transaction 1:", t1);

const t2 = new Withdrawal(9.99);
t2.commit();
console.log("Transaction 2:", t2);

const t3 = new Deposit(120.0);
t3.commit();
console.log("Transaction 3:", t3);

console.log("Account:", myAccount);
console.log("Balance:", balance);