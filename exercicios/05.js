function arredondaEconverte() {
    let numero = 0.30000000000000004
    console.log(`R$ ${numero.toFixed(2).replace('.',',')}`)
}

arredondaEconverte()