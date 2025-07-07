// @ts-check

/**
 * @typedef {object} UserInfo
 * @property {string} name
 * @property {string} login
 * @property {string} avatar_url
 * @property {number} followers
 * @property {number} following
 * @property {number} public_repos
 */

/**
 * @typedef {object} RepoInfo
 * @property {string} name
 * @property {string | null} description
 * @property {string} html_url
 */

/**
 * @typedef {object} AppState
 * @property {string} status
 * @property {UserInfo | null} userInfo
 * @property {RepoInfo[]} repos
 * @property {string | null} error
 */

export {};
