// sem promise...

const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []

getTurma('A', alunos => {
    nomes.concat(alunos.map(a => `A: ${a.id}`))
    getTurma('B', alunos => {
        nomes.concat(alunos.map(a => `B: ${a.id}`))
        getTurma('C', alunos => {
            nomes.concat(alunos.map(a => `C: ${a.id}`))
            console.log(nomes)
        })
    })
})

