function percorrerValores (vetor) { 

    let qtdNumerosIntelvalo = 0 
    let qtdNumerosForaIntervalo = 0 

    for (i = 0; i < vetor.length; i++) { 
        if (vetor[i] >= 10 && vetor[i] <= 20){
            qtdNumerosIntelvalo++ 
        } else { 
            qtdNumerosForaIntervalo++
        }
        }
        console.log(`Numeros dentro do intervalo: ${qtdNumerosForaIntervalo}, numeros fora do intervalo: ${qtdNumerosForaIntervalo}`)
    }

    vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    percorrerValores(vetor)
   
