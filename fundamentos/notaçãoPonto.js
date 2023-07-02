console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'bola' 
obj1['nome'] = 'bola' //nao tão recomendada
console.log(obj1.nome)

function Obj(nome){ 
    this.nome = nome // reatribui o escopo, tornando
}

const Obj2 = new Obj('Cadeira')
const Obj3 = new Obj('Mesa')
console.log(Obj2.nome)
console.log(Obj3.nome)