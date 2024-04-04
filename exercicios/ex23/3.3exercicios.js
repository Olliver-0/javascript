// Escreva um programa que some os números de um array(vetor).

// Saída esperada:
// a soma dos números no array é 150

const array = [10, 20, 30, 40, 50]
let soma = 0

for(i of array) {
    soma += i
}

console.log(`A soma dos números no array é ${soma}`)