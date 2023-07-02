function cedulasNecessarias (valor) {
    const nota100 = 100
    const nota50 = 50
    const nota10 = 10
    const nota5 = 5
    const nota1 = 1

    const valorEmArray = String(valor).split('').map(digito => parseInt(digito))
    return valorEmArray.forEach((valor, indice) => {
        if()
    })
}

console.log(cedulasNecessarias(100))