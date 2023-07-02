const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const C = require('./pastaC') // procura o arquivo index e executa automaticamente
C.ola2

const http = require('http')
http.createServer((req, res) => {       //server
    res.write('bom dia')
    res.end()
}).listen(8080) 