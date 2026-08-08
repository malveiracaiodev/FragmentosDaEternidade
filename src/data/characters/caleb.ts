import type { Character } from "../../types/character";
import { Unlocks } from "../../types/unlocks";

import CalebImage from "../../assets/personagenspages/CalebCena1.png";
import CalebVideo from "../../assets/personagenspages/Calebbanner.mp4";


export const caleb: Character = {

    id: "caleb",

    unlockId: Unlocks.Characters.Caleb,


    /*
    =====================================
    IDENTIDADE
    =====================================
    */

    identity: {

        name: "Caleb",

        title:
            "O Portador do Fragmento Ômega",

        aliases: [],

    },


    /*
    =====================================
    MÍDIA
    =====================================
    */

    media: {

        portrait: CalebImage,

        banner: CalebVideo,

        bannerType: "video",

        splash: "",

        theme: "",

        gallery: [],

    },


    /*
    =====================================
    ATRIBUTOS
    =====================================
    */

    attributes: {

        age:
            "???",

        height:
            "1,78 m",

        weight:
            "???",

        gender:
            "Masculino",

        race:
            "???",

    },


    /*
    =====================================
    MUNDO
    =====================================
    */

    world: {

        clan:
            "???",

        guild:
            "???",

        faction:
            "???",

        origin:
            "???",

        currentLocation:
            "???",

        occupation:
            "???",

        status:
            "Vivo",

    },


    /*
    =====================================
    BIOGRAFIA
    =====================================
    */

    biography: {

        summary:

            "Um jovem cuja vida muda completamente ao entrar em contato com o Fragmento Ômega.",


        biography:

`Alguns fragmentos da história de Caleb permanecem ocultos.

Muito pouco se sabe sobre seu passado, sua origem ou os acontecimentos que o conduziram até o Fragmento Ômega.

À medida que novos fragmentos da história forem descobertos, informações sobre Caleb serão reveladas.

Por enquanto, seu passado permanece como um fragmento desconhecido.`,


        personality:

            "Fragmento desconhecido.",


        appearance:

            "Jovem de cabelos escuros e olhar determinado.",

    },


    /*
    =====================================
    HABILIDADES
    =====================================
    */

    abilities: {

        powers: [

            "Fragmento Ômega — informações desconhecidas."

        ],


        weapons: [

            "Fragmento desconhecido."

        ],


        techniques: [

            "Fragmento desconhecido."

        ],


        skills: [

            "Fragmento desconhecido."

        ],

    },


    /*
    =====================================
    EXTRAS
    =====================================
    */

    extras: {

        curiosities: [

            "Sua ligação com o Fragmento Ômega ainda não foi completamente compreendida.",

            "Existem informações sobre seu passado que permanecem ocultas.",

        ],


        quotes: [],

    },


    /*
    =====================================
    HISTÓRIA
    =====================================
    */

    story: {

        firstAppearance:

            "Capítulo 1 - Cena 1",


        appearances: [

            "Capítulo 1",

        ],


        chaptersUnlocked: [

            Unlocks.Chapters.Chapter1,

        ],

    },

};
