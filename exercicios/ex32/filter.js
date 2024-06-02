const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')

cursos.forEach((el, chave) => {
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c' + chave)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = el

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
})

btnCursoSelecionado.addEventListener('click', evt => {
    const todosRadios = [...document.querySelectorAll('input[type = radio]')]
    const radioSelecionado = todosRadios.filter((ele, ind, arr) => {
        return ele.checked
    })
    //const cursoSelecionado = radioSelecionado.parentNode.firstChild.textContent
    const cursoSelecionado = radioSelecionado.parentNode.previousSibling.textContent
    radioSelecionado = radioSelecionado[0]
})