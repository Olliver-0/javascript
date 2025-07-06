// Nome da função atualizado para refletir o que ela faz
// function buscarRepositoriosDoUsuario() {
//   fetch('https://api.github.com/users/Olliver-0') // Pega o usuário
//     .then(respostaUsuario => {
//       if (!respostaUsuario.ok) {
//         throw new Error('Erro ao buscar usuário!');
//       }
//       return respostaUsuario.json();
//     })
//     .then(usuario => {
//       console.log('Usuário encontrado:', usuario.name);

//       console.log('Buscando repositórios em:', usuario.repos_url);
//       return fetch(usuario.repos_url);
//     })
//     .then(respostaRepos => {
//       if (!respostaRepos.ok) {
//         throw new Error('Erro ao buscar repositórios!');
//       }
//       return respostaRepos.json();
//     })
//     .then(repositorios => {

//       console.log(`Encontrados ${repositorios.length} repositórios públicos.`);
      
//       repositorios.slice(0, 5).forEach(repo => {
//         console.log(` - ${repo.name}`);
//       });
//     })
//     .catch(erro => {
//       console.error('Ocorreu um erro na corrente de Promises:', erro.message);
//     });
// }

// buscarRepositoriosDoUsuario();

async function inspecionarFetchAsync() {
  try {
    const resposta = await fetch('https://api.github.com/users/Olliver-0');

    console.log('--- ETAPA 1: O OBJETO RESPONSE (A "CAIXA") ---');
    console.dir(resposta);
    console.log(`Status: ${resposta.status}, OK? ${resposta.ok}`);
    
    // Agora, vamos "abrir a caixa" e esperar o resultado
    const dadosJaEmJS = await resposta.json();

    console.log('\n--- ETAPA 2: O OBJETO JAVASCRIPT (O "PRODUTO") ---');
    console.log(dadosJaEmJS);
    console.log(`Login: ${dadosJaEmJS.login}, Nome: ${dadosJaEmJS.name}`);

  } catch (erro) {
    console.error("Algo deu errado:", erro);
  }
}

inspecionarFetchAsync();