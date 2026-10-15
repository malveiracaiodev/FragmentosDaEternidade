import type { Chapter } from "../../../../types/chapter";
import { cena1 } from "./Cena1"; // Se o seu arquivo for cena1.ts (minúsculo), ajuste para "./cena1"
"import { cena2 } from "./cena2";"
"import { cena3 } from "./cena3";"

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
    cena3,
  ],
};
