//armazenando function em uma variavel

const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(4, 9)

//armazendando uma arrow function

const soma = (a, b) => {
    return a + b 
}

console.log(soma(2,4))

//retorno implicito

const subtracao = (a, b) => a - b 
console.log(subtracao(49, 4))