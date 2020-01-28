function Carro (velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual =  0

    //metodo publico
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidade = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()

console.log(uno.getVelocidade())

const ferrari = new Carro(400, 25)

ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocidade())


