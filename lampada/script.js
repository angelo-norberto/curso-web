const btnligar = document.querySelector('#btnligar')
const btndesligar = document.querySelector('#btndesligar')
const lamp = document.querySelector('#lamp')

function isLampBroken (){
    return lamp.src.indexOf('quebrada') > -1 
}

function lampOn (){
    if ( !isLampBroken() ){
    lamp.src = './acesa.jpg'
    }
}

function lampOff (){
    if ( !isLampBroken() ){
    lamp.src = './apagada.jpg'
    }    
}

function lampBroken (){
    lamp.src = './quebrada.jpg'
}


btnligar.addEventListener('click', lampOn)
btndesligar.addEventListener('click', lampOff)
lamp.addEventListener('mousemove', lampOn)
lamp.addEventListener('mouseout', lampOff)
lamp.addEventListener('dblclick', lampBroken)

