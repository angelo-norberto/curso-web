function calculaSalLiquido(horasTrab, salPorHora) {
    const salBruto = horasTrab * salPorHora
    const impostos = salBruto * 0.3
    const salLiquido = salBruto - impostos
    
    return `Salário líquido é igual a R$${salLiquido}`
}

console.log(calculaSalLiquido(180, 60))