const pessoa = {
    nome: "Ana",
    idade: 23,
    endereco: {
        rua: 'testando',
        numero: "24"
    }
}
console.log(pessoa)
const {nome: n, idade: i} = pessoa

console.log(n,i)

const {nome, endereco} = pessoa
console.log(nome,endereco)

//destruting dados aninhados 
const {endereco: {rua, numero} } = pessoa

console.log(rua, numero)