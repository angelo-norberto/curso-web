function funcaoSorte (num) {
    const sorteiaNum = Math.floor(Math.random() * 11)

    if(num === sorteiaNum) {
        return `parabens ! o numero sorteado foi ${sorteiaNum}`
    } else {
        return `que pena ! o numero sorteado foi ${sorteiaNum}`
    }
}   

console.log(funcaoSorte(10))