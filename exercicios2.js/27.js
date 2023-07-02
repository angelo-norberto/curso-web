function inverter (objeto) {
    const resultado = Object.entries(objeto).map(parChaveValor => parChaveValor.reverse())

    return Object.fromEntries(resultado)
}

console.log(inverter({1: 'a', 2: 'b', 3: 'c'}))