/**
 * Fragmentos da Eternidade
 * Resolver central de desbloqueios.
 *
 * Converte IDs de desbloqueio em dados reais
 * registrados nos catálogos do projeto.
 *
 * Exemplos:
 *
 * symbol.government
 * → Insígnia do Governo Mundial
 *
 * character.caleb
 * → Caleb
 *
 * IDs ainda não cadastrados retornam null.
 */

import { symbols } from "../../data/symbols";
import { caleb } from "../../data/characters/caleb";

import type { SymbolData } from "../../data/symbols";
import type { Character } from "../../types/character";


/* =====================================
   TIPOS
===================================== */

export type ResolvedUnlock =
    | SymbolData
    | Character
    | null;


/* =====================================
   RESOLVER PRINCIPAL
===================================== */

export function resolveUnlock(
    unlockId: string
): ResolvedUnlock {

    if (!unlockId) {
        return null;
    }


    /*
     * Apenas o primeiro ponto separa
     * a categoria do restante do ID.
     *
     * Exemplos:
     *
     * character.caleb
     * → character / caleb
     *
     * lore.caleb.origin
     * → lore / caleb.origin
     *
     * creature.unknown.001
     * → creature / unknown.001
     */

    const separatorIndex =
        unlockId.indexOf(".");


    if (separatorIndex === -1) {
        return null;
    }


    const category =
        unlockId.substring(
            0,
            separatorIndex
        );


    switch (category) {

        /* =============================
           PERSONAGENS
        ============================= */

        case "character":

            return resolveCharacter(
                unlockId
            );


        /* =============================
           SÍMBOLOS
        ============================= */

        case "symbol":

            return resolveSymbol(
                unlockId
            );


        /* =============================
           FUTURAS CATEGORIAS
        ============================= */

        case "creature":

        case "location":

        case "fragment":

        case "lore":

        case "weapon":

        case "power":

        case "clan":

        case "guild":

        case "government":

        case "achievement":

            /*
             * Essas categorias ainda não
             * possuem catálogo próprio.
             *
             * Quando os arquivos data/
             * correspondentes forem criados,
             * seus resolvers serão adicionados
             * aqui.
             */

            return null;


        default:

            return null;
    }
}


/* =====================================
   PERSONAGEM
===================================== */

function resolveCharacter(
    unlockId: string
): Character | null {

    /*
     * Por enquanto Caleb é o único
     * personagem cadastrado.
     *
     * Quando Kylo, Nyx, Orion etc.
     * forem adicionados, basta incluí-los
     * no catálogo de personagens.
     */

    const characterCatalog:
        Character[] = [

        caleb,

    ];


    return (
        characterCatalog.find(
            (character: Character) =>
                character.unlockId === unlockId
        )
        ?? null
    );
}


/* =====================================
   SÍMBOLO
===================================== */

function resolveSymbol(
    unlockId: string
): SymbolData | null {

    return (
        symbols.find(
            (symbol: SymbolData) =>
                symbol.unlock === unlockId
        )
        ?? null
    );
}