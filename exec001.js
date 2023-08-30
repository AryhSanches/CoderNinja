
function carregar(){
    var data = new Date()
    var hora = data.getHours()
    var horatittle = document.getElementById('tittled')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
            if(hora >= 0 && hora < 12){
                horatittle.innerText= 'Bom dia'
                img.src = 'img/bom dia.png'
                msg.innerText = 'Bom dia!'
                document.body.style.background = '#dec673'
                document.body.style.color = '#dec673'
                msg.innerText = `Agora são ${hora} horas. Bom dia!`
            }
            else if (hora >=12 && hora <=18){
                horatittle.innerText= 'Boa tarde'
                img.src = 'img/boa tarde.png'
                document.body.style.background = '#98aa26'
                document.body.style.color = '#98aa26'
                msg.innerText = `Agora são ${hora} horas. Boa tarde!`
            }
            else{
                horatittle.innerHTML='Boa noite'
                img.src = 'img/boa noite.png'
                document.body.style.background = '#21aedc'
                document.body.style.color = '#21aedc'
                msg.innerText = `Agora são ${hora} horas. Boa noite!`
                
            }
}