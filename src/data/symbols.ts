import GovernoMundialSymbol 
from "../assets/Symbols/GovernoMundialSymbol.png";

import { Unlocks } 
from "../types/unlocks";


export interface SymbolData {


    id:string;


    unlock:string;


    name:string;


    image:string;


    rarity:
    | "common"
    | "rare"
    | "epic"
    | "legendary";


    description:string;

}



export const symbols:SymbolData[] = [


    {

        id:
        "government",


        unlock:
        Unlocks.Symbols.Government,


        name:
        "Insígnia do Governo Mundial",


        image:
        GovernoMundialSymbol,


        rarity:
        "common",


        description:
        "Encontrada nos destroços de antigos navios do Governo Mundial.",

    }


];





export function getSymbolByUnlock(
    unlock:string
){

    return symbols.find(
        symbol =>
        symbol.unlock === unlock
    );

}





export function getSymbolById(
    id:string
){

    return symbols.find(
        symbol =>
        symbol.id === id
    );

}