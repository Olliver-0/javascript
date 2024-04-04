// Escreva um programa que exiba todas as informações do carro no console, incluindo marca, modelo, ano, cor e preço.

// Saída esperada:
// Toyota Corolla
// ano 2018
// cor preto
// R$90000

// Objeto usado no exercício:

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2018,
    cor: "preto",
    preco: 90000
  }

  console.log(`${carro.marca} ${carro.modelo}`)
  console.log(`Ano ${carro.ano}`)
  console.log(`Cor ${carro.cor}`)
  console.log(`R$${carro.preco}`)