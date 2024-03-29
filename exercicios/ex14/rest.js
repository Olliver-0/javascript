function soma(...valores) { //Parâmetros rest
    let res = 0
    for(let i of valores) {
        res += i
    }
    return res
}

console.log(soma(10, 5, 1, 9, 76, 3.15, -11))
