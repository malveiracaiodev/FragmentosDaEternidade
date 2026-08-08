import type { ReactNode } from "react";

import "../../styles/loreBackground.css";


interface LoreBackgroundProps {

    children: ReactNode;

}



export function LoreBackground({

    children,

}: LoreBackgroundProps) {


    return (

        <div className="lore-background">


            {/* Fundo espacial */}

            <div
                className="lore-stars"
                aria-hidden="true"
            />



            <div
                className="lore-nebula"
                aria-hidden="true"
            />



            <div
                className="lore-light"
                aria-hidden="true"
            />





            {/* Conteúdo da página */}

            <main className="lore-content">

                {children}

            </main>



        </div>

    );

}