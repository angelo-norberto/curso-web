// esse codigo cria um arquivo json a partir do metodo writeFile     

const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 233.4, 
    desconto: 0.10
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), (err) => {
    console.log(err || 'Arquivo salvo')
})