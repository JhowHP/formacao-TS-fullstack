import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
    abono: number = 10; 
    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }
    // Metodo criado para poder mostrar o novo saldo em forma de string, sem necessitar fazer a chamada do metodo deposit
    specialDeposit = (valueForDeposit:  number): string => {
        this.balance += valueForDeposit + this.abono;
        return  'Deposito realizado! Novo Saldo == ${this.balance}'

    }
}

