function tratarErro(erro) {
    throw new Error(erro.message)
}


function gritar(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch (e){
        tratarErro(e)
    } finally{
        console.log("terminando tudo")
    }
}

const obj = {
    nome : "Bora beber"
}
gritar(obj)
