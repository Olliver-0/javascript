const caixa1 = document.querySelector('#caixa1')
const btn_c1 = document.querySelector('#c1')
const cursos = [...document.querySelectorAll('.curso')]

caixa1.addEventListener('click', () => {
    console.log('clicou') //Não apenas a div aciona o evento, mas todos os outros elementos dentro dela
})

cursos.forEach(el => {
    el.addEventListener('click', evt => {
        evt.stopPropagation() //O método stopPropagation() do addEventListener() é usado para parar a propagação do evento, impedindo que ele faça qualquer coisa mesmo estando na bolha do elemento maior.
    })
})