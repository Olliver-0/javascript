const soma = (v1, v2) => {return v1 + v2}
const nome = n => {return n} //Onde só entra um valor, não precisa dos parênteses.
const add = n => n + 10 //Se não tem return, não precisa usar as chaves. Obs:Em nenhum dos casos acima precisa de return. Mas claro, isso se for uma linha simples, se for mais elaborada, inevitavelmente tem que usar as chaves.

console.log(soma(3, 2))
console.log(nome("Bruno"))
console.log(add(10))