function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#AFAEAB'
    }  else if (hora >=12 && hora <= 18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#E2804A'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#04050E'
    }
}

function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let formAno = document.getElementById('ano').value
    let res = document.getElementById('res')
    let idadeAtual = ano - formAno
    let formSex = document.getElementsByName('radsex')
    let genero = ''

    if (formAno >= 1 && formAno < (ano - 130)) {
        alert(`Você nasceu no ano ${formAno} e continua vivo? Você tem ${idadeAtual} anos! Parece que você descobriu a fonte da juventude!`)
    } else if (formAno > ano || formAno == 0) {
        alert('[ERRO] Digite uma data válida')
    } else {
        let criaImg = document.createElement('img')
        criaImg.setAttribute('id', 'foto')

        if (formSex[0].checked){
            if (idadeAtual >= 0 && idadeAtual < 10) {
                criaImg.setAttribute('src', 'imagens/homem-bebe.png')
                genero = 'Homem'
            } else if (idadeAtual < 21) {
                criaImg.setAttribute('src', 'imagens/homem-jovem.png')
                genero = 'Homem'
            } else if (idadeAtual < 50) {
                criaImg.setAttribute('src', 'imagens/homem-adulto.png')
                genero = 'Homem'
            } else {
                criaImg.setAttribute('src', 'imagens/homem-idoso.png')
                genero = 'Homem'
            }
        } else {
            if (idadeAtual >= 0 && idadeAtual < 10) {
                genero = 'Mulher'
                criaImg.setAttribute('src', 'imagens/mulher-bebe.png')
            } else if (idadeAtual < 21) {
                criaImg.setAttribute('src', 'imagens/mulher-jovem.png')
                genero = 'Mulher'
            } else if (idadeAtual < 50) {
                criaImg.setAttribute('src', 'imagens/mulher-adulta.png')
                genero = 'Mulher'
            } else {
                criaImg.setAttribute('src', 'imagens/mulher-idosa.png')
                genero = 'Mulher'
            }
        }

        if (formSex[0].checked) {
            document.body.style.background = '#A7A7FF'
        } else {
            document.body.style.background = '#ffb5e6'
        }


        res.innerHTML = `<p>${genero} com ${idadeAtual} anos.</p>`
        res.appendChild(criaImg)

    }
}
