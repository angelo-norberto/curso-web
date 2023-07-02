const pessoa = {
    nome: 'Rebeca',
    peso: 60,
    idade: 25
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))

//retorna um array de array 
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, 
    writable: false,
    value: '14/11/2003'
})

pessoa.DataNascimento = '01/02/2003'
console.log(pessoa.DataNascimento)

// ECS 2015
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}

//concatena objetos em um unico objeto de destino
const obj = Object.assign(dest, o1, o2)
Object.freeze(obj)
obj.c = 232
console.log(obj)