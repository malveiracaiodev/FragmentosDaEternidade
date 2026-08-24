/**
 * Fragmentos da Eternidade (Eryon Chronicles)
 * Tipos estruturais do sistema narrativo.
 *
 * Define livros, capítulos, cenas, cutscenes, mídias e
 * os registros que podem ser descobertos durante
 * a leitura da história.
 */

import type { UnlockId } from "./unlocks";

/* =====================================
   LIVRO (NOVO: Agrupador de Capítulos)
===================================== */

export interface Book {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    status: "active" | "locked" | "coming_soon";
    chapters: Chapter[];
}

/* =====================================
   CAPÍTULO
===================================== */

export interface Chapter {
    id: string | number;
    number: number;
    title: string;
    description: string;
    status: "available" | "coming_soon" | "locked";
    scenes: Scene[];
}

/* =====================================
   CENA
===================================== */

export interface Scene {
    id: string;
    title: string;
    order: number;
    duration?: string; // Ex: "Leitura / Interativo" ou "5 min"
    isUnlocked?: boolean;
    cutscenes: Cutscene[];
}

/* =====================================
   CUTSCENE
===================================== */

export interface Cutscene {
    id: string;
    title: string;
    content: string;
    order: number;
    media?: Media[];
    characters?: UnlockId[];
    unlocks?: CutsceneUnlocks;
}

/* =====================================
   MÍDIA
===================================== */

export interface Media {
    id: string;
    type: "video" | "image" | "audio";
    src: string;
    thumbnail?: string;
    alt?: string;
}

/* =====================================
   DESBLOQUEIOS DA HISTÓRIA
===================================== */

export interface CutsceneUnlocks {
    ids?: UnlockId[];

    characters?: UnlockId[];
    locations?: UnlockId[];
    clans?: UnlockId[];
    weapons?: UnlockId[];
    powers?: UnlockId[];
    guilds?: UnlockId[];
    governments?: UnlockId[];
    symbols?: UnlockId[];
    items?: UnlockId[];
    events?: UnlockId[];
    lore?: UnlockId[];
    fragments?: UnlockId[];
    achievements?: UnlockId[];

    /**
     * Registro principal apresentado
     * ao final da cutscene.
     */
    reward?: UnlockReward;
}

/* =====================================
   RECOMPENSA PRINCIPAL
===================================== */

export interface UnlockReward {
    type:
        | "character"
        | "location"
        | "power"
        | "item"
        | "symbol"
        | "weapon"
        | "fragment"
        | "achievement"
        | "clan"
        | "guild"
        | "lore"
        | "government"
        | "creature";

    id: UnlockId;
    name: string;
}