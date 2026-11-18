import type { Scene } from "../../../../types/chapter";
// Importação de vídeos da cena 2;
import video1Local from "./Videos/Cap1cena2video1.mp4";

export const cena2: Scene = {
  id: "chap1-cena2",
  title: "A resposta do oceano",
  order: 2,
  cutscenes: [
    {
      id: "chap1-cena2-cut1",
      title: "A resposta do oceano",
      order: 1,
      content: `Voltando-se para a direção contrária às ruínas, Caleb caminhou alguns metros e chegou a uma praia cercada por restos de navios completamente enferrujados, como se estivessem ali há muito tempo. Andou pela areia por alguns minutos. Ainda sem lembranças, sem memórias, sem rumo.

{media:olhando-oceano}

Em um pedaço de destroço, ele avistou um símbolo coberto por sujeira e ferrugem. Ao limpar a marca e vê-la claramente, uma estranha sensação de agonia e tristeza o atingiu. Ele não sabia o motivo, mas aquele aperto no peito acendeu uma vontade imensa de descobrir o que aquilo significava. Uma necessidade de recuperar sua memória.`,
      media: [
        {
          id: "olhando-oceano",
          type: "video",
          src: video1Local,
        },
      ],
    },
  ],
};
