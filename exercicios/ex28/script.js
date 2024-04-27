const caixa1 = document.querySelector('div#caixa1')
const caixa2 = document.querySelector('div#caixa2')
const btn = document.querySelector('button#btn_copiar')
const todosCursos = [...document.querySelectorAll('div.curso')]

todosCursos.forEach(el => {
    el.addEventListener('click', evt => {
        const curso = evt.target
        curso.classList.toggle('selecionado')
    })
})

btn.addEventListener('click', () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    cursosSelecionados.forEach(el => {
        caixa2.appendChild(el)
    })
})