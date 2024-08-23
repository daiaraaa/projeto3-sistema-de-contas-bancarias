const SavingsAccount= require('./SavingsAccount')
const BankAccount = require('./BankAccount')

const percyAccount = new BankAccount('Percy')
percyAccount.deposit(650)
percyAccount.withdraw(300)

const groverAccount = new SavingsAccount('Grover', 1.5)
groverAccount.deposit(1400)
groverAccount.applyInterest()
groverAccount.withdraw(500)