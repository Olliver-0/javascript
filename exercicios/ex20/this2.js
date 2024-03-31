// Definindo um objeto
let pessoa = {
    nome: 'João',
    idade: 30,
    apresentar: function() {
      console.log('Olá, meu nome é ' + this.nome + ' e tenho ' + this.idade + ' anos.');
    }
  };
  
  // Chamando o método 'apresentar' do objeto 'pessoa'
  pessoa.apresentar(); // Output: Olá, meu nome é João e tenho 30 anos.