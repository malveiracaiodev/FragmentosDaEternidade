/**
 * Fragmentos da Eternidade
 * IDs utilizados pelo sistema de desbloqueio.
 *
 * Estes IDs são a ligação entre:
 *
 * - narrativa;
 * - progresso do jogador;
 * - Firestore;
 * - personagens;
 * - locais;
 * - criaturas;
 * - símbolos;
 * - fragmentos;
 * - lore;
 * - conquistas.
 *
 * IMPORTANTE:
 * Depois que um ID for utilizado em produção,
 * ele não deve ser alterado.
 */

export const Unlocks = {
    /* =====================================
       PERSONAGENS
    ===================================== */

    Characters: {
        Caleb:
            "character.caleb",

        Kylo:
            "character.kylo",

        Nyx:
            "character.nyx",

        Orion:
            "character.orion",
    },


    /* =====================================
       CAPÍTULOS
    ===================================== */

    Chapters: {
        Chapter1:
            "chapter.1",

        Chapter2:
            "chapter.2",

        Chapter3:
            "chapter.3",

        Chapter4:
            "chapter.4",
    },


    /* =====================================
       CENAS
    ===================================== */

    Scenes: {
        Chapter1Scene1:
            "scene.chapter1.scene1",

        Chapter1Scene2:
            "scene.chapter1.scene2",

        Chapter1Scene3:
            "scene.chapter1.scene3",

        Chapter1Scene4:
            "scene.chapter1.scene4",
    },


    /* =====================================
       LOCALIZAÇÕES
    ===================================== */

    Locations: {
        FirstIsland:
            "location.first_island",

        WorldGovernment:
            "location.world_government",

        ForgottenCity:
            "location.forgotten_city",

        SunkenCity:
            "location.sunken_city",
    },


    /* =====================================
       CRIATURAS
    ===================================== */

    Creatures: {
        Unknown001:
            "creature.unknown.001",
    },


    /* =====================================
       FRAGMENTOS
    ===================================== */

    Fragments: {
        Fragment001:
            "fragment.001",
    },


    /* =====================================
       SÍMBOLOS
    ===================================== */

    Symbols: {
        Government:
            "symbol.government",
    },


    /* =====================================
       CONQUISTAS
    ===================================== */

    Achievements: {
        FirstLogin:
            "achievement.first_login",

        FirstChapter:
            "achievement.first_chapter",
    },


    /* =====================================
       CLÃS
    ===================================== */

    Clans: {
        // Futuros clãs
    },


    /* =====================================
       ARMAS
    ===================================== */

    Weapons: {
        // Futuras armas
    },


    /* =====================================
       PODERES
    ===================================== */

    Powers: {
        // Futuros poderes
    },


    /* =====================================
       GUILDAS
    ===================================== */

    Guilds: {
        // Futuras guildas
    },


    /* =====================================
       GOVERNO E ORGANIZAÇÕES
    ===================================== */

    Governments: {
        WorldGovernment:
            "government.world",
    },


    /* =====================================
       LORE
    ===================================== */

    Lore: {
        ForgottenCity:
            "lore.forgotten_city",

        SunkenCity:
            "lore.sunken_city",

        CalebOrigin:
            "lore.caleb.origin",

        CalebPower:
            "lore.caleb.power",

        CalebHistory:
            "lore.caleb.history",
    },
} as const;


/* =====================================
   EXTRAÇÃO DOS IDs
===================================== */

type ValueOf<T> =
    T[keyof T];


/* =====================================
   ID DE DESBLOQUEIO
===================================== */

/**
 * União de todos os IDs registrados
 * no sistema de desbloqueio.
 */
export type UnlockId =
    | ValueOf<typeof Unlocks.Characters>
    | ValueOf<typeof Unlocks.Chapters>
    | ValueOf<typeof Unlocks.Scenes>
    | ValueOf<typeof Unlocks.Locations>
    | ValueOf<typeof Unlocks.Creatures>
    | ValueOf<typeof Unlocks.Fragments>
    | ValueOf<typeof Unlocks.Symbols>
    | ValueOf<typeof Unlocks.Achievements>
    | ValueOf<typeof Unlocks.Clans>
    | ValueOf<typeof Unlocks.Weapons>
    | ValueOf<typeof Unlocks.Powers>
    | ValueOf<typeof Unlocks.Guilds>
    | ValueOf<typeof Unlocks.Governments>
    | ValueOf<typeof Unlocks.Lore>;