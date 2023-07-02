//sempre trabalhar erros com elegancia

function tratarErroLancar(erro) {
    // throw new Error('Estamos trabalhando nisso !')
    throw 'Fudeu'
    }

function imprimirNomeGrifado () {
    try {
        console.log(obj.name.toUpperCase() + "!!!") 
    } catch (e) {
        tratarErroLancar(e)
    } finally { 
        console.log('fim')
    }
    
}

const obj = {name: 'Claudio'} 
imprimirNomeGrifado(obj)

// erro 
// const obj = {nome: 'Claudio'} 
// imprimirNomeGrifado(obj)