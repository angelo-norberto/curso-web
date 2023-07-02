function multiplicar(num, multiplicador) {
    resultado = 0
    
    for (let i = 0; i < multiplicador; i++) {
        resultado += num
    }

    return resultado
}

console.log(multiplicar(5, 5))