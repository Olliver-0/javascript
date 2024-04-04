// Escreva um programa que mostre quais são os caros na fila de espera e mostre apenas o nome e modelo no console.

// Observações:
// o Objeto carros é em formato por array de objetos e tem 5 carros
// Use o laço de repetição "for" para mostrar todos os carros

// Saída esperada:
// Toyota Corolla
// Honda Civic
// Ford Fusion
// Chevrolet Cruze
// Volkswagen Jetta
 

// Objeto usado no exercício:
const carros = [
  {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2018,
    cor: "preto",
    preco: 90000
  },
  {
    marca: "Honda",
    modelo: "Civic",
    ano: 2021,
    cor: "prata",
    preco: 95000
  },
  {
    marca: "Ford",
    modelo: "Fusion",
    ano: 2020,
    cor: "azul",
    preco: 85000
  },
  {
    marca: "Chevrolet",
    modelo: "Cruze",
    ano: 2019,
    cor: "vermelho",
    preco: 70000
  },
  {
      marca: "Volkswagen",
      modelo: "Jetta",
      ano: 2018,
      cor: "branco",
      preco: 60000
    }
  ]
    
  for(i in carros) {
      console.log(`${carros[i].marca} ${carros[i].modelo}`)
  }