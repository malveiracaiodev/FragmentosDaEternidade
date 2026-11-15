import type { Scene } from "../../../../types/chapter";
import { Unlocks } from "../../../../types/unlocks";

// Importação dos vídeos locais da Cena 1 e Cena 2 unificadas
import video1Cena1Local from "./Videos/cap1cena1video2.mp4";
import video1Cena2Local from "./Videos/cap1cena2video1.mp4";
import video2Cena2Local from "./Videos/Cap1cena2video2.mp4";
import video3Cena2Local from "./Videos/Cap1cena2video3.mp4";

export const cena1: Scene = {
  id: "chap1-cena1",
  title: "O Despertar nas Ruínas",
  order: 1,
  cutscenes: [
    {
      id: "chap1-cena1-cut1",
      title: "O Despertar nas Ruínas",
      order: 1,
      content: `O silêncio era absoluto.

O rapaz abriu os olhos lentamente, como se estivesse emergindo de um sonho profundo.

A luz tocava seu rosto de forma suave, revelando um cenário morto ao seu redor.

{media:despertar}

Ele permaneceu ali por alguns segundos, deitado, tentando entender onde estava — ou até mesmo quem era.

Com esforço, sentou-se.

Seus olhos percorreram o ambiente: construções antigas, quebradas, consumidas pelo tempo.

Ruínas de uma cidade que claramente haviam sido palco de algo grandioso… e destrutivo.

{media:olhando-ao-redor}

Não havia sinais de vida. Nenhum som. Apenas abandono.

Sua mente estava vazia. Nada vinha. Nenhuma memória. Nenhum rosto. Nenhuma história. Apenas um nome.

— Caleb…

{media:caleb-sentando}

Ele levou a mão direita ao rosto — e então congelou.

Chamas. Uma chama azul-escura envolvendo sua mão, pulsando de forma silenciosa, como se estivesse viva. O fogo se movia com suavidade, quase como uma respiração. Mas não queimava.

{media:chama-azul}

Caleb arregalou os olhos, esperando dor… mas ela não veio. Em vez disso, sentiu algo diferente. Calor. Um calor profundo, que não feriu — pelo contrário, parecia preencher seu corpo com uma energia estranha, quase reconfortante. A chama começou a se dissipar lentamente, como se respondesse ao seu estado.

Confuso, ele se levantou com cuidado. Seus olhos voltaram a explorar o lugar. A cidade não tinha saída visível. Ao redor, uma enorme formação rochosa cercava tudo — alta, contínua, sufocante. Parecia uma montanha.

{media:explorando-ruinas}

> **✨ Personagem Desbloqueado: Caleb**`,
      media: [
        {
          id: "despertar",
          type: "video",
          src: "https://malveiracaiodev.github.io/Fragmentos-da-eternidade/capitulo1/videos/Despertar.mp4",
        },
        {
          id: "olhando-ao-redor",
          type: "video",
          src: video1Cena1Local,
        },
        {
          id: "caleb-sentando",
          type: "video",
          src: video1Cena2Local,
        },
        {
          id: "chama-azul",
          type: "video",
          src: video2Cena2Local,
        },
        {
          id: "explorando-ruinas",
          type: "video",
          src: video3Cena2Local,
        },
      ],
      characters: [Unlocks.Characters.Caleb],
    },
  ],
};
