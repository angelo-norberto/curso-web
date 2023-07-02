//await so funciona em uma funcao async

function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), tempo)
    })
}

/* esperarPor()
    .then(() => console.log('executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('executando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('executando promise 3...')) */
 
function retornaValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}


async function executar () {
    let valor = await retornaValor()    
    
    await esperarPor(1500)
    console.log(`async/await ${valor}`)

    await esperarPor(1500)
    console.log(`async/await ${valor + 1}`)

    await  esperarPor(1500)
    console.log(`async/await ${valor + 2}`)

    return valor + 3
}

// recebe o valor(retorno) da funcao 
executar()
    .then(console.log)