function primeiroUltimo (elementos) { 
    const indicePrimeiroElem = 0
    const indiceUltimoElem = elementos.length - 1
    const primeiroElem = elementos[indicePrimeiroElem]
    const ultimoElem = elementos[indiceUltimoElem]

    return [primeiroElem, ultimoElem]

}

console.log(primeiroUltimo([2, 3, 3, "alo"]))
