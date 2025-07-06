// ARQUIVO: main.js
// @ts-check

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { GitHubService } from './api.js';
import { ConsoleView } from './view.js';
import { App } from './app.js';

async function main() {
    // 1. Cria a interface para fazer a pergunta
    const rl = readline.createInterface({ input, output });

    // 2. Faz a pergunta e espera (await) a resposta do usuário
    const username = await rl.question('Qual usuário do GitHub você quer ver? ');

    // 3. Fecha a interface de leitura, senão o programa não encerra
    rl.close();
    // 1. Instancia as dependências
    const gitHubService = new GitHubService();
    const consoleView = new ConsoleView();

    // 2. Injeta as dependências no controlador principal
    const app = new App(gitHubService, consoleView);
    // 3. Inicia a aplicação
    console.log(`\nIniciando busca por "${username}"...`);
    app.searchUser(username);
}

main();

// Para testar o erro, você pode descomentar a linha abaixo:
// app.searchUser('usuario-que-certamente-nao-existe-12345');