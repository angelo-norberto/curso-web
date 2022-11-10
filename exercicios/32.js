function mediaAritmetica (vetor ) { 
    let soma = 0
    for (i = 0 ; i < vetor.length; i++) {
        soma += vetor[i]
    }

     return soma/vetor.length   
}

vetor = [2, 4, 10, 5]
console.log(mediaAritmetica(vetor))