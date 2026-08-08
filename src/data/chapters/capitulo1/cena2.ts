import type { Scene } from "../../../types/chapter";
import { Unlocks } from '../../../types/unlocks';
import cap1cena2cut1 from "../../../assets/chapters/chapter1/cena2/cap1cena2cut1.mp4";
import cap1cena2cut2 from "../../../assets/chapters/chapter1/cena2/cap1cena2cut2.mp4";
import cap1cena2cut3 from "../../../assets/chapters/chapter1/cena2/cap1cena2cut3.mp4";
import cap1cena2cut4 from "../../../assets/chapters/chapter1/cena2/cap1cena2cut4.mp4";


export const chap1cena2: Scene = {

    id: "chap1-cena2",

    title: "O despertar da curiosidade",

    order: 1,



    cutscenes: [ 
        {
            id: "chap1-cena2-cut1",


            title: "Uma ilha deserta",



            content: ` Voltando-se para a direção contrária às ruínas
            Caleb caminhou alguns metros e chegou a uma praia cercada por restos de navios completamente enferrujados.
            Como se estivessem ali há muito tempo.
            Andou pela areia por alguns minutos. 
            {media:cap1cena2cut1}
            Ainda sem lembranças, sem memórias, sem rumo. `,

            order: 1,

            media: [
                {
                    id: "cap1cena2cut1",
                    type: "video",
                    src: cap1cena2cut1
                }   
            ],
            
        characters: [

                "caleb",

            ],

        },

        {

            id: "chap1-cena2-cut2",



            title: "O Símbolo nos destroços",



            content: ` Em um pedaço de destroço, ele avistou um símbolo, 
            Coberto por sujeira e ferrugem.
            Ao limpar a marca e vê-la claramente, uma estranha sensação de agonia e tristeza o atingiu. 
            {media:cap1cena2cut2}
            Ele não sabia o motivo, mas aquele aperto no peito acendeu uma vontade imensa de descobrir o que aquilo significava. 
            Uma necessidade de recuperar sua memória.`,
            
            
            
            order: 2,

            media: [
                {
                    id : "cap1cena2cut2",
                    type : "video",
                    src: cap1cena2cut2
                }   
            ], 
                characters: [

                "caleb",

            ],
unlocks: {

    symbols: [
        Unlocks.Symbols.Government,
    ],

   reward: {

    type: "symbol",

    id: Unlocks.Symbols.Government,

    name: "Símbolo do Governo Mundial",

}

},
        },

        {
            id: "chap1-cena2-cut3",

            title: "Em busca de quem eu sou",

            content: `Caminhando mais adiante pela praia, Caleb avistou um pequeno veleiro,
             balançando suavemente sobre as ondas rasas. A embarcação permanecia presa,
              entre ferragens retorcidas e destroços de antigos navios destruídos, 
              como se o mar tivesse decidido preservá-la em meio ao caos.

            Ele se aproximou, examinando o casco.
            Apesar dos arranhões e do desgaste provocado pelo tempo, 
            o veleiro parecia firme o suficiente para suportar uma viagem curta.

            Sem perder tempo, Caleb afastou as ferragens que o mantinham aprisionado, 
            empurrou a embarcação de volta ao mar e saltou a bordo. 
            O vento soprou em sua direção quando ele ergueu as velas, 
            fazendo o tecido estalar. 
            Lentamente, o pequeno barco começou a se afastar da costa, 
            levando-o rumo ao desconhecido.
            {media:cap1cena2cut3}`,
            order: 3,

            media: [ 
                { 
                    id: "cap1cena2cut3",
                    type: "video",
                    src: cap1cena2cut3
                }
            ],
            characters: [
                "caleb",
            ],
        },
            {
                id: "chap1-cena2-cut4",

                title: "O que me espera?",     

                content: `O veleiro começou a navegar. 
                Ao olhar para o horizonte, Caleb viu uma tempestade massiva se aproximando. 
                Ele não tinha nada a perder. Continuou em frente.
                No oceano profundo, a tempestade desabou. 
                As ondas ficaram mais fortes, mas o pequeno veleiro demonstrou uma resistência inacreditável, 
                cortando a água firme, como se estivesse determinado a cumprir sua missão. 
                A tempestade não dava trégua, mas Caleb recusava-se a recuar.
                Foi então que, através da cortina de chuva no horizonte, 
                ele avistou uma sombra colossal no oceano. Um enorme navio de guerra, c
                ompletamente imóvel, sendo apenas levado pela correnteza.
                Apreensivo, Caleb aproximou-se. 
                Não havia sinal de movimento ou vida. 
                Ele prendeu seu veleiro às correntes do grande navio e subiu a bordo.
                O convés estava completamente abandonado, 
                Caleb caminhou até ali, mas seus olhos travaram no alto.
                Entalhado no mastro, estava o mesmo símbolo que encontrara nas ferragens da ilha onde acordou.

                {media:cap1cena2cut4}
                — Não pode ser coincidência... — resmungou.`,

                order: 4,

                media: [
                    {
                        id: "cap1cena2cut4",
                        type: "video",
                        src: cap1cena2cut4
                    }
                ],
            characters: [
                "caleb",
            ],

            },
        ],
};