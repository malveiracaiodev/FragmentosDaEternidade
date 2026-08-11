import type { Scene } from "../../../types/chapter";
import { Unlocks } from "../../../types/unlocks";

export const chap1cena1: Scene = {
  id: "chap1-cena1",

  title: "O Silêncio",

  order: 1,

  cutscenes: [
    {
      id: "chap1-cena1-cut1",

      title: "O Despertar nas Ruínas",

      content: `O silêncio era absoluto.

O rapaz abriu os olhos lentamente, como se estivesse emergindo de um sonho profundo.

A luz tocava seu rosto de forma suave, revelando um cenário morto ao seu redor.

{media:despertar}

Ele permaneceu ali por alguns segundos, deitado, tentando entender onde estava — ou até mesmo quem era.

Com esforço, sentou-se.

Seus olhos percorreram o ambiente: construções antigas, quebradas, consumidas pelo tempo.

Ruínas de uma cidade que claramente haviam sido palco de algo grandioso… e destrutivo.`,

      order: 1,

      media: [
        {
          id: "despertar",
          type: "video",
          src: "https://malveiracaiodev.github.io/Fragmentos-da-eternidade/capitulo1/videos/Despertar.mp4",
        },
      ],

      characters: ["caleb"],
    },

    {
      id: "chap1-cena1-cut2",

      title: "A Chama Azul",

      content: `Sua mente estava vazia.

Nada vinha.

Nenhuma memória.

Nenhum rosto.

Nenhuma história.

Apenas um nome.

— Caleb...

Ele levou a mão direita ao rosto.

E então congelou.

{media:chamas}

Chamas.

Uma chama azul-escura envolvendo sua mão, pulsando de forma silenciosa, como se estivesse viva.

O fogo se movia com suavidade, quase como uma respiração.

Mas não o queimava. Em vez disso, sentiu algo diferente.

Calor.

Um calor profundo, que não feriu — pelo contrário, parecia preencher seu corpo com uma energia estranha, quase reconfortante.

A chama começou a se dissipar lentamente, como se respondesse ao seu estado.`,

      order: 2,

      media: [
        {
          id: "chamas",
          type: "video",
          src: "https://malveiracaiodev.github.io/Fragmentos-da-eternidade/capitulo1/videos/chamas.mp4",
        },
      ],

      characters: ["caleb"],

      unlocks: {
        characters: [Unlocks.Characters.Caleb],

        reward: {
          type: "character",
          id: Unlocks.Characters.Caleb,
          name: "Caleb",
        },
      },
    },

    {
      id: "chap1-cena1-cut3",

      title: "A Cidade Afundada",

      content: `Confuso, ele se levantou com cuidado.

Seus olhos voltaram a explorar o lugar.

A cidade não tinha saída visível.

Ao redor, uma enorme formação rochosa cercava tudo — alta, contínua, sufocante.

Parecia uma montanha.

Sem pensar muito, Caleb caminhou até sua base.

Vinhas grossas se estendiam pelas pedras, como se a própria natureza tentasse engolir aquele lugar esquecido.

Ele começou a escalar.

O esforço era grande, mas algo dentro dele o impulsionava.

Como se aquela energia ainda pulsasse em seu corpo.

{media:escalada}

Após alcançar o topo, Caleb virou-se lentamente e observou a cidade novamente.

E foi ali que percebeu.

Não era uma montanha.

Nunca foi.

A cidade havia sido empurrada para baixo.

Afundada.

Como uma cicatriz no mundo.`,

      order: 3,

      media: [
        {
          id: "escalada",
          type: "video",
          src: "https://malveiracaiodev.github.io/Fragmentos-da-eternidade/capitulo1/videos/escalada.mp4",
        },
      ],

      characters: ["caleb"],
    },
  ],
};


