// Escreva um programa que imprime os números pares de 0 a 10.

// Saída esperada:
// 0, 2, 4, 6, 7, 8, 10


let texto = ""

for (let i = 0; i <= 10; i += 2) {
  if (i < 10) {
    texto = texto + i + ", "
  } else {
    texto = texto + i
  }
}

console.log(texto)