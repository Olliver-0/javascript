// @ts-check
import { GitHubService } from './api.js';
import { ConsoleView } from './view.js';
import {} from './types.js';

export class App {
    /**
     * @param {GitHubService} service
     * @param {ConsoleView} view
     */
    constructor(service, view) {
        this.service = service;
        this.view = view;

        /** @type {import('./types.js').AppState} */
        this.state = {
            status: 'idle',
            userInfo: null,
            repos: [],
            error: null
        };
    }

    /**
     * @private
     * @param {Partial<import('./types.js').AppState>} newState
     */
    _setState = async newState => {
        Object.assign(this.state, newState);
        this.view.render(this.state);
    }

    /**
     * @param {string} username
     */
    searchUser = async username => {
        this._setState({ status: 'loading', error: null });
        try {
            const [userInfo, repos] = await this.service.fetchUserData(username);
            this._setState({ status: 'success', userInfo, repos });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro desconhecido.';
            this._setState({ status: 'error', error: errorMessage, userInfo: null, repos: [] });
        }
    }
}
