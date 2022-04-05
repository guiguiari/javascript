let valores = [0 , 2 , 7 , 9 , 8 , 5]

console.log(valores)

/*
for (let pos = 0 ; pos < valores.length ; pos++) {
    console.log(`O conteúdo da posição ${pos} é ${valores[pos]} `)
}
*/

for (let pos in valores) {
    console.log(`O conteúdo da posição ${pos} é ${valores[pos]}`)
}