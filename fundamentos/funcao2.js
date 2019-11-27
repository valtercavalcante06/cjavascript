
//armazenando função em varável
const imprimirSoma = function (a,b) {
    console.log(a+b)
}

imprimirSoma(2,4)


//Armazenando uma função arrow em uma variável

const soma = (a,b) => {
    return a + b
}

console.log(soma(4,5))

//retorno implícito

const subtr = (a,b) => a-b

console.log(subtr(4,5))

//retorno implícito 2

const imprimir = a => console.log(a)


imprimir('Testando tudo!')