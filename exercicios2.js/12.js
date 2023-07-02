function removerPropriedade(obj, propriedade) {
    const copia = {...obj}
    delete copia[propriedade]
    
    return copia
}
console.log(removerPropriedade({'a': 1, 'b': 2}, 'a'))