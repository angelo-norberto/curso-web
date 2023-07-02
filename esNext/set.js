// estrutura de conjunto nao indexada e nao aceita repetição 
const times = new Set

times.add('vasco')
times.add('sao paulo').add('palmeiras').add('corinthians')
times.add('flamengo')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.delete('flamengo'))

const nomes = ['clebinho', 'jonas', 'bob']
const nomesSet = new Set(nomes)
console.log(nomesSet)