const retornaInteiroAleatorio = (min,max) => {
    const numero = Math.random() * (max - min) + min
    return Math.floor(numero)
}
console.log("teste")
let opcao = -1

do {
    opcao = retornaInteiroAleatorio(-1,10)
    console.log("A opcao escolhida doi " + opcao)
}while (opcao != -1)