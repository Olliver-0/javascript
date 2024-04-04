// Escreva um programa que calcule a idade do carro e mostre no console.

// Observações:
// A idade do carro é o ano atual menos o ano do carro
// Use new Date() para pegar a data atual
// Use o método .getFullYear() para pegar o ano atual

// Saída esperada:
// O carro tem 6 anos de uso

// Objeto usado no exercício:

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2018,
  cor: "preto",
  preco: 95000
}
  
let dataAtual = new Date() // gerar nova data (no momento atual)
  
let tempoDeUso = dataAtual.getFullYear() - 2018

console.log(`O carro tem ${tempoDeUso} anos de uso`)