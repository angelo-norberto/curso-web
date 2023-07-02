// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99, tag: 'promoção'
}) 
console.log('extensivel ?', Object.isExtensible(produto) ? 'sim' : 'não')

// os atributos podem ser modificados, porém não podem ser adicionados
produto.nome = 'borracha'
produto.descricao = 'borracha branca para..'
delete produto.tag

console.log(produto)

// Object.seal
const pessoa = {nome: 'juliana', idade: 19}
Object.seal(pessoa)

// só é possivel modificar os valores dos atributos existentes 
console.log('selado ?', Object.isSealed(pessoa) ? 'sim' : 'não')
pessoa.sobrenome = 'vieira'
delete pessoa.nome 
pessoa.idade = 20

console.log(pessoa)

// Object.freeze impossiblita qualquer tipo de modificação