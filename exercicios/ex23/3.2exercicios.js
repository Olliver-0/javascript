// Escreva um programa que cria um Array(vetor) de 5 posições
// Preenche com números
// Imprime o valor de cada um dos valores.
// Use a estrutura de repetição for.

// Observações:
// para sabe o tamanho de um array, use a propriedade .length

// Saída esperada:
// 10
// 20
// 30
// 40
// 50

const array = []

for (let i = 0; i < 5; i++) {
  array[i] = (i + 1) * 10
}

for (let i = 0; i < array.length; i++) {
  console.log(array[i])
}