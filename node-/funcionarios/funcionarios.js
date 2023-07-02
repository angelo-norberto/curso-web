const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') 

//encontrar mulher chinesa com menor salario

const chinesa = f => f.pais === 'China'
const mulheres = f => f.generos === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}   

axios.get(url).then((response) => {
    const funcionarios = (response.data)

    const func = funcionarios 
        .filter(chinesa) 
        .filter(mulheres) 
        .reduce(menorSalario)
    
    console.log(func)
})

