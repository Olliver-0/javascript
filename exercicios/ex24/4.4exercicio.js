// Escreva um programa que mostre quantas cores diferentes existem no para o carro e mostre todas as cores no console.

// Observações:
// Use o método .length para mostrar a quantidade de cores
// Use o método .join para mostrar as cores no console

// Saída esperada:
// O carro está disponível em 4 cores: preto, branco, prata, vermelho

// Objeto usado no exercício:

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2018,
  cor: ["preto", "branco", "prata", "vermelho"],
  preco: 95000
}

console.log(`O carro está disponível em ${carro.cor.length} cores: ${carro.cor.join(', ')}`)