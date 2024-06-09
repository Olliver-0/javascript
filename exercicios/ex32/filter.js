const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoveCurso = document.getElementById('btnCursoSelecionado')
const btnAdicionarNovoCursoAntes = document.getElementById('btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois = document.getElementById('btnAdicionarNovoCursoDepois')
const nomeCurso = document.getElementById('nomeCurso')

let indice = 0

const tirarSelecao = () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    cursosSelecionados.forEach(el => {
        el.classList.remove('selecionado')
    })
}

const criarNovoCurso = curso => {
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c' + indice)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = curso
    novoElemento.addEventListener('click', evt => {
        evt.target.classList.toggle('selecionado')
    })
    return novoElemento
}

cursos.forEach((el, chave) => {
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const cursoSelecionado = () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    return cursosSelecionados[0]
}

btnCursoSelecionado.addEventListener('click', evt => {
    try {
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert('Curso Selecionado: ' + cursoSelecionado().innerHTML)
    } catch(erro) {
        alert('Selecione um curso')
    }
    //ou...
    // if(rs != undefined) {
    //     const cursoSelecionado = rs.parentNode.previousSibling.textContent
    //     alert('Curso Selecionado: ' + cursoSelecionado)
    // } else {
    //     alert('Selecione um curso')
    // }
})

btnRemoveCurso.addEventListener('click', evt => {
    const cs = cursoSelecionado()
    if(cs != undefined) {
        cs.remove()
    } else {
        alert('Selecione um curso')
    }
})

btnAdicionarNovoCursoAntes.addEventListener('click', evt => {
    try {
        if(nomeCurso.value != '') {
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado())
        } else {
            alert('Digite o nome do curso')
        }
    } catch(erro) {
        alert('Selecione um curso')
    }
})

btnAdicionarNovoCursoDepois.addEventListener('click', evt => {
    try {
        if(nomeCursovalue != '') {
            const cursoSelecionado = rs.parentNode.parentNode
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling)
        } else {
            alert('Digite o nome do curso')
        }
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling)
    } catch(erro) {
        alert('Selecione um curso')
    }
})