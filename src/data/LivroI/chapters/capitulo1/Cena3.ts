import type { Scene } from "../../../../types/chapter";
// Importação do vídeo local da Cena 3 (ajuste o caminho da pasta de vídeos se necessário)
import video1Local from "./Videos/cap1cena3video1.mp4";

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

E foi ali que percebeu. Não era uma montanha. Nunca foi. A cidade… havia sido empurrada para baixo. Afundada. Como uma cicatriz no mundo.`,
      media: [
        {
          id: "caleb-escalando",
          type: "video",
          src: video1Local,
        },
      ],
      characters: [],
    },
  ],
};
