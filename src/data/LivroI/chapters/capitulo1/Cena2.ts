import type { Scene } from "../../../../types/chapter";
import { Unlocks } from "../../../../types/unlocks";

// Importações dos vídeos locais da Cena 2
import video1Local from "./Videos/cap1cena2video1.mp4";
import video2Local from "./Videos/Cap1cena2video2.mp4";
import video3Local from "./Videos/Cap1cena2video3.mp4";

export const cena2: Scene = {
  id: "chap1-cena2",
  title: "O Despertar da Chama",
  order: 2,
  cutscenes: [
    {
      id: "chap1-cena2-cut1",
      title: "O Despertar da Chama",
      order: 1,
      content: `Não havia sinais de vida. Nenhum som. Apenas abandono.

Sua mente estava vazia. Nada vinha. Nenhuma memória. Nenhum rosto. Nenhuma história. Apenas um nome.

— Caleb…

{media:caleb-sentando}

Ele levou a mão direita ao rosto — e então congelou.

Chamas. Uma chama azul-escura envolvendo sua mão, pulsando de forma silenciosa, como se estivesse viva. O fogo se movia com suavidade, quase como uma respiração. Mas não queimava.

{media:chama-azul}

Caleb arregalou os olhos, esperando dor… mas ela não veio. Em vez disso, sentiu algo diferente. Calor. Um calor profundo, que não feriu — pelo contrário, parecia preencher seu corpo com uma energia estranha, quase reconfortante. A chama começou a se dissipar lentamente, como se respondesse ao seu estado.

Confuso, ele se levantou com cuidado. Seus olhos voltaram a explorar o lugar. A cidade não tinha saída visível. Ao redor, uma enorme formação rochosa cercava tudo — alta, contínua, sufocante. Parecia uma montanha.

{media:explorando-ruinas}`,
      media: [
        {
          id: "caleb-sentando",
          type: "video",
          src: video1Local,
        },
        {
          id: "chama-azul",
          type: "video",
          src: video2Local,
        },
        {
          id: "explorando-ruinas",
          type: "video",
          src: video3Local,
        },
      ],
      characters: [Unlocks.Characters.Caleb],
    },
  ],
};
