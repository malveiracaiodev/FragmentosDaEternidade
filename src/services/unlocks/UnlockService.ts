/**

* Fragmentos da Eternidade
* Contrato do sistema de desbloqueios.
*
* Define as operações disponíveis para qualquer
* implementação de gerenciamento de desbloqueios.
*
* A implementação atual utiliza o PlayerService
* para persistir os dados no Firestore.
  */

import type { UnlockId } from "../../types/unlocks";

export interface UnlockService {
/**
 * Verifica se um conteúdo está desbloqueado.
 */
isUnlocked(
    uid: string,
    unlockId: UnlockId
): Promise<boolean>;


/**
 * Desbloqueia um conteúdo.
 */
unlock(
    uid: string,
    unlockId: UnlockId
): Promise<void>;


/**
 * Bloqueia novamente um conteúdo.
 *
 * Útil para testes, administração e
 * desenvolvimento do sistema.
 */
lock(
    uid: string,
    unlockId: UnlockId
): Promise<void>;


/**
 * Retorna todos os conteúdos desbloqueados
 * pelo jogador.
 */
getAll(
    uid: string
): Promise<UnlockId[]>;
}
