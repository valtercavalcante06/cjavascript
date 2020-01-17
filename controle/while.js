const retornaInteiroAleatorio = (min,max) => {
    const numero = Math.random() * max - min + min
    return Math.floor(numero)
}
console.log("teste")
let opcao = 0

while (opcao != -1){
    opcao = retornaInteiroAleatorio(-1,10)
    console.log("A opcao escolhida doi " + opcao)
}