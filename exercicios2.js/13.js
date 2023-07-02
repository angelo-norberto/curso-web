function filtrarNumeros (arr) {
    const resultado = arr.filter(e => {
        if(typeof e === 'number') {
            return e
        }
    })

    console.log(resultado)
}

filtrarNumeros(['javascript', 1, 2, '3', true])
filtrarNumeros(['a', 'c'])