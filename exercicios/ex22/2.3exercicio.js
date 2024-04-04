// Faça um programa que exiba a tabuada de multiplicação de um número inserido pelo usuário.

// Saída esperada:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

const tabuada = number => {
  for(let i = 0; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`)
  }
}

tabuada(5)