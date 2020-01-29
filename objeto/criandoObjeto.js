const obj1 = {} // forma literal de criar objeto

console.log(obj1)
console.log(typeof Object, typeof new Object)

obj2 = new Object

console.log(obj2)

function Produto(nome, preco, desc) { //criando objeto com função/classe
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1-desc)
    }
}
const p1 = new Produto('margarina', 7.99, 0.15)

const p2 = new Produto ('notebook', 4000, 0.2)

console.log(p1.getPrecoComDesconto())


function  criarFuncionario(nome, salarioBase, faltas) { //function factory
    return {
        nome,
        salarioBase,
        faltas,
        getSalario (){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
f1 = new criarFuncionario('teste', 4000, 5)
console.log(f1.getSalario())

const filha = Object.create(null) //outra forma de criar objeto

console.log(filha)

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')// objeto a partir de um JSON

console.log(fromJSON.info)


