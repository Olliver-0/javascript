// ARQUIVO: app.js
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
        // this.state = {
        //     userInfo: null,
        //     repos: [],
        //     error: null,
        //     isLoading: false,
        // };
        this.state = {
            status: 'idle', // Valores possíveis: 'idle', 'loading', 'success', 'error'
            userInfo: null,
            repos: [],
            error: null
        };
    }

    /**
     * Atualiza o estado e comanda a view para renderizar novamente.
     * @private
     * @param {Partial<import('./types.js').AppState>} newState
     */
    _setState = async newState => {
        Object.assign(this.state, newState);
        this.view.render(this.state);
    }

    /**
     * Inicia a busca por um usuário e gerencia o fluxo de dados.
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
