// tagged template - processa o template dentro de uma function

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'outra string'
}

const aluno = 'victoria' 
const situacao = 'aprovado' 
console.log(tag `${aluno} está ${situacao}`)