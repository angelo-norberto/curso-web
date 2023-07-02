//let e const 

{ 
    var a = 2
    let b = 4

    console.log(b)
}

console.log(a)


//template string
const produto = 'iPad'
console.log(`${produto} 
é 
caro`)

//destructuring
const [letra1, letra2, ...letras] = 'Cod3r'
console.log(letra1, letra2, letras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade, nome} = {nome: 'ana', idade: 9}
console.log(idade, nome)