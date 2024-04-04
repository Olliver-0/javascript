// Escreva um programa que atualiza o preço do carro para 95000 e exiba todas as informações do carro no console.

// saída esperada:
// {
//   marca: "Toyota",
//   modelo: "Corolla",
//   ano: 2018,
//   cor: "preto",
//   preco: 95000
// }

// Objeto usado no exercício:

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2018,
    cor: "preto",
    preco: 90000
  } 
  
  console.log(`Marca: ${carro.marca}`)
  console.log(`Modelo: ${carro.modelo}`)
  console.log(`Ano: ${carro.ano}`)
  console.log(`Cor: ${carro.cor}`)
  carro.preco = 95000
  console.log(`Preço: R$${carro.preco}`)