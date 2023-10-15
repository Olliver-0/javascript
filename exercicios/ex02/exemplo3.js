function calculadora(operando1, operando2, operacao) {
    return operacao(operando1, operando2);
}

function soma(operando1, operando2) {
    return operando1 + operando2;
}

function multiplicacao(operando1, operando2) {
    return operando1 * operando2;
}

console.log(calculadora(2, 4, soma));
console.log(calculadora(2, 4, multiplicacao));

console.log(soma(6, 4));