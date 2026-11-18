import type { Scene } from "../../../../types/chapter";
// Importação do primeiro vídeo local (o restante usa os links da Release do GitHub)
import video1Local from "./Videos/Cap1cena2video1.mp4";

export const cena2: Scene = {
  id: "chap1-cena2",
  title: "A busca por respostas",
  order: 2,
  cutscenes: [
    {
      id: "chap1-cena2-cut1",
      title: "A busca por respostas",
      order: 1,
      content: `Voltando-se para a direção contrária às ruínas, Caleb caminhou alguns metros e chegou a uma praia cercada por restos de navios completamente enferrujados, como se estivessem ali há muito tempo. Andou pela areia por alguns minutos. Ainda sem lembranças, sem memórias, sem rumo.

{media:olhando-oceano}

Em um pedaço de destroço, ele avistou um símbolo coberto por sujeira e ferrugem. Ao limpar a marca e vê-la claramente, uma estranha sensação de agonia e tristeza o atingiu. Ele não sabia o motivo, mas aquele aperto no peito acendeu uma vontade imensa de descobrir o que aquilo significava. Uma necessidade de recuperar sua memória.

Caminhando mais à frente na praia, ele viu um pequeno veleiro, ainda boiando, preso a algumas ferragens dos navios destruídos. O barco era pequeno, mas resistente o suficiente para uma viagem curta. Caleb removeu as ferragens, empurrou o veleiro para o mar e abriu as velas.

O veleiro começou a navegar. Ao olhar para o horizonte, Caleb viu uma tempestade massiva se aproximando. Ele não tinha nada a perder. Continuou em frente.

No oceano profundo, a tempestade desabou. As ondas ficaram mais fortes, mas o pequeno veleiro demonstrou uma resistência inacreditável, cortando a água firme, como se estivesse determinado a cumprir sua missão. A tempestade não dava trégua, mas Caleb recusava-se a recuar.

{media:video-veleiro-tempestade}

Foi então que, através da cortina de chuva no horizonte, ele avistou uma sombra colossal no oceano. Um enorme navio de guerra, completamente imóvel, sendo apenas levado pela correnteza.

Apreensivo, Caleb aproximou-se. Não havia sinal de movimento ou vida. Ele prendeu seu veleiro às correntes do grande navio e subiu a bordo.

{media:video-navio-guerra}`,
      media: [
        {
          id: "olhando-oceano",
          type: "video",
          src: video1Local,
        },
        {
          id: "video-veleiro-tempestade",
          type: "video",
          src: "https://github.com/malveiracaiodev/FragmentosDaEternidade/releases/download/Cap1Videos/Cap1cena2video2.mp4",
        },
        {
          id: "video-navio-guerra",
          type: "video",
          src: "https://github.com/malveiracaiodev/FragmentosDaEternidade/releases/download/Cap1Videos/cap1cena2video3.mp4",
        },
      ],
    },
  ],
};
