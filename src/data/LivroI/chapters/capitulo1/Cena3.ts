import type { Scene } from "../../../../types/chapter";

export const cena3: Scene = {
  id: "chap1-cena3",
  title: "A resposta do oceano",
  order: 3,
  cutscenes: [
    {
      id: "chap1-cena3-cut1",
      title: "A resposta do oceano",
      order: 1,
      content: `Algum tempo depois, Kylo reapareceu vindo do interior do navio, puxando uma pequena caixa com rodas cheia de suprimentos. Seu olhar varria o convés constantemente. Atento. Tenso.

— Precisamos sair daqui — disse ele, direto. — Vamos para o seu veleiro. É menor… e mais seguro.

Caleb franziu levemente a testa. Não questionou, mas percebeu: Kylo não estava com medo do mar. Estava com medo de algo… que podia aparecer a qualquer momento.

Minutos depois, os dois já estavam no veleiro. A tempestade havia passado e o céu começava a se abrir. O mar ainda se agitava levemente, mas agora eles tinham uma direção. Kylo ajustava as velas com precisão, mesmo ainda debilitado.

— Norte — determinou ele.

— Como você sabe? — perguntou Caleb, observando.

Kylo ergueu o olhar para a lua, que brilhava entre as nuvens.

— Nesse mar… você não confia em mapas. Você aprende a ler o céu… ou morre perdido nele.

{media:rumo-norte-ceu}

Caleb o encarou por um instante, pensativo. O silêncio durou pouco.

— Você achou que eu queria te matar — pontuou Caleb. — Estava esperando alguém?

Kylo não respondeu de imediato. Seus olhos se perderam no horizonte.

— …Eu estava sendo caçado. Eu era um soldado. E traí o governo mundial.

Caleb franziu a testa.

— Governo… mundial?

A confusão em sua voz era genuína. Kylo virou o rosto lentamente, analisando-o com ainda mais atenção.

— Quem é você…? De onde você veio?

Caleb soltou um leve riso sem graça, levando a mão à nuca com um olhar distante.

— Queria saber te responder. Eu acordei… numa cidade em ruínas. Sem memória. Sem passado. Só com um nome: Caleb.

O vento soprou mais forte, esticando as velas. Kylo permaneceu em silêncio por alguns segundos antes de voltar a falar.

— O mundo… não é como deveria ser. Existe um governo que controla tudo: cidades, pessoas, informação… e poder.

{media:revelacao-governo-mundial}

Qualquer coisa que fuja do normal, qualquer energia ou habilidade… é proibida. Pessoas como você… são caçadas.

O clima mudou, tornando-se mais pesado, mais real.

— Primeiro, eles tentam recrutar. Dizem que é “para manter a ordem”. Se você aceita, vira uma ferramenta. Se recusa… vira um alvo.

Caleb fechou levemente a mão. As chamas azuis surgiram por um único segundo e desapareceram. Kylo respirou fundo.

— Eu não concordei com isso. O mundo não precisa de controle absoluto; precisa de escolha. Se alguém nasce com um poder como o seu… então tem o direito de usá-lo.

{media:proibicao-e-chamas}`,
      media: [
        {
          id: "rumo-norte-ceu",
          type: "video",
          src: "https://github.com/malveiracaiodev/FragmentosDaEternidade/releases/download/Cap1Videos/Cap1cena3video1.mp4",
        },
        {
          id: "revelacao-governo-mundial",
          type: "video",
          src: "https://github.com/malveiracaiodev/FragmentosDaEternidade/releases/download/Cap1Videos/Cap1cena3video2.mp4",
        },
        {
          id: "proibicao-e-chamas",
          type: "video",
          src: "https://github.com/malveiracaiodev/FragmentosDaEternidade/releases/download/Cap1Videos/Cap1cena3video3.mp4",
        },
      ],
    },
  ],
};
