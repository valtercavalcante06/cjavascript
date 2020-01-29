const pessoa = {
    nome: 'Joao'
}
pessoa.nome = 'Maria'

Object.freeze(pessoa)

pessoa.nome = 'Pedro'

console.log(pessoa)