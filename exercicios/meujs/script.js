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

function distancia() {
    var distancia1 = Number(document.getElementById('dist').value)

    var achaDiv = document.getElementById('insereTxt')

    var km = (distancia1 * 0.001).toFixed([3])
    var hm = (distancia1 * 0.01).toFixed([2])
    var dam = (distancia1 * 0.1).toFixed([1])
    var dm = distancia1 * 10
    var cm = distancia1 * 100
    var mm = distancia1 * 1000

    achaDiv.innerHTML = `<p>A medida de ${distancia1}m corresponde a:</p>
    <p><strong>${km}</strong> km</p>
    <p><strong>${hm}</strong> hm</p>
    <p><strong>${dam}</strong> dam</p>
    <p><strong>${dm}</strong> dm</p>
    <p><strong>${cm}</strong> cm</p>
    <p><strong>${mm}</strong> mm</p>
    `
}

function tabuada() {
    var num1 = Number(document.getElementById('num1').value)

    var achaDiv = document.getElementById('insereTab')

    var x1 = num1 * 1
    var x2 = num1 * 2
    var x3 = num1 * 3
    var x4 = num1 * 4
    var x5 = num1 * 5
    var x6 = num1 * 6
    var x7 = num1 * 7
    var x8 = num1 * 8
    var x9 = num1 * 9
    var x10 = num1 * 10

    achaDiv.innerHTML = `<p>A tabuada do número ${num1} é:</p>
    <p>${num1} x 1 = <strong>${x1}</strong></p>
    <p>${num1} x 2 = <strong>${x2}</strong></p>
    <p>${num1} x 3 = <strong>${x3}</strong></p>
    <p>${num1} x 4 = <strong>${x4}</strong></p>
    <p>${num1} x 5 = <strong>${x5}</strong></p>
    <p>${num1} x 6 = <strong>${x6}</strong></p>
    <p>${num1} x 7 = <strong>${x7}</strong></p>
    <p>${num1} x 8 = <strong>${x8}</strong></p>
    <p>${num1} x 9 = <strong>${x9}</strong></p>
    <p>${num1} x 10 = <strong>${x10}</strong></p>
    `
}