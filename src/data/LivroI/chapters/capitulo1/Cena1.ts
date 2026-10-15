import type { Scene } from "../../../types/chapter";
import { Unlocks } from "../../../types/unlocks";

// Importação local do segundo vídeo
import video2Local from "./Videos/cap1cena1video2.mp4";

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

{media:olhando-ao-redor}`,
      media: [
        {
          id: "despertar",
          type: "video",
          src: "https://malveiracaiodev.github.io/Fragmentos-da-eternidade/capitulo1/videos/Despertar.mp4",
        },
        {
          id: "olhando-ao-redor",
          type: "video",
          src: video2Local,
        },
      ],
      characters: [Unlocks.Characters.Caleb],
    },
  ],
};
