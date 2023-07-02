const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, (x, y) => { // arrow function é sempre uma função anonima  
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y) // retorno implicito

const pessoa = {
    saudacao: 'Opa',
    //falar() tambem é valido
    falar: function() {
        console.log(this.saudacao)
    }
}

pessoa.falar()  