/*Usando a classe `Pessoa` do desafio anterior como base, crie uma nova classe chamada `Estudante` que herda de `Pessoa`.

A classe `Estudante` deve:

* Herdar `nome` e `idade` de `Pessoa`.
* Ter uma nova propriedade chamada `curso`.
* O `constructor` de `Estudante` deve aceitar `nome`, `idade` e `curso`.
* Sobrescrever o método `apresentar` para retornar uma string como: 'Olá, meu nome é [nome], eu tenho [idade] anos e estudo [curso].'*/

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
            return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
        }
}

class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }
    apresentar() {
        return `Olá, meu nome é ${this.nome}, eu tenho ${this.idade} anos e estudo ${this.curso}`;
    }
}

const aluno = new Estudante('Cardo', 12, 'JavaScript');
console.log(aluno.apresentar());