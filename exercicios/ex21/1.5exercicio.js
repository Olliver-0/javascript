//Faça um programa que calcula o 'imc' (Índice de Massa Corporal)
//retorna se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa.

// Observações:
// imc = peso / altura^2
// abaixo de 18.5: abaixo do peso
// entre 18.5 e 25: peso normal
// entre 25 e 30: sobrepeso
// 30 ou mais: obeso

//Saída esperada:	
//A pessoa com 70Kg e 1.75 de altura está com peso normal

function imc(peso, altura) {
  if ((peso) / (altura * altura) >= 18.5 && (peso) / (altura * altura) <= 25) {
    return `A pessoa com ${peso}Kg e ${altura} de altura está com peso normal`
  } else if ((peso) / (altura * altura) < 18.5) {
    return `A pessoa com ${peso}Kg e ${altura} de altura está abaixo do peso`
  } else if ((peso) / (altura * altura) > 25 && (peso) / (altura * altura) < 30) {
    return `A pessoa com ${peso}Kg e ${altura} de altura está acima do peso`
  } else {
    return `A pessoa com ${peso}Kg e ${altura} de altura está obeso`
  } 
}

console.log(imc(70, 1.75))