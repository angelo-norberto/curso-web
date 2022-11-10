function tratarErro(erro){
    throw new Error('...')
}

function imprimirCaixaAlta(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErro(e)
    } finally {
        console.log('final')
    }
}

const obj = {name: 'Craudio'}
imprimirCaixaAlta(obj) 