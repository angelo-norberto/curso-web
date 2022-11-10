console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'bola' //nao tão recomendado
obj1['nome'] = 'bola'
console.log(obj1.nome)

function Obj(nome){ 
    this.nome = nome
}