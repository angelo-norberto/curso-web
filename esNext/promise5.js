function funcionarOuNao (valor, chanceErro) {
    return new Promise ((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ops ! Algo não esta certo !')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('teste', 0.9) 
    .then(console.log)
    .catch(e => console.log(`Erro: ${e}`))
    .then(() => console.log('fim!'))