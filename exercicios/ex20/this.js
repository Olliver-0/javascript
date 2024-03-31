function aluno(nome, nota) {
    this.nome = nome
    this.nota = nota

    this.dadosArrow = function() {
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
}

const al1 = new aluno('Natã', 100)
al1.dadosArrow()