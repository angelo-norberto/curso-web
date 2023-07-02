function removerVogais (palavra) {
    const vogais = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']

    vogais.forEach(vogal => palavra = palavra.replace(vogal, ''))

    return palavra
}

console.log(removerVogais('palavra'))