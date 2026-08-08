/**
 * Fragmentos da Eternidade
 * Estrutura dos registros de personagens.
 *
 * Um personagem pode possuir informações desconhecidas
 * até que novos fragmentos da história sejam descobertos.
 */

import type { UnlockId } from "./unlocks";

/* =====================================
   PERSONAGEM
===================================== */

export interface Character {
    id: string;
    unlockId: UnlockId;

    identity: CharacterIdentity;
    media: CharacterMedia;
    attributes: CharacterAttributes;
    world: CharacterWorld;
    biography: CharacterBiography;
    abilities: CharacterAbilities;
    extras: CharacterExtras;
    story: CharacterStory;
}

/* =====================================
   IDENTIDADE
===================================== */

export interface CharacterIdentity {
    name: string;
    title: string;
    aliases: string[];
}

/* =====================================
   MÍDIA
===================================== */

export interface CharacterMedia {
    portrait: string;
    banner: string;
    bannerType?: "image" | "video";
    splash: string;
    theme: string;
    gallery: string[];
}

/* =====================================
   ATRIBUTOS
===================================== */

export interface CharacterAttributes {
    age: number | string;
    height: string;
    weight: string;
    gender: string;
    race: string;
}

/* =====================================
   MUNDO
===================================== */

export interface CharacterWorld {
    clan: string;
    guild: string;
    faction: string;
    origin: string;
    currentLocation: string;
    occupation: string;
    status: string;
}

/* =====================================
   BIOGRAFIA
===================================== */

export interface CharacterBiography {
    summary: string;
    biography: string;
    personality: string;
    appearance: string;
}

/* =====================================
   HABILIDADES
===================================== */

export interface CharacterAbilities {
    powers: string[];
    weapons: string[];
    techniques: string[];
    skills: string[];
}

/* =====================================
   EXTRAS
===================================== */

export interface CharacterExtras {
    curiosities: string[];
    quotes: string[];
}

/* =====================================
   HISTÓRIA
===================================== */

export interface CharacterStory {
    firstAppearance: string;
    lastAppearance?: string;
    appearances: string[];
    chaptersUnlocked: UnlockId[];
}