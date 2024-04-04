//Escreva um programa que verifica o salario de uma pessoa e retorna quando de importo ele tem que pagar

// Observações:
// se o salario for menor que 800, ele paga 5% de imposto
// se o salário for igual ou maior que 800 e menor que 1600, ele paga 10% de imposto
// se o salário for igual ou maior que 1600, ele paga 15% de imposto

// Saída esperada:
// Você deverá pagar R$50 de imposto

const imposto = salario => {
    let valor = 0

    if(salario < 800) {
        valor = salario * 0.05
    } else if(salario >= 800 && salario < 1600) {
        valor = salario * 0.1
    } else {
        valor = salario * 0.15
    }
    return `Você deverá pagar R$${valor} de imposto`
}

console.log(imposto(1800))