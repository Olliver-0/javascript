// view.ts

// Importamos os tipos que esta view precisa para renderizar os dados corretamente.
import { type AppState, type UserInfo, type RepoInfo } from './types.js';

export class ConsoleView {
  /**
   * Renderiza o estado atual da aplicação no console.
   * @param state O objeto de estado completo da aplicação.
   */
  render(state: AppState): void {
    console.clear();

    switch (state.status) {
      case 'loading':
        console.log('Buscando dados...');
        break;
      case 'error':
        // O TypeScript garante que state.error é uma string ou nulo.
        console.error(`❌ Erro: ${state.error}`);
        break;
      case 'success':
        // O TypeScript garante que, se o status é 'success',
        // userInfo e repos não serão nulos (conforme a lógica da App).
        this.renderUserInfo(state.userInfo!);
        this.renderRepos(state.repos);
        break;
      case 'idle':
      default:
        console.log("Inicie uma busca para ver as informações de um usuário.");
        break;
    }
  }

  /**
   * Renderiza as informações do perfil do usuário.
   * O método é privado, pois só deve ser chamado de dentro desta classe.
   */
  private renderUserInfo(userInfo: UserInfo): void {
    console.log(`--- Perfil de ${userInfo.name || userInfo.login} ---`);
    console.log(`Login: ${userInfo.login}`);
    console.log(`Avatar: ${userInfo.avatar_url}`);
    console.log(`Seguidores: ${userInfo.followers} | Seguindo: ${userInfo.following}`);
    console.log('-------------------------------------\n');
  }

  /**
   * Renderiza a lista de repositórios públicos.
   */
  private renderRepos(repos: RepoInfo[]): void {
    console.log(`--- Repositórios Públicos (${repos.length}) ---`);
    if (repos.length === 0) {
      console.log('Nenhum repositório público encontrado.');
      return;
    }

    // Exibe os 5 primeiros repositórios.
    repos.slice(0, 5).forEach(repo => {
      console.log(`\n▶ ${repo.name}`);
      console.log(`  ${repo.description || 'Sem descrição.'}`);
      console.log(`  URL: ${repo.html_url}`);
    });
  }
}
