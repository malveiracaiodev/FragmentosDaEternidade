/**
 * Fragmentos da Eternidade
 * Registros de Lore conhecidos atualmente.
 *
 * Informações ainda não reveladas permanecem como
 * "???????????????????????" até que a narrativa
 * desbloqueie novos fragmentos.
 */

import type { LoreEntry } from "../types/lore";
import { Unlocks, type UnlockId } from "../types/unlocks"; // Adicione o UnlockId aqui

export const lore: LoreEntry[] = [
    {
        id: "caleb_origin",

        unlockId: Unlocks.Lore.CalebOrigin,

        name: "Origem de Caleb",

        title: "A origem do Portador do Fragmento Ômega",

        category: "mystery",

        description:
            "A origem de Caleb permanece desconhecida.",

        content:
            "????????????????????????????????",

        status: "unknown",

        firstAppearance:
            "Capítulo 1 - Cena 1",

        relatedCharacters: [
            Unlocks.Characters.Caleb,
        ],
    },

    {
        id: "caleb_power",

        unlockId: Unlocks.Lore.CalebPower,

        name: "Fragmento Ômega",

        title: "O poder desconhecido",

        category: "power",

        description:
            "Pouco se sabe sobre o poder presente no Fragmento Ômega.",

        content:
            "Fragmento desconhecido.",

        status: "unknown",

        firstAppearance:
            "Capítulo 1 - Cena 1",

        relatedCharacters: [
            Unlocks.Characters.Caleb,
        ],
    },

    {
        id: "caleb_history",

        unlockId: Unlocks.Lore.CalebHistory,

        name: "História de Caleb",

        title: "Fragmentos de uma vida desconhecida",

        category: "history",

        description:
            "A história de Caleb ainda não foi completamente revelada.",

        content:
            "????????????????????????????????",

        status: "unknown",

        firstAppearance:
            "Capítulo 1 - Cena 1",

        relatedCharacters: [
            Unlocks.Characters.Caleb,
        ],
    },
];

export function getLoreByUnlock(
    unlockId: UnlockId
): LoreEntry | undefined {
    return lore.find(
        entry => entry.unlockId === unlockId
    );
}

export function getLoreById(
    id: string
): LoreEntry | undefined {
    return lore.find(
        entry => entry.id === id
    );
}