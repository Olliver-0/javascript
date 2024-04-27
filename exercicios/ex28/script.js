const caixa1 = document.querySelector('div#caixa1')
const caixa2 = document.querySelector('div#caixa2')
const btn_transferir = document.querySelector('button#btn_transferir')
const todosCursos = [...document.querySelectorAll('div.curso')]

todosCursos.forEach(el => {
    el.addEventListener('click', evt => {
        const curso = evt.target
        curso.classList.toggle('selecionado')
    })
})

btn_transferir.addEventListener('click', () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    const cursosNaoSelecionados = [...document.querySelectorAll('.curso:not(.selecionado)')] //Pega dentro dos elementos com a classe cursos, aquelas que não possuem a classe selecionado.
    cursosSelecionados.forEach(el => {
        caixa2.appendChild(el)
    })
    cursosNaoSelecionados.forEach(el => {
        caixa1.appendChild(el)
    })
})