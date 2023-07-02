function segundoMaior (arr) {
    const maiorNum = Math.max(...arr)

    const segundoMaior = arr.reduce((acumulador, atual) => {
        if(atual < maiorNum && atual > acumulador) {
            return atual
        } else {
            return acumulador
        }
    })

    return segundoMaior
}

console.log(segundoMaior([1, 3, 4]))
console.log(segundoMaior([1, 7, 9, 1, 3]))