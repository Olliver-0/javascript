// let el = document.getElementsByTagName('div')
// el = [...el]
// el.map((e,i) => {
//     e.innerHTML = 'CFB Cursos'
// })


// const el = document.getElementsByTagName('div')
// const val = Array.prototype.map.call(el, ({innerHTML}) => innerHTML)


const converterInt = (e) => parseInt(e)
const dobrar = (e) => e * 2
let num = ['1', '2', '3', '4', '5'].map(converterInt)
let num2 = ['1', '2', '3', '4', '5'].map(dobrar)
console.log(num)
console.log(num2)