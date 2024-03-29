function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`   
}

const produto = {
    nome: 'Note', 
    preco: 498,
    desc: 0.24,
    getPreco
}

global.preco = 20
global.desc = 0.1  

console.log(getPreco()) // variaveis sem atribuição do this, sendo assim o escopo local 
console.log(produto.getPreco())

const carro = {preco: 23000, desc:0.20}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))

