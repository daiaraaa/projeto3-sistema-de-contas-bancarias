const BankAccount = require('./BankAccount')
const SavingsAccount = require('./SavingsAccount')

const account1 = new BankAccount('Asta', 1000.00)
const account2 = new SavingsAccount('Noelle', 1.5, 2000)

account1.deposit(500)
account1.withdraw(300)

console.log('========================================================')

account2.applyInterest()
account2.withdraw(500)
