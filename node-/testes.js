function getArgumentos(valor1, ...outrosValores) {
    return {
        valor1,
        outrosValores
    }
}

console.log(getArgumentos('primeiro', 'segundo', 'terceiro'))