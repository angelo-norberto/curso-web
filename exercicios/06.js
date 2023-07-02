function jurosSimples (capitalInicial, taxaDeJuros, tempAplicacao) {
    const montante = (capitalInicial * taxaDeJuros * tempAplicacao)
    console.log(`Resultado de juros simples: ${montante}`)
} 

function jurosCompostos (capitalInicial, taxaDeJuros, tempAplicacao) {
    const montante = capitalInicial * (1 + taxaDeJuros) ** tempAplicacao
    console.log(`Resultado de juros compostos: ${montante}`)
}

jurosSimples(500, 0.3, 5)
jurosCompostos(699, 0.4, 4)