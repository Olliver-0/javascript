import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { GitHubService } from './api.js';
import { ConsoleView } from './view.js';
import { App } from './app.js';

const main = async () => {
    const rl = readline.createInterface({ input, output });
    const username = await rl.question('Qual usuário do GitHub você quer ver? ');
    rl.close();

    const gitHubService = new GitHubService();
    const consoleView = new ConsoleView();

    const app = new App(gitHubService, consoleView);

    console.log(`\nIniciando busca por "${username}"...`);
    app.searchUser(username);
}

main();
