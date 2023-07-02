function criarPessoa(nome, preco) {
    return {
        nome, 
        preco,
        desconto: 0.1
    }
}

console.log(criarPessoa('Notebook', 10))
console.log(criarPessoa('Celular', 20))