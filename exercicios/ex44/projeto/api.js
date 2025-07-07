// @ts-check
import {} from './types.js';

export class GitHubService {
    constructor() {
        this.baseURL = 'https://api.github.com';
    }

    /**
     * @private
     * @param {string} endpoint
     * @returns {Promise<any>}
     */
    _fetchData = async endpoint => {
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
     * @param {string} username
     * @returns {Promise<[import('./types.js').UserInfo, import('./types.js').RepoInfo[]]>}
     */
    fetchUserData = async username => {
        const [userInfo, repos] = await Promise.all([
            this._fetchData(`/users/${username}`),
            this._fetchData(`/users/${username}/repos`)
        ]);
        return [userInfo, repos];
    }
}
