function boaNoticia(nota) {
    if (nota>=1){
        console.log('Aprovado com ' + nota)
    }
    
}
boaNoticia(7.1)
boaNoticia(5.0)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log("e verdade... "+ valor)
    }
    else{
        console.log(valor + " e falso")
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo("")
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo({})
seForVerdadeEuFalo([])
