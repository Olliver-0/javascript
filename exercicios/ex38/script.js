/*Crie uma classe chamada `Pessoa` em JavaScript. A classe deve ter:

* Um `constructor` que aceita `nome` e `idade` como argumentos e os armazena como propriedades do objeto.
* Um método chamado `apresentar` que retorna uma string de apresentação, como: 'Olá, meu nome é [nome] e eu tenho [idade] anos.'*/

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
            return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
        }
}

const admUser = new Pessoa('Natã', 18);
console.log(admUser.apresentar());
