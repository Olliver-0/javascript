function* contador() {
    let i = 0

    while(true) {
        yield i++
        if(i > 5)
            break //As chaves não são nevessárias se for uma única instrução no código
    }
}

const itc = contador()

for(let c of itc) {
    console.log(c)
}