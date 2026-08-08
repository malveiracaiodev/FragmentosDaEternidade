import type { Chapter } from "../../../types/chapter";

import { chap1cena1 } from "./cena1";
import { chap1cena2 } from "./cena2";


export const capitulo1: Chapter = {

  id: "capitulo-1",


  title: "O Despertar",


  description:
    "O início da jornada de Caleb em um mundo esquecido, onde os Fragmentos começam a despertar.",


  scenes: [

    chap1cena1,

    chap1cena2,

  ],

};