// app.ts

// Importamos os tipos e as classes de que a App depende.
import { type AppState } from './types.js';
import { GitHubService } from './api.js';
import { ConsoleView } from './view.js';

export class App {
	// Usamos "Parameter Properties" no construtor.
	// Ao declarar os parâmetros com 'private readonly', o TypeScript automaticamente
	// cria as propriedades na classe e atribui os valores. Isso economiza código.
	constructor(
		private readonly service: GitHubService,
		private readonly view: ConsoleView
	) { }

	// O estado é privado, pois sua modificação deve ser controlada pela classe.
	// Ele é inicializado com valores padrão que correspondem à interface AppState.
	private state: AppState = {
		status: 'idle',
		userInfo: null,
		repos: [],
		error: null
	};

	/**
	 * Método privado para atualizar o estado e acionar a renderização.
	 * O uso de 'Partial<AppState>' permite atualizações parciais do estado.
	 */
	private setState(newState: Partial<AppState>): void {
		this.state = { ...this.state, ...newState }
		this.view.render(this.state);
	}

	/**
	 * Orquestra a busca por um usuário e atualiza o estado da aplicação.
	 */
	async searchUser(username: string): Promise<void> {
		this.setState({ status: 'loading', error: null });
		try {
			const [userInfo, repos] = await this.service.fetchUserData(username);
			this.setState({ status: 'success', userInfo, repos });
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro desconhecido.';
			this.setState({ status: 'error', error: errorMessage, userInfo: null, repos: [] });
		}
	}
}
