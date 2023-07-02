//Arrow function

const soma = (a, b) => a + b
console.log(soma(3, 4))

//Arrou function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametro default
function log(texto = 'node') { // essa semantica assume que se nao ha parametro o valor padrao passa ser otribuido na function
    console.log(texto)
}
log()
log('agora eu assumo !')

//operador rest
function total (...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 4, 2))
