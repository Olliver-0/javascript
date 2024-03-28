let n = 0
let max = 1000

/*while (n <= max) {
    console.log(`Texto Super Criativo - ${n}`)
    if (n > 10) {
        break //break para a execução de um loop
    }
    n++
}

console.log('Fim do programa')*/

let pares = 0

for (let i = n; i < max; i++) {
    if (i % 2 !== 0) {
        continue //continue parou a iteração mas continuou o loop
    }
    pares++
}

console.log(`Quantidade de pares: ${pares}`)
console.log('Fim do programa')