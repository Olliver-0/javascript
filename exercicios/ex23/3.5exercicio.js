// Escreva um programa que mostra os valores válidos e a média de medidas de temperatura armazenados em um array

// Observações:
// Se a temperatura for menor que 20, o programa não deverá considerar a temperatura
// A média deverá ser calculada apenas com as temperaturas consideradas

// Saída esperada:
// Foram registradas 5 temperaturas válidas
// A média das temperaturas é 24.8

const temperaturas = [23, 19, 15, 18, 21, 25, 30, 34, 31, 28, 23, 22, 27]

let validos = []
let media = null

const mediaTemps = temps => {
  
  for(let val of temps) {
    if(val >= 20) {
      validos.push(val)
    }
  }
  
  for(let n of validos) {
    media += n
  }
  
  media = media / validos.length
  return media
}

mediaTemps(temperaturas)
console.log(`Foram registradas ${validos.length} temperaturas válidas.`)
console.log(`A média das temperaturas é ${media.toFixed(2)}`)