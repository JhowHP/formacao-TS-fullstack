//Dio Banking 


//name, accountNumber
//depositar, sacar 


import { CompanyAccount  } from './class/CompanyAccount'
import { PeopleAccount  } from './class/PeopleAccount'

// const adminAccount: Account = new Account('john', 1)
// console.log(adminAccount)

// const account: Account = new Account('Joao', 28)
// console.log(account)

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'John', 10)
console.log(peopleAccount)
peopleAccount.deposit()
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)    
companyAccount.deposit()
console.log(companyAccount)
