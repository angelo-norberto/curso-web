
const objetoParaArray = objeto => {
    /* const arr = Object.entries(objeto) */
    
    const chaves = Object.keys(objeto)
    const resultado = chaves.map(chave => [chave, objeto[chave]])

    console.log(resultado)
} 

objetoParaArray({
    chave1: 'valor1',
    chave2: 'valor2',
    chave3: 'valor3'
})
