const imgsemaforo = document.querySelector('#semaforo')
const botoes = document.querySelector('.container')
let colorIndex = 0

const trafficklight = (evento) => {
    turnOn[evento.target.id]()
}

const nextIndex = () => {
    if (colorIndex > 2){
        colorIndex++
    }
    else{
        colorIndex = 0
    }
}

const changecolor = () => {
    const colors = ['vermelho,','amarelo','verde']
    const color = colors [colorIndex]
    turnOn[color]() 
    nextIndex
}
const turnOn = {
    'verde': () => imgsemaforo.src = './verde.png',
    'amarelo': () => imgsemaforo.src = './amarelo.png',
    'vermelho': () => imgsemaforo.src = './vermelho.png',
    'automatico': () => setInterval(changecolor, 1000)
}


botoes.addEventListener('click', trafficklight)