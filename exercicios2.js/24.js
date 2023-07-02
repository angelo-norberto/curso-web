function contarCaractere (frase, string) {
    let contador = 0

    const separaLetras = frase.split('')
    
    for(let letra of separaLetras) {
        if(letra === string) {
            contador += 1
        }
    }

    return contador
}

console.log(contarCaractere('eu sou uma frase', 'a'))