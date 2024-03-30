const f = function(...valores) {
    let res = 0
    for(let v of valores) {
        res += v
    }
    return res
}

f(7.4, 17)
console.log(f)
console.log(f(65, -3.9, 6.08802))

//Ou... Função com instrutor, que também é anônima

const ins = new Function('v1', 'v2', 'return v1 + v2') //Feita para coisas mais simples

console.log(f(33.33333, 90))