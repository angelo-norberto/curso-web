function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) {
        // destructuring, max = min, min = max  
        let [max, min] = [min, max]
    }
    
    return new Promise((resolve, reject) => {
        const fator =  max - min + 1 
        const numeroAleatorio = Math.floor(Math.random() * fator + min)  
        if(numerosProibidos.includes(numeroAleatorio)) {
            reject('numero repetido !')
        } else {
            resolve(numeroAleatorio)
        }
        
    })
}

async function gerarMegaSena(qtdNumeros) {
    const numeros = []
    for(let _ of Array(qtdNumeros).fill()) {
        await gerarNumerosEntre(1, 60, numeros)
    }
}

gerarNumerosEntre(1, 5, [1, 2, 4])
    .then(console.log)
    .catch(console.log)
