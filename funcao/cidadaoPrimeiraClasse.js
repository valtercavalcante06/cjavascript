//Função JS Fist-Class Object (Citizens)
// Higher-order funcion


//criar de forma literal
function fun1(){

}

//Amazenar em uma variável 
const fun2 = function( ){ //você pode chamar a função pelo nome da constante

}

//Armazenar dentro de um array
const array = [function(a,b){ return a+b}, fun1, fun2]

 console.log(array[0](2,3))

 //Armazenar em um atributo de um objeto
const obj = {}
obj.falar = function (){ return 'opa'}
console.log(obj.falar())

//Passar função como parametro
function run(fun) {
    fun()
}
run(function(){console.log('Executando..')})

//retornar como parâmetro
function soma(a, b){
    return function (c) {
        console.log(a+b+c)
    }
}
soma(4,5)(4)