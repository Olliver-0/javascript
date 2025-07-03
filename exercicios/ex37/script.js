class Pessoa {
    constructor(pNome, pIdade) {
        this.nome = pNome;
        this.idade = pIdade;
    }

    introduceItself() {
        return this.nome;
    }
}


function Pessoa(pNome, pIdade) {
    this.nome = pNome;
    this.idade = pIdade;
}

Pessoa.protoype.introduceItself = function() {
    return this.nome;
}

function Pessoa(pNome, pIdade) {
    return {
        nome: pNome,
        idade: pIdade,
        introduceItself() {
            return this.nome;
        }
    }
}
