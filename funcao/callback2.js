const notas = [7.7, 6,5, 5.2, 8.9, 3.6, 7.1, 9.0]
const notasbaixas = []

    for (let i in notas){
        if(notas[i]<7){
            notasbaixas.push(notas[i])
        }
    }


console.log(notasbaixas)

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
const notaMenorQue7 = nota => nota < 7

const notasBaixas3 = notas.filter(notaMenorQue7)

console.log(notasBaixas3)