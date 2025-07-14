import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// Importamos as classes já refatoradas (ou que serão refatoradas).
// A extensão .js é mantida para compatibilidade com o sistema de módulos do Node.
import { GitHubService } from './api.js';
import { ConsoleView } from './view.js';
import { App } from './app.js';

// A função principal é envolvida por uma função assíncrona auto-executável.
const main = async () => {
	// O TypeScript infere o tipo de 'rl' a partir do retorno de createInterface.
	const rl = readline.createInterface({ input, output });

	// O TypeScript infere que 'username' é uma string a partir do retorno de rl.question.
	const username = await rl.question('Qual usuário do GitHub você quer ver? ');
	rl.close();

	// Instanciamos nossas classes. O TypeScript garante que estamos passando
	// os tipos corretos para o construtor da classe App.
	const gitHubService = new GitHubService();
	const consoleView = new ConsoleView();
	const app = new App(gitHubService, consoleView);

	console.log(`\nIniciando busca por "${username}"...`);

	// Chamamos o método da nossa aplicação. Se errarmos o nome do método ou o tipo
	// do parâmetro, o TypeScript nos avisará antes mesmo de rodar o código.
	app.searchUser(username);
}

// Executamos a função principal.
main();
