import type { UnlockService } from "./UnlockService";
import type { UnlockId } from "../../types/unlocks";

import { PlayerService } from "../player/PlayerService";

/**

* Serviço de desbloqueios utilizado como camada intermediária
* entre a interface da aplicação e o PlayerService.
*
* Atualmente os desbloqueios são persistidos diretamente
* no Firestore através do PlayerService.
  */
  class MockUnlockService implements UnlockService {

  /**

  * Verifica se um conteúdo está desbloqueado para o jogador.
    */
    async isUnlocked(
    uid: string,
    unlockId: string
    ): Promise<boolean> {

    return PlayerService.isUnlocked(
    uid,
    unlockId as UnlockId
    );

  }

  /**

  * Desbloqueia um conteúdo para o jogador.
    */
    async unlock(
    uid: string,
    unlockId: string
    ): Promise<void> {

    await PlayerService.unlock(
    uid,
    unlockId as UnlockId
    );

  }

  /**

  * Bloqueia novamente um conteúdo.
  *
  * Útil principalmente durante testes,
  * desenvolvimento e administração dos dados.
    */
    async lock(
    uid: string,
    unlockId: string
    ): Promise<void> {

    await PlayerService.lock(
    uid,
    unlockId as UnlockId
    );

  }

  /**

  * Retorna todos os desbloqueios ativos do jogador.
  *
  * Exemplo:
  *
  * [
  * ```
    "character.caleb",
    ```
  * ```
    "symbol.government",
    ```
  * ```
    "chapter.1"
    ```
  * ]
    */
    async getAll(
    uid: string
    ): Promise<string[]> {

    const player =
    await PlayerService.getPlayer(uid);

    if (!player) {
    return [];
    }

    const result: string[] = [];

    const unlocks =
    player.unlocks;

    Object.entries(unlocks).forEach(
    ([category, values]) => {

    ```
         if (
             typeof values !== "object" ||
             values === null
         ) {
             return;
         }

         Object.entries(values).forEach(
             ([id, unlocked]) => {

                 if (unlocked === true) {

                     result.push(
                         `${category}.${id}`
                     );

                 }

             }
         );

     }
    ```

    );

    return result;
    }
    }

export const mockUnlockService =
new MockUnlockService();