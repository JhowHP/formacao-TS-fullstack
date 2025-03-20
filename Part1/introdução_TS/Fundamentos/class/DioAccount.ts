export abstract class DioAccount { // classe abstrata pode servir como repositório para classes que tem coisas em comum 
    private name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true


    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
        
    }

    setName = (name: string): void => {
        this.name = name
        console.log('Nome alterado com sucesso!')
    }

    getName = (): string => {
        return this.name
    }

    deposit = (): void => {
        if(this.evalidateStatus()) {
            console.log("Voce Depositou")
        }
    }

    withdraw = (): void => {
        console.log('Voce sacou')
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    private evalidateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error("Sua conta é Invalida")
    }
}