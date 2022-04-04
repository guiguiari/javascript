function pegaNome() {
    var campoNome = document.getElementById('campoNome').value;
    var nome = campoNome
    var achaDiv = document.getElementById('escreveNome')

    achaDiv.innerHTML = `<p>Olá ${nome}! Seja bem-vindo(a).</p>`
}

function soma() {
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value

    var n1 = Number(num1)
    var n2 = Number(num2)

    var soma = n1 + n2

    var achaDiv = document.getElementById('insereTexto')

    achaDiv.innerHTML = `A soma entre ${n1} e ${n2} é ${soma}`
}

function dobro() {
    var num = document.getElementById('num').value

    var n1 = Number(num)

    var achaDiv = document.getElementById('insereTxt')

    var dobro = n1 * 2
    var triplo = n1 * 3
    var raiz = Math.sqrt(n1).toFixed([2])

    achaDiv.innerHTML = `<p>O <strong>dobro</strong> de ${n1} é <strong>${dobro}</strong>.</p>

    <p>O <strong>triplo</strong> de ${n1} é <strong>${triplo}</strong>.</p>

    <p>A <strong>raiz quadrada</strong> de ${n1} é <strong>${raiz}</strong>.</p>
    `
}

function media() {
    var divMedia = document.getElementById('insereMedia')
    var divAprova = document.getElementById('insereTxt')

    var nota1 = Number(document.getElementById('nota1').value)
    var nota2 = Number(document.getElementById('nota2').value)
    var nota3 = Number(document.getElementById('nota3').value)
    var nota4 = Number(document.getElementById('nota4').value)

    var media = (nota1 + nota2 + nota3 + nota4) / 4

    divMedia.innerHTML = `<p>Sua média é <strong>${media}</strong></p>`

    if (media < 5) {
        divAprova.innerHTML = `<p>Infelizmente, você foi <strong>Reprovado :(</strong>.</p>`
    } else if (media <= 10){
        divAprova.innerHTML = `<p>Parabéns, você foi <strong>Aprovado :)</strong>.</p>`
    } else {
        divAprova.innerHTML = `<p>Média inválida, insira notas entre <strong>0 ~ 10</strong>.</p>`
    }

}