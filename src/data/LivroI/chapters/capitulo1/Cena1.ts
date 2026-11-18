import type { Scene } from "../../../../types/chapter";
import { Unlocks } from "../../../../types/unlocks";

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

Sem pensar muito, Caleb caminhou até sua base. Vinhas grossas se estendiam pelas pedras, como se a própria natureza tentasse engolir aquele lugar esquecido. Ele começou a escalar. O esforço era grande, mas algo dentro dele o impulsionava. Como se aquela energia ainda pulsasse em seu corpo.

{media:caleb-escalando}

Após alguns minutos, alcançou o topo. E então… parou. Virou-se lentamente. Seu olhar encontrou a cidade novamente — mas, agora, de cima.

E foi ali que percebeu. Não era uma montanha. Nunca foi. A cidade… havia sido empurrada para baixo. Afundada. Como uma cicatriz no mundo.`,
      media: [
        {
          id: "despertar",
          type: "video",
          src: "https://malveiracaiodev.github.io/Fragmentos-da-eternidade/capitulo1/videos/Despertar.mp4",
        },
        {
          id: "olhando-ao-redor",
          type: "video",
          src: "https://github.com/malveiracaiodev/Fragmentos-da-eternidade/releases/download/Cap1Videos/cap1cena2video1.mp4",
        },
        {
          id: "caleb-sentando",
          type: "video",
          src: "https://github.com/malveiracaiodev/Fragmentos-da-eternidade/releases/download/Cap1Videos/cap1cena1video3.mp4",
        },
        {
          id: "chama-azul",
          type: "video",
          src: "https://github.com/malveiracaiodev/Fragmentos-da-eternidade/releases/download/Cap1Videos/cap1cena1video4.mp4",
        },
        {
          id: "explorando-ruinas",
          type: "video",
          src: "https://github.com/malveiracaiodev/Fragmentos-da-eternidade/releases/download/Cap1Videos/cap1cena2video3.mp4",
        },
        {
          id: "caleb-escalando",
          type: "video",
          src: "https://github.com/malveiracaiodev/Fragmentos-da-eternidade/releases/download/Cap1Videos/Cap1cena3video1.mp4",
        },
      ],
      unlocks: {
        reward: {
          id: Unlocks.Characters.Caleb,
          name: "Caleb",
          type: "character",
        },
      },
      characters: [Unlocks.Characters.Caleb],
    },
  ],
};
