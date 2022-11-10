function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('#nasc')
    var result = document.querySelector('#result')
    var sexo = document.querySelector('.radsex')
    if (fAno.value > ano || fAno.value.length == 0){
        alert('[ERRO !, tente novamente]') 
    }
    else{
    var fSex = document.getElementsByName('radsex')
    var idade = ano - Number(fAno.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    }
    if (fSex[0].checked){
        genero = 'Masculino' 
        if(idade >= 0 && idade <= 10){
            //criança 
            img.setAttribute('src', 'midias/criançaH.jpg')
        }else if(idade < 22){
            //adolescente
            img.setAttribute('src', 'midias/jovemH.png')
        }else if (idade <60){
            //adulto
            img.setAttribute('src', 'midias/adultoH.png')
        }else{
            //idoso
            img.setAttribute('src', 'midias/idosoH.png')
        }
    }else if (fSex[1].checked){
        genero = 'Feminino'
        if(idade >= 0 && idade <= 10){
            //criança
            img.setAttribute('src', 'midias/criançaM.jpg') 
        }else if(idade < 22){
            //adolescente
            img.setAttribute('src', 'midias/jovemM.png')
        }else if (idade <60){
            //adulto
            img.setAttribute('src', 'midias/adultoM.jpg')
        }else{
            //idoso
            img.setAttribute('src', 'midias/idosoM.png')
        }
    }
    result.style.textAlign = 'center'
    result.innerHTML = `Você é do sexo ${genero} e tem ${idade} anos.`
    result.appendChild(img)
}