const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
//Formas de pegar o elemento root da página: document
console.log(document.getRootNode()) 
console.log(btn_c[0].getRootNode()) 
console.log(btn_c[0].ownerDocument) 
//Maneiras de pegar os filhos
console.log(caixa1.children[caixa1.children.length - 1]) //Uma forma de pegar o último filho
console.log(caixa1.firstElementChild) //Pega o primeiro filho
console.log(caixa1.lastElementChild) //Pega o último filho
console.log(caixa1.children[4]) //Pega o filho do índice 4
console.log(caixa1.children) //Devolve um HTML Collection com todos os filhos, mas apenas os elementos filhos, sem textos ou comentários

console.log(caixa1.hasChildNodes()) //Retorna true or false, dependendo se o elemento tiver ou não filhos
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes) //Retorna um nodelist com todos os filhos, todos os nós filhos, até textos e comentários, e texto é até espaço em branco.

console.log(caixa1.children.length > 0 ? 'Possui filhos' : 'NÃO possui filhos') //Operador Ternário: Estrutura de condição que funciona como um if...else.

caixa1.firstElementChild.innerHTML = 'TESTE'
caixa1.children[1].innerHTML = 'TESTE'

console.log(c1_2.parentNode.parentNode.children[4]) //Esse é o avô, o pai do pai, e seleciona um elemento específico dele