function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1- this.desc) * (1+imposto)}`
}

const produto = {
    nome: "notebook",
    preco: 40000,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.10

console.log(getPreco())

const carro = { preco:5000, desc:0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(produto, 0.15, '$'))
console.log(getPreco.apply(carro, [0.20,'Y']))

