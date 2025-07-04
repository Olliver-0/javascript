/*O objetivo é criar uma hierarquia de classes para representar diferentes tipos de veículos.

Classe Veiculo (A classe-mãe)

Deve ter um constructor que recebe marca e modelo.

Deve ter um método chamado acelerar que retorna a string: 'Acelerando o veículo!'.

Classe Carro (Herda de Veiculo)

Seu constructor deve receber marca, modelo e portas.

Deve chamar o construtor da classe-mãe para reaproveitar a lógica de marca e modelo.

Deve ter um método próprio chamado abrirPortaMalas que retorna a string: 'Porta-malas aberto!'.

Classe Moto (Também herda de Veiculo)

Seu constructor deve receber marca, modelo e cilindradas.

Também deve chamar o construtor da classe-mãe.

Deve sobrescrever o método acelerar para que ele retorne a string: 'Dando grau na moto [modelo]!', onde [modelo] é o modelo da moto.*/

class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    acelerar() {
        return `Acelerando o ${this.marca} ${this.modelo}.`;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, porta) {
        super(marca, modelo);
        this.porta = porta;
    }
    abrirPortaMalas() {
        return `Porta-malas do ${this.marca} ${this.modelo} aberto! Ele tem ${this.porta} portas`;
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }
    acelerar() {
        return `Dando grau na moto ${this.marca} ${this.modelo}! Ela tem ${this.cilindradas} cilindradas.`;
    }
}

const meuVeiculo = new Veiculo('Nissan', 'Kicks');
const meuCarro = new Carro('Ferrari', 'F60', 2);
const minhaMoto = new Moto('Honda', 'CB', 130)

console.log(meuVeiculo.acelerar());
console.log(meuCarro.abrirPortaMalas());
console.log(minhaMoto.acelerar());