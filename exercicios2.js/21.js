function menorNumero (arr) {
    const getMenorNumero = arr.reduce((acumulador, atual) => {
        if(acumulador < atual) {
            return acumulador
        } else if (atual < acumulador) {
            return atual
        }
    })

    return getMenorNumero
}

console.log(menorNumero([-1, 1, 5, 9]))
console.log(menorNumero([7, 9]))