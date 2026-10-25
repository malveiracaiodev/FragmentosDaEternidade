import type { Scene } from "../../../../types/chapter";
import { Unlocks } from "../../../../types/unlocks";

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

{media:caleb-chama}

Ele levou a mão direita ao rosto — e então congelou.

Chamas. Uma chama azul-escura envolvendo sua mão, pulsando de forma silenciosa, como se estivesse viva. O fogo se movia com suavidade, quase como uma respiração. Mas não queimava.

{media:chama-azul}`,
      media: [
        {
          id: "caleb-chama",
          type: "iframe", // Alterado para iframe para suportar o player do YouTube
          src: "https://www.youtube.com/embed/CaxG0Th1QjA",
        },
        {
          id: "chama-azul",
          type: "video",
          src: "URL_OU_IMPORT_DO_SEGUNDO_VIDEO_AQUI",
        },
      ],
      characters: [Unlocks.Characters.Caleb],
    },
  ],
};
