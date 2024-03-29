const fs = require('fs') 
const path = require('path')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString())
        })
        console.log('depois de ler ')
    })
} 

const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho).then(console.log)