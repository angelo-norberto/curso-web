//pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)


// dados de um objeto dentro de uma constante podem ser alterados, em excessão a dados ja atribuidos

// torna o objeto imutavel(constante)
Object.freeze(pessoa) 

pessoa.nome = 'Cleitu'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'Paula'}) // objeto inicialmente imutavel 
console.log(pessoaConstante)