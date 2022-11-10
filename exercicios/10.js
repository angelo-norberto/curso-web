function divisivelPorTres (numero) {

    let restante = numero % 3

    if (restante == 0) { 
        return true
    }
    else {
        return false
    }
} 

console.log(divisivelPorTres(9))
console.log(divisivelPorTres(44))
console.log(divisivelPorTres(150))