'use-strict';

class GitHubService {
    constructor() {
        this.baseURL = 'https://api.github.com';
    }

    async _fetchData(endpoint) {
        const response = await fetch(`${this.baseURL}${endpoint}`);
        if (!response.ok) {
            throw new Error(`Houve um erro na requisição: ${response.status}`);
        }
        return await response.json();
    }

    getUser = async (username) => {
        const userData = await this._fetchData(`/users/${username}`);
        const { name, login, avatar_url, followers, following, public_repos } = userData;
        return { name, login, avatar_url, followers, following, public_repos };
    }

    getRepos = async (username) => {
        const reposData = await this._fetchData(`/users/${username}/repos`);
        return reposData.map(({ name, description, html_url }) => ({
            name,
            description,
            html_url
        }));
    }
}

const exibirPainelUsuario = async (username, { getUser, getRepos }) => {
    try {
        const [userInfo, userRepos] = await Promise.all([
            getUser(username),
            getRepos(username)
        ]);

        console.log(`Informações do usuário ${userInfo.name}:`);
        console.log(`    
    Login: ${userInfo.login}
    Avatar: ${userInfo.avatar_url}
    Seguidores: ${userInfo.followers}
    Seguindo: ${userInfo.following}
    Repositórios Públicos: ${userInfo.public_repos}
    
-----------------------------------------------------------------`);

        console.log(`\nRepositórios:`);
        userRepos.forEach(repo => {
            console.log(`
    Nome: ${repo.name}
    Descrição: ${repo.description || 'Sem descrição.'}
    URL: ${repo.html_url}
`);
        });
    } catch (error) {
        console.error(`Erro ao buscar dados do usuário:`, error);
    }
}

const gitHubService = new GitHubService();
exibirPainelUsuario('Olliver-0', gitHubService);
