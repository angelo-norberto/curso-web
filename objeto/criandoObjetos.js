//notação literal 

const obj1 ={}
console.log(obj1)

// Object em JS

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funcoes construtoras
function Produto(nome, preco, desc) {
    //this torna a variavel publica, tornado a variavel alteravel(atr.publico)
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 4.99, 0.15)
const p2 = new Produto('Notebook', 1995.90, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// funcao factory

function criarFuncionario(nome, salBase, faltas) {
    return {
        nome,
        salBase,
        faltas,
        getSalario() {
            return (salBase / 30) * (30 - faltas) 
        }
    }
}

const f1 = criarFuncionario('Joao', 5840, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma function famosa que retorna um obj...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)