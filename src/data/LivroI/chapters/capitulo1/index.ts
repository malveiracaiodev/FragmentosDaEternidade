import type { Chapter } from "../../../../types/chapter";
import { cena1 } from "./Cena1";

export const capitulo1: Chapter = {
  id: "capitulo-1",
  number: 1,
  status: "available",
  title: "O Silêncio",
  description:
    "O início da jornada de Caleb em um mundo esquecido, onde os Fragmentos começam a despertar.",
  scenes: [
    cena1,
  ],
};

