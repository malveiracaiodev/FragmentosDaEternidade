import type { Chapter } from "../../../../types/chapter";
import { cena1 } from "./Cena1";
import { cena2 } from "./Cena2";
import { cena3 } from "./Cena3"; // Importa a nova cena 3

export const capitulo1: Chapter = {
  id: "capitulo-1",
  number: 1,
  status: "available",
  title: "O Silêncio",
  description:
    "O início da jornada de Caleb em um mundo esquecido, onde os Fragmentos começam a despertar.",
  scenes: [
    cena1,
    cena2,
    cena3, // Adiciona a cena 3 no array fechando o Capítulo 1
  ],
};
