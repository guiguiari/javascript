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