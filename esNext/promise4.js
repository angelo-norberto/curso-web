// gerando varias requisicoes com promise 

function gerarNumerosEntre(min, max, tempo) {
    if(min > max) {
        // destructuring, max = min, min = max  
        let [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(() => {
            const fator =  max - min + 1 
            const numeroAleatorio = Math.floor(Math.random() * fator + min)  
            resolve(numeroAleatorio)
        }, tempo)
        
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 20, 2000),
        gerarNumerosEntre(1, 4, 3000),
    ])
}

gerarVariosNumeros()
    .then(num => console.log(num))