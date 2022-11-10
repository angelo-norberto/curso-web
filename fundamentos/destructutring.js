// novo recurso do ES2015

const pessoa = {
    nome: 'maquivael',
    idade: 3,
    endereco: { 
        logadouro: 'rua 12',
        numero: 320
    }
}

const {nome, idade } = pessoa 
console.log(nome, idade)

const {nome: n, idade: i } = pessoa     
//cria novas variaveis a partir do obj desconstruido
console.log(n, i)

const { sobrenome, maquiavelico = true} = pessoa
console.log(sobrenome, maquiavelico)

const {endereco: { logadouro, numero }} = pessoa 
console.log(logadouro, numero) 
// acessa objetos que estao estruturados dentro de outro objeto