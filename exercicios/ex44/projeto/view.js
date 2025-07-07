// ARQUIVO: view.js
// @ts-check

import {} from './types.js';

export class ConsoleView {
    /**
     * Renderiza a interface no console com base no estado atual.
     * @param {import('./types.js').AppState} state O estado completo da aplicação.
     */
    render(state) {
        console.clear();

        // if (state.isLoading) {
        //     console.log('Buscando dados...');
        //     return;
        // }

        // if (state.error) {
        //     console.error(`❌ Erro: ${state.error}`);
        //     return;
        // }

        // if (state.userInfo) {
        //     this._renderUserInfo(state.userInfo);
        //     this._renderRepos(state.repos);
        // } else {
        //     console.log("Inicie uma busca para ver as informações de um usuário.");
        // }
        //Com o estado refatorado, o switch fica excelente
        switch (state.status) {
            case 'loading':
                console.log('Buscando dados...');
                break;

            case 'error':
                console.error(`❌ Erro: ${state.error}`);
                break;
                
            case 'success':
                this._renderUserInfo(state.userInfo);
                this._renderRepos(state.repos);
                break;

            case 'idle':
            default:
                console.log("Inicie uma busca para ver as informações de um usuário.");
                break;
        }
    }

    /**
     * @private
     * @param {import('./types.js').UserInfo} userInfo
     */
    _renderUserInfo(userInfo) {
        console.log(`--- Perfil de ${userInfo.name || userInfo.login} ---`);
        console.log(`Login: ${userInfo.login}`);
        console.log(`Avatar: ${userInfo.avatar_url}`);
        console.log(`Seguidores: ${userInfo.followers} | Seguindo: ${userInfo.following}`);
        console.log('-------------------------------------\n');
    }

    /**
     * @private
     * @param {import('./types.js').RepoInfo[]} repos
     */
    _renderRepos(repos) {
        console.log(`--- Repositórios (${repos.length}) ---`);
        if (repos.length === 0) {
            console.log('Nenhum repositório público encontrado.');
            return;
        }
        
        // Mostra os 5 mais recentes (a API já retorna mais ou menos nessa ordem)
        repos.slice(0, 5).forEach(repo => {
            console.log(`\n▶ ${repo.name}`);
            console.log(`  ${repo.description || 'Sem descrição.'}`);
            console.log(`  URL: ${repo.html_url}`);
        });
    }
}
