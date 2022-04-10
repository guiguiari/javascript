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

    var achaDiv = document.getElementById('insereTxt')

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

function conversorMoedas() {
    var achaDiv = document.getElementById('recebeTxt')
    var recebeCarteira = Number(document.getElementById('carteira').value)
    var recebeDolar = Number(document.getElementById('dolar').value)
    var conversao = (recebeCarteira / recebeDolar).toFixed(2)
    
    achaDiv.innerHTML = `Com <strong>R$${recebeCarteira}</strong> você pode comprar <strong>U$${conversao}</strong>.`

}

function pintandoParede() {
    var achaDiv = document.getElementById('recebeTxt')
    var largura = Number(document.getElementById('largura').value)
    var altura = Number(document.getElementById('altura').value)
    var res = largura * altura

    achaDiv.innerHTML = `
    Sua parede tem um total de ${res}m²
    
    <p>Para pintar essa parede, você precisará de ${(res)/2}L de tinta.</p>`
}

function desconto5() {
    var achaDiv = document.getElementById('recebeTxt')
    var preco = Number(document.getElementById('preco').value)

    achaDiv.innerHTML = `O produto que custava R$ ${preco}, na promoção com 5% de desconto vai custar R$ ${preco * .95}. `
}

function aumentoSalarial() {
    var achaDiv = document.getElementById('recebeTxt')
    var salario = Number(document.getElementById('salario').value)

    achaDiv.innerHTML = `O funcionário que ganhava R$ ${salario}, com 15% de aumento, passa a receber R$ ${(salario * 1.15).toFixed(2)}.`
}

function conversorK() {
    var achaDiv = document.getElementById('recebeTxt')
    var celsius = Number(document.getElementById('celsius').value)
    var kelvin = (celsius + 273)

    achaDiv.innerHTML = `${celsius} ºC = ${kelvin} K.`
}

function conversorF() {
    var achaDiv = document.getElementById('recebeTxt')
    var celsius = Number(document.getElementById('celsius').value)
    var fahr = ((celsius * 1.8) + 32)

    achaDiv.innerHTML = `${celsius} ºC = ${fahr} ºF.`
}

function aluguelCarro() {
    let achaDiv = document.getElementById('recebeTxt')
    let dias = Number(document.getElementById('dias').value)
    let km = Number(document.getElementById('km').value)
    let res = (60 * dias) + (0.15 * km)

    achaDiv.innerHTML = `<p>O total a pagar é de R$${res.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>`

}

function porcaoInteira() {
    let achaDiv = document.getElementById('recebeTxt')
    let numero = Number(document.getElementById('numero').value)

    achaDiv.innerHTML = `<p>O número ${numero} tem a parte inteira ${Math.trunc(numero)}</p>`
}

function hipotenusa() {
    let achaDiv = document.getElementById('recebeTxt')
    let oposto = Number(document.getElementById('oposto').value)
    let adj = Number(document.getElementById('adj').value)
    let hipotenusa = (Math.pow(oposto, 2) + Math.pow(adj, 2))
    let res = Math.sqrt(hipotenusa)

    achaDiv.innerHTML = `<p>a² = <strong>b² + c²</strong></p>
    <p>a² = <strong>${oposto}² + ${adj}²</strong></p>
    <p>a² = <strong>${Math.pow(oposto, 2)}</strong> + <strong>${Math.pow(adj, 2)}</strong></p>
    <p>a² = <strong>${hipotenusa}</strong></p>
    <p>a = <strong>&radic;${hipotenusa}</strong></p>
    <p>O valor da hipotenusa é <strong>${res}</strong></p>
    `
}

function detalhaNome() {
    let div = document.getElementById('recebeTxt')
    let nome = document.getElementById('nomeCompleto').value.toString()

    let removeEspacos = nome.replace(/\s/g, '')
    let divideTxt = nome.split(' ')

    div.innerHTML = `<p>Seu nome em maiúsculas: ${nome.toUpperCase()}</p>
    <p>Seu nome em minúsculas: ${nome.toLowerCase()}</p>
    <p>Ao todo, seu nome tem ${removeEspacos.length} letras.</p>
    Seu primeiro nome é ${divideTxt[0]} e tem ${(divideTxt[0]).length} letras.`
}

function separaNumero() {
    let div = document.getElementById('recebeTxt')
    let numero = document.getElementById('numero').value
    let divideNum = numero.split('') // divideNum recebe o que for digitado no campo 'numero' e divide em caracteres
    //let ultimo = divideNum.lastIndexOf([0])
    //let ultimo = divideNum[divideNum.length - 1]
    //let penultimo = divideNum[(divideNum.lenght - 1) -1]
    //ultimo = divideNum.pop()


    div.innerHTML = ` <h2>Analisando o número ${numero}</h2>
    <p>Unidade: ${divideNum.pop()}</p>
    <p>Dezena: ${divideNum.pop()}</p>
    <p>Centena: ${divideNum.pop()}</p>
    <p>Milhar: ${divideNum.pop()}</p>
    `
}

function cidadeSanto() {
    let div = document.getElementById('recebeTxt')
    let cidade = document.getElementById('cidade').value.trim().toLowerCase()
    let cidadeArray = cidade.split(' ')

    if (cidadeArray[0] == 'santo') {
        div.innerHTML = `<p>A cidade ${cidade[0].toUpperCase() + cidade.substr(1)} começa com "Santo", portanto, TRUE! :)</p>`
    } else {
        div.innerHTML = `<p>A cidade ${cidade[0].toUpperCase() + cidade.substr(1)} não começa com "Santo", portanto, FALSE! :)</p>`
    }
}

function verificaSilva() {
    let div = document.getElementById('recebeTxt')
    let nome = document.getElementById('nome').value.toLowerCase()
    let nomeArray = nome.split(' ')

    if (nomeArray.includes('silva')) {
        div.innerHTML = `<p>Você TEM 'Silva' no nome! :D</p>`
    } else {
        div.innerHTML = `<p>Você NÃO TEM 'Silva' no nome :(</p>`
    }
}

function quebraFrase() {
    let div = document.getElementById('recebeTxt')
    let frase = document.getElementById('frase').value.trim().toLowerCase()
    let letra = document.getElementById('letra').value
    let fraseArray = frase.split('')
    let qtdLetra = 0

    for (let i = 0; i < fraseArray.length; i++) {
        if (fraseArray[i] === letra) qtdLetra++;
    }

    div.innerHTML = `<p>A letra <strong>${letra}</strong> aparece <strong>${qtdLetra}</strong> vezes</p>
    <p>A letra <strong>${letra}</strong> aparece pela primeira vez na <strong>posição ${fraseArray.indexOf(letra) + 1}</strong></p>
    <p>A letra <strong>${letra}</strong> aparece pela última vez na <strong>posição ${fraseArray.lastIndexOf(letra) + 1}</strong></p>

    `
}

function quebraFrase2() {
    let div1 = document.getElementById('recebeTxt1')
    let div2 = document.getElementById('recebeTxt2')
    let div3 = document.getElementById('recebeTxt3')
    let frase = document.getElementById('frase').value.trim().toLowerCase()
    let letra = document.getElementById('letra').value
    let fraseArray = frase.split('')
    let qtdLetra = 0

    for (let i = 0; i < fraseArray.length; i++) {
        if (fraseArray[i] === letra) qtdLetra++;
    }

    div1.innerHTML = `<p>A letra <strong>${letra}</strong> aparece <strong>${qtdLetra}</strong> vezes.</p>`

    if(fraseArray.includes(letra)) {
        div2.innerHTML = `<p>A letra <strong>${letra}</strong> aparece pela primeira vez na <strong>posição ${fraseArray.indexOf(letra) + 1}</strong>.</p>`
    } else {
        div2.innerHTML = ``
    }

    if(fraseArray.includes(letra)){
        div3.innerHTML = `<p>A letra <strong>${letra}</strong> aparece pela última vez na <strong>posição ${fraseArray.lastIndexOf(letra) + 1}</strong>.</p>` 
    } else {
        div3.innerHTML = ``
    }
}

function quebraFrase3() {
    let div1 = document.getElementById('recebeTxt1')
    let frase = document.getElementById('frase').value.trim().toLowerCase()
    let letra = document.getElementById('letra').value
    let fraseArray = frase.split('')
    let qtdLetra = 0

    for (let i = 0; i < fraseArray.length; i++) {
        if (fraseArray[i] === letra) qtdLetra++;
    }

    function adcTexto2() {
        let novaDiv = document.createElement('div')
        let novoParagrafo = document.createElement('p')
        let novoConteudo = document.createTextNode(`A letra ${letra} aparece pela primeira vez na posição ${fraseArray.indexOf(letra) + 1}.`)
        novaDiv.appendChild(novoParagrafo)
        novoParagrafo.appendChild(novoConteudo)

        let divAtual = document.getElementById('p1')
        document.body.insertBefore(novaDiv, divAtual)
    }

    function adcTexto3() {
        let novaDiv2 = document.createElement('div')
        let novoParagrafo2 = document.createElement('p')
        let novoConteudo2 = document.createTextNode(`A letra ${letra} aparece pela última vez na posição ${fraseArray.lastIndexOf(letra) + 1}.`)
        novaDiv2.appendChild(novoParagrafo2)
        novoParagrafo2.appendChild(novoConteudo2)

        let divAtual2 = document.getElementById('p2')
        document.body.insertBefore(novaDiv2, divAtual2)
    }

    function divVazia() {
        let novaDiv3 = document.createElement('div')
        let novoConteudo3 = document.createTextNode(``)
        novaDiv3.appendChild(novoConteudo3)

        let divAtual3 = document.getElementById('div1')
        document.body.insertBefore(novaDiv3, divAtual3)
    }

    div1.innerHTML = `<p>A letra <strong>${letra}</strong> aparece <strong>${qtdLetra}</strong> vezes.</p>`

    if(fraseArray.includes(letra)) {
        adcTexto2()
    } else {
        divVazia()
    }

    if(fraseArray.includes(letra)){
        adcTexto3() 
    } else {
        divVazia()
    }
}