// ARQUIVO: types.js
// @ts-check

/**
 * Define a estrutura de dados para as informações do usuário.
 * @typedef {object} UserInfo
 * @property {string} name
 * @property {string} login
 * @property {string} avatar_url
 * @property {number} followers
 * @property {number} following
 * @property {number} public_repos
 */

/**
 * Define a estrutura de dados para as informações de um repositório.
 * @typedef {object} RepoInfo
 * @property {string} name
 * @property {string | null} description
 * @property {string} html_url
 */

/**
 * Define a estrutura do estado completo da nossa aplicação.
 * @typedef {object} AppState
 * @property {UserInfo | null} userInfo
 * @property {RepoInfo[]} repos
 * @property {string | null} error
 * @property {boolean} isLoading
 */

// Export vazio para tratar este arquivo como um módulo e permitir a importação de tipos.
export {};