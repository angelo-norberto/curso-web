const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1}. ${nome}`)
    console.log(array)
})


const exibeAprovados = nome => console.log(nome)
aprovados.forEach(exibeAprovados)