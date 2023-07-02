function somarNumeros (arr) {
    let resultado = arr.reduce((acumulador, atual) => {
        return acumulador + atual
    })

    return resultado
}

console.log(somarNumeros([15, 15, 15, 15]))