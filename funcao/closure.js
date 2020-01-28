//o clasure é o escopo criado quando a função é declarad
//esse escopo permite a função acessar e manipular as variaveis externas à função

const x = "global"

function fora() {
    const x = 'local'
    function dentr() {
        return x 
    }
    return dentr
}

const minhaFuncao = fora()

console.log(minhaFuncao())


