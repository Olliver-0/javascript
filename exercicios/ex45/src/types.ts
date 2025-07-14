// types.ts

/**
 * Descreve a estrutura de dados para as informações de um usuário do GitHub.
 * Usamos 'export' para que esta interface possa ser importada em outros arquivos.
 */
export interface UserInfo {
    name: string | null;
    login: string;
    avatar_url: string;
    followers: number;
    following: number;
    public_repos: number;
}

/**
 * Descreve a estrutura de dados para as informações de um repositório do GitHub.
 */
export interface RepoInfo {
    name: string;
    description: string | null;
    html_url: string;
}

/**
 * Descreve a forma completa do estado interno da nossa aplicação.
 * Usamos tipos literais para 'status' para garantir que apenas valores conhecidos
 * sejam atribuídos, prevenindo erros de digitação.
 */
export interface AppState {
    status: 'idle' | 'loading' | 'success' | 'error';
    userInfo: UserInfo | null;
    repos: RepoInfo[];
    error: string | null;
}
