const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}

console.log(obj1)
console.log(obj2)
console.log('/////////')

const nomeAtt = 'nota'
const valorAtt  = 7.87

obj2[nomeAtt] = valorAtt

console.log(obj1)
console.log(obj2)

const obj3 = {
    [nomeAtt]: valorAtt
}

console.log(obj3)

const obj5 = {
    funcao1: function () {
        //...
    },
    function2() {
        //...  
    }
}
console.log(obj5)