const pessoa = {
    nome: "Ana",
    idade: 23,
    Endereco: {
        rua: 'testando',
        numero: "24"
    }
}
console.log(pessoa)
const {nome: n, idade: i} = pessoa

console.log(n,i)