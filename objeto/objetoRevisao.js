const produto = new Object

produto.nome = 'Cadeira'
produto['marca'] = 'Generica'

produto.preco = 220

console.log(produto)

delete produto.preco

console.log(produto)


const carro ={
    modelo: 'A4',
    valor: 90000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            lavradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 42
    }],
    valorDoSeguro: function () {
       return carro.proprietario.idade * carro.valor
    },
    valorDesconto: function () {
      //calcula o valor do desconto
    }
}
console.log(carro.proprietario.idade)
console.log(carro.valorDoSeguro())