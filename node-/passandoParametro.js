module.exports = function(...nomes) { // "...nomes" <- argumento variavel
    return nomes.map(nome => `Boa semana ${nome}`)
}