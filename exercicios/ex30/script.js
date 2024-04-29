const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelector('.curso')]

console.log(document.getRootNode())
console.log(btn_c[0].getRootNode())
console.log(btn_c[0].ownerDocument)

console.log(caixa1.children[caixa1.children.length - 1])
console.log(caixa1.firstElementChild)
console.log(caixa1.lastElementChild)
console.log(caixa1.children[4])
console.log(caixa1.children)