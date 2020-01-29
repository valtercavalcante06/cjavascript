const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(e[0],e[1])
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumetrabe: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimetno  = '02/01/2019'

console.log(pessoa.dataNascimento)