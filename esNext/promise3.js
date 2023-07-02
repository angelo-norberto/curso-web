function gerarNumerosEntre(min, max) {
    if(min > max) {
        // destructuring, max = min, min = max  
        let [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const fator =  max - min + 1 
        const numeroAleatorio = Math.floor(Math.random() * fator + min)  
        resolve(numeroAleatorio)
    })
}

gerarNumerosEntre(10, 30)
    .then(valor => console.log(valor))