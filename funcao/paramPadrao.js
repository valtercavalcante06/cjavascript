//teremos problemas para os valores (0,0,0) retorna 3 e não zero
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(),soma1(3), soma1(1,2,3), soma1(0,0,0))
 
//estratégias para valor padrão mais eficientes
function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? c : 1
}

//valor padrão es2015
function  soma3(a=1,b=1,c=1) {
    return (a+b+c)
}