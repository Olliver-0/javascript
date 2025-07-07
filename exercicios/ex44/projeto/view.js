// @ts-check
import {} from './types.js';

export class ConsoleView {
    /**
     * @param {import('./types.js').AppState} state
     */
    render(state) {
        console.clear();

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
        
        repos.slice(0, 5).forEach(repo => {
            console.log(`\n▶ ${repo.name}`);
            console.log(`  ${repo.description || 'Sem descrição.'}`);
            console.log(`  URL: ${repo.html_url}`);
        });
    }
}
