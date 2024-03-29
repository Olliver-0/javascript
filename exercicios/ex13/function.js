let valorPadrao = 0

function soma(n1 = valorPadrao, n2 = 1) { //Posso definir valores padrões para os parâmetros dessa forma.
    return n1 + n2
}

console.log(soma(10))
console.log(soma(10, 15))