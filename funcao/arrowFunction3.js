let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global) //true

const obj = {}

comparaComThis = comparaComThis.bind(obj) //força que o objeto seja o escopo da funcao

comparaComThis(global) //false
comparaComThis(obj) //true

let comparaComThisArrow = (parametro) => console.log(this === parametro)

comparaComThisArrow(global) // false

comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)

comparaComThisArrow(obj)