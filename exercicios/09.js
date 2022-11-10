const round = (x) => {
    return Math.ceil(x / 5) * 5 
}

function sistemaDeAvalicoes (nota) {

    if (nota < 38) {
        console.log(`Reprovado ! Nota:${nota}`)
    } else if ( nota >= 38) { 
        console.log(`Aprovado ! Nota:${round(nota)}`)
    }
}

sistemaDeAvalicoes(56)