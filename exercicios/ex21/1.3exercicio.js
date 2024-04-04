// Escreva um programa que recebe a quantidade de maçãs compradas e retorna o valor a ser pago.

// Observações:
// O preço normal das maçãs é R$ 1.30
// Porém, a partir de 12 maçãs, é pago apenas R$ 1.00 por unidade

// Saída esperada:
// 15 maçãs foram compradas e o valor a ser pago é R$ 19.50

const compra = macas => {
    let preco = 0

    if(macas < 12) {
        preco = macas * 1.3
    } else {
        preco = macas
    }
    return `${macas} maçãs foram compradas e o valor a ser pago é R$${preco}`
}

console.log(compra(15))