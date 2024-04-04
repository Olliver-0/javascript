// Desenvolva um programa que receba um número como parâmetro e verifique se ele é par ou ímpar.

// Observações:
// Um numero par é um numero que pode ser dividido por 2 e o resto da divisão é 0.
// Um numero impar é um numero que pode ser dividido por 2 e o resto da divisão é diferente de 0.

// Saída esperada:
// O número 11 é ímpar

const parImpar = num => {
    if(num % 2 == 0) {
        console.log(`O número ${num} é par`)
    } else {
        console.log(`O número ${num} é ímpar`)
    }
}

parImpar(11)