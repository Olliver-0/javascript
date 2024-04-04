// Escreva um programa que transforme a pressão de 'bar' para 'psi'

// Observações:
// 1 bar = 14.5038 psi
// Exiba o resultado com duas casas decimais

// Saída esperada:
// 1.3 bar é igual a 18.85 psi


let bar = 1.3;
console.log(`${bar} bar é igual a ${(bar * 14.5038).toFixed(2)} psi`);