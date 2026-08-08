/**
 * Fragmentos da Eternidade
 * Dados de desbloqueio de informações de personagens.
 *
 * Cada registro representa uma informação que pode ser
 * revelada progressivamente durante a narrativa.
 */

import type { UnlockId } from "./unlocks";

export interface CharacterUnlockData {
    unlockId: UnlockId;

    section:
        | "identity"
        | "world"
        | "biography"
        | "abilities"
        | "extras";

    field: string;

    value: string;
}