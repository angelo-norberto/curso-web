// com promise...
const http = require('http')
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = '' 

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })

}  


Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
.then(turmas => [].concat(...turmas))
//.then(x => console.log(x)) imprime toda a lista 
.then(alunos => console.log(alunos.map(a => a.nome))) // imprime somente os alunos

getTurma('D').catch(e => console.log(e.message))