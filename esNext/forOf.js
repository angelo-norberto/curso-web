for (let letra of 'Cod3r') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for(let i in assuntosEcma) {
    console.log(i)
}

for(let assuntos of assuntosEcma) {
    console.log(assuntos)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}], 
    ['Promise', {abordado: false}]
])

for(let assuntos of assuntosMap) {
    console.log(assuntos)
}

for(let chaves of assuntosMap.keys()){
    console.log(chaves)
}

for(let valor of assuntosMap.values()) {
    console.log(valor)
}

for(let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}