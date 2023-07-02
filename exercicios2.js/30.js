const estudantes = {
    joao: [9, 7.9, 8.3, 7.1],
    maria: [6.3, 7.5, 8.5, 7.2]
}

let estudantesArray = Object.entries(estudantes).map(([chave, valor]) => {
    let soma = valor.reduce((acumulador, atual) => acumulador + atual, 0);
    let media = soma / valor.length;
    return {chave, media: media};
});

console.log(estudantesArray)



