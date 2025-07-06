// ARQUIVO: api.js
// @ts-check

// Importa as definições para que o JSDoc as reconheça.
import {} from './types.js';

export class GitHubService {
    constructor() {
        this.baseURL = 'https://api.github.com';
    }

    /**
     * @private
     * @param {string} endpoint O caminho da API a ser buscado.
     * @returns {Promise<any>}
     */
    async _fetchData(endpoint) {
        const response = await fetch(`${this.baseURL}${endpoint}`);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Usuário não encontrado.');
            }
            throw new Error(`Erro na API: ${response.status}`);
        }
        return response.json();
    }

    /**
     * Busca os dados do usuário e seus repositórios simultaneamente.
     * @param {string} username O nome de usuário do GitHub.
     * @returns {Promise<[import('./types.js').UserInfo, import('./types.js').RepoInfo[]]>} Uma tupla com as informações do usuário e a lista de repositórios.
     */
    async fetchUserData(username) {
        const [userInfo, repos] = await Promise.all([
            this._fetchData(`/users/${username}`),
            this._fetchData(`/users/${username}/repos`)
        ]);
        return [userInfo, repos];
    }
}