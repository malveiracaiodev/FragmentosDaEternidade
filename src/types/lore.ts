/**
 * Fragmentos da Eternidade
 * Estrutura dos registros de Lore.
 *
 * O sistema de Lore representa informações descobertas
 * durante a narrativa. Um registro pode começar completamente
 * desconhecido e ser revelado gradualmente conforme o leitor
 * avança pela história.
 */

import type { UnlockId } from "./unlocks";

/* =====================================
   REGISTRO DE LORE
===================================== */

export interface LoreEntry {
    id: string;

    unlockId: UnlockId;

    name: string;

    title?: string;

    category: LoreCategory;

    description: string;

    content: string;

    status: LoreStatus;

    image?: string;

    firstAppearance?: string;

    relatedCharacters?: UnlockId[];

    relatedLocations?: UnlockId[];

    relatedSymbols?: UnlockId[];

    relatedCreatures?: UnlockId[];

    relatedFragments?: UnlockId[];
}

/* =====================================
   CATEGORIAS
===================================== */

export type LoreCategory =
    | "history"
    | "world"
    | "government"
    | "power"
    | "event"
    | "fragment"
    | "mystery";

/* =====================================
   STATUS
===================================== */

export type LoreStatus =
    | "unknown"
    | "partial"
    | "revealed";

/* =====================================
   REGISTRO DESCONHECIDO
===================================== */

export interface UnknownLoreEntry extends LoreEntry {
    status: "unknown";
}

/* =====================================
   REGISTRO PARCIALMENTE REVELADO
===================================== */

export interface PartialLoreEntry extends LoreEntry {
    status: "partial";
}

/* =====================================
   REGISTRO COMPLETAMENTE REVELADO
===================================== */

export interface RevealedLoreEntry extends LoreEntry {
    status: "revealed";
}