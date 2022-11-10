function getInteiroAleatorio (min, max){ 
    const valor = Math.random() * (max - min) + min
    return Math.random(valor)
}

opcao = 0

do {
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`A opção escolhida foi ${opcao}`)
} while (opcao != -1) {

console.log('Ate a proxima')
}

getInteiroAleatorio(1, 4)