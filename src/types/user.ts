/**
 * Fragmentos da Eternidade
 * Estruturas de dados do jogador.
 *
 * Este arquivo define:
 *
 * - perfil do jogador;
 * - progresso de leitura;
 * - jornada descoberta;
 * - conteúdos desbloqueados;
 * - configurações pessoais.
 *
 * Os dados são persistidos pelo PlayerService
 * no Firestore.
 */

/* =====================================
   PERFIL
===================================== */

export interface UserProfile {
    displayName: string;
    email: string;
    photoURL: string;
    createdAt: string;
}


/* =====================================
   PROGRESSO DE LEITURA
===================================== */

export interface ReadingProgress {
    currentChapter: number;
    currentScene: number;
    currentCutscene: number;
}


/* =====================================
   JORNADA
===================================== */

/**
 * Registros descobertos durante a leitura.
 *
 * Estes arrays representam a jornada narrativa
 * do jogador e não necessariamente todo o conteúdo
 * existente no universo.
 */
export interface ReaderJourney {
    discoveredCharacters: string[];
    discoveredLocations: string[];
    discoveredCreatures: string[];
    discoveredFragments: string[];
    discoveredSymbols: string[];
    discoveredLore: string[];
    discoveredChapters: string[];
    discoveredScenes: string[];
    discoveredPowers: string[];
    discoveredWeapons: string[];
    discoveredClans: string[];
    discoveredGuilds: string[];
    discoveredGovernments: string[];
    discoveredAchievements: string[];
}


/* =====================================
   DESBLOQUEIOS DE CONTEÚDO
===================================== */

/**
 * Registro persistente dos conteúdos desbloqueados.
 *
 * Exemplo:
 *
 * character: {
 *     "character.caleb": true
 * }
 *
 * symbol: {
 *     "symbol.government": true
 * }
 *
 * creature: {
 *     "creature.unknown.001": true
 * }
 */
export interface ContentUnlocks {
    character: Record<string, boolean>;

    chapter: Record<string, boolean>;

    scene: Record<string, boolean>;

    location: Record<string, boolean>;

    creature: Record<string, boolean>;

    fragment: Record<string, boolean>;

    symbol: Record<string, boolean>;

    lore: Record<string, boolean>;

    achievement: Record<string, boolean>;

    clan: Record<string, boolean>;

    weapon: Record<string, boolean>;

    power: Record<string, boolean>;

    guild: Record<string, boolean>;

    government: Record<string, boolean>;
}


/* =====================================
   CONFIGURAÇÕES
===================================== */

export interface UserSettings {
    theme?: string;
    language?: string;
    notifications?: boolean;
}


/* =====================================
   DADOS COMPLETOS DO JOGADOR
===================================== */

export interface PlayerData {
    profile: UserProfile;

    progress: ReadingProgress;

    journey: ReaderJourney;

    unlocks: ContentUnlocks;

    settings: UserSettings;
}