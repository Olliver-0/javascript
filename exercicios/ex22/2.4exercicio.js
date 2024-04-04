// Escreva um programa que imprime os números de 1 a 10 em sequência.

// Saída esperada:
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10


let texto = ""

for(let i = 0; i <= 10; i++) {
  if (i < 10) {
    texto = texto + i + ", "
  } else {
    texto = texto + i
  }
}

console.log(texto)