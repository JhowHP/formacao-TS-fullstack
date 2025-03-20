// // var a = 'a' //inseguro - escopo global
// let b: string = 'b' //possivel de alterar ao longo do script
// const c = 'c' //constante com valor imutavel e não mudará nunca

// // Tipos primitivos: string, number, boolen

// let n: number = 2
// let x: boolean = true

// let m: string | number = 2
// m = 'John'
// m = 2

// let d: any = 2 //any pode ser atribuido qualquer valor
// d = 'John'
// d = 2

//criação de intaface para declarar os tipos de variaveis:

// interface Pessoa {
//     nome: string,
//     idade: number,
//     profissao?: string // ? diz ser opcional
// }

// const pessoa: Pessoa = {
//     nome: 'John',
//     idade: 25
// }

// const outraPessoa: Pessoa = {
//     nome: 'Paulo',
//     idade: 32,
//     profissao: 'Desenvolvedor'
// }

// const arrayPessoa: Array<Pessoa> = [
//     pessoa,
//     outraPessoa
// ] 

// const arrayNum: number[] = [
//     1, 2, 3
// ]

// const arrayString: Array<string> = [
//     '1', '2', '3'
// 

// const num: number = 14

// if(num > 15){
//     console.log('Num maior que 15')
// } else if(num === 15) {
//     console.log("Num igual a 15")
// } else {
//     console.log("Num menor que 15")
// }

// // objetos literarios


// const typeUser = {
//     admin: 'Seja bem vindo Admin',
//     student: 'Voce é um estudante',
//     viewer: 'Voce pode visualizar'
// }

// function validateUser(user: string) {
//     console.log(typeUser[user as keyof typeof typeUser]) 
// }

// const usuário = 'admin'

// validateUser(usuário)
// validateUser('student')
// validateUser('viewer')


// For

// for(let i = 0; i <= 5; i+=2){
//     console.log(i)
// }

// let n = 2
// while(n <= 6) {
//     console.log(n)
//     n++
// }

// const array: Array<number> = [1, 2, 3, 4] //tipada

// const stringArray: string[] = ['a', 'b', 'c', 'd']

// console.log(array[0]) // array sempre começa no indice 0

// console.log(stringArray.length) //verificar o tamanho length

// console.log('array original', array)

// array.push(5)

// console.log('array com novo elemento', array)

// array.pop()

// console.log('array retirando o ultimo elemento', array)

// const buscaNum = array.find(num => num == 4) //função de callback // o que vale é a ordem que tem

// console.log(buscaNum)

// console.log(array)

// funções dentro servem para tratar

// array.forEach(num => {
//     if(num > 2 && num % 2 === 0) {
//         console.log(num * 2)
//     }
// })

// array.map(num => console.log(num))

// diferença entre os dois metódos: é questão de perfomace. 
// o forEach podem dá problemas com funções assincronas, pois pode acabar passando direto.

// ______________________________________________________________________________________________________________________________________________