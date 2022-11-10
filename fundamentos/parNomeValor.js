// par nome/valor
// contexto léxico: local onde sua variavel esta contida, (lugar fisico)
const saudacao = 'opa' //contexto léxico 1 

function exec () {
    const saudacao = 'falaa' //contexto léxico 2   
}

// objetos são grupos aninhados de pares nomes/valor

const cliente = {
    nome: 'antonio',
    idade: 32,
    endereco:{
        logadouro: 'rua dos loucos',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)