const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react) //errado 
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map()