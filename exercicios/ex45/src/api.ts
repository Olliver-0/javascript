// api.ts

// Importamos os tipos que nossa API irá retornar.
import { type UserInfo, type RepoInfo } from './types.js';

export class GitHubService {
  // Declaramos a propriedade baseURL com seu tipo e a tornamos 'private' e 'readonly'.
  // 'private': só pode ser acessada de dentro desta classe.
  // 'readonly': seu valor é definido no construtor e não pode ser alterado depois.
  private readonly baseURL: string = 'https://api.github.com';

  /**
   * Método genérico e privado para buscar dados da API.
   * @param endpoint O caminho da API a ser chamado (ex: /users/nome).
   * @returns Uma promessa que resolve com os dados em formato JSON.
   */
  private async fetchData<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseURL}${endpoint}`);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Usuário não encontrado.');
      }
      throw new Error(`Erro na API: ${response.status}`);
    }
    // O tipo de retorno genérico 'T' nos permite reutilizar este método
    // para buscar tanto usuários quanto repositórios com segurança de tipo.
    return response.json() as Promise<T>;
  }

  /**
   * Busca os dados do usuário e seus repositórios em paralelo.
   * @param username O nome de usuário do GitHub a ser buscado.
   * @returns Uma promessa que resolve com uma tupla contendo [UserInfo, RepoInfo[]].
   */
  async fetchUserData(username: string): Promise<[UserInfo, RepoInfo[]]> {
    // Usamos Promise.all para fazer as duas requisições simultaneamente.
    // O TypeScript entende o tipo de retorno de cada chamada do _fetchData.
    const [userInfo, repos] = await Promise.all([
      this.fetchData<UserInfo>(`/users/${username}`),
      this.fetchData<RepoInfo[]>(`/users/${username}/repos`)
    ]);
    return [userInfo, repos];
  }
}
