//função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 7)

//função com retorno 
function soma(a, b = 0) { // parametro definido 
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))