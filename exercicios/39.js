function repetir(item, quantidade) {
    return Array(quantidade).fill(item) // fill() copia o parametro passado dentro de um array
}

console.log(repetir(3, 10))

