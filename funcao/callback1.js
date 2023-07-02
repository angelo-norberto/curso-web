const fabricantes = ['mercedes', 'ferrari', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice}. ${nome}`)
}

fabricantes.forEach(imprimir)  
fabricantes.forEach(fabricante => console.log(fabricante)) 