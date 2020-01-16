const imprimirResultado = function  (nota) {
    if(nota>=7){
        console.log('aprovado')
    }
    else{
        console.log('reprovado')
    }
}
imprimirResultado('epa') //cuidado JS é fracamente tipado!
imprimirResultado(10)
imprimirResultado(5)