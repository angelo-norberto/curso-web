function repetir(repetido, repetidor) {
    let resultado = []
    
    for (let i = 0; i < repetidor; i++) {
        resultado.push(repetido)
    }

    console.log(resultado)
}

repetir('teste', 3)