//ES8: Object.values/Object.entries
const obj = {a: '1', b: '2', c: '3'}
console.log(Object.values(obj))
console.log(Object.entries(obj)) // matriz

//melhorias na notação literal
const nome = 'Carla' 
const pessoa = {
    nome,
    ola() {
        return `ola eu sou`
    }
}

console.log(pessoa.ola(), pessoa.nome)

//class 
class animal {} 
class cachorro extends animal {
    falar() {
        return 'au au'
    }
}

console.log(new cachorro().falar())