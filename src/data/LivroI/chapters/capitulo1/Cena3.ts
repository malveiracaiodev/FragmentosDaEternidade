import type { Scene } from "../../../../types/chapter";
// Importação dos vídeos locais da Cena 3
import video1Local from "./Videos/Cap1cena3video1.mp4";
import video2Local from "./Videos/Cap1cena3video2.mp4";

export const cena3: Scene = {
  id: "chap1-cena3",
  title: "A Cidade Afundada",
  order: 3,
  cutscenes: [
    {
      id: "chap1-cena3-cut1",
      title: "A Cidade Afundada",
      order: 1,
      content: `Sem pensar muito, Caleb caminhou até sua base. Vinhas grossas se estendiam pelas pedras, como se a própria natureza tentasse engolir aquele lugar esquecido. Ele começou a escalar. O esforço era grande, mas algo dentro dele o impulsionava. Como se aquela energia ainda pulsasse em seu corpo.

{media:caleb-escalando}

Após alguns minutos, alcançou o topo. E então… parou. Virou-se lentamente. Seu olhar encontrou a cidade novamente — mas, agora, de cima.

E foi ali que percebeu. Não era uma montanha. Nunca foi. A cidade… havia sido empurrada para baixo. Afundada. Como uma cicatriz no mundo.

Voltando-se para a direção contrária às ruínas, Caleb caminhou alguns metros e chegou a uma praia cercada por restos de navios completamente enferrujados, como se estivessem ali há muito tempo. Andou pela areia por alguns minutos. Ainda sem lembranças, sem memórias, sem rumo.

Em um pedaço de destroço, ele avistou um símbolo coberto por sujeira e ferrugem. Ao limpar a marca e vê-la claramente, uma estranha sensação de agonia e tristeza o atingiu. Ele não sabia o motivo, mas aquele aperto no peito acendeu uma vontade imensa de descobrir o que aquilo significava. Uma necessidade de recuperar sua memória.`,
 {media:caleb-praia-navios}    
      media: [
        {
          id: "caleb-escalando",
          type: "video",
          src: video1Local,
        },
        {
          id: "caleb-praia-navios",
          type: "video",
          src: video2Local,
        },
      ],
      characters: [],
    },
  ],
};
