import type { ReactNode } from "react";

import { LoreBackground } from "./LoreBackground";

import "../../styles/lorePage.css";



interface LorePageProps {

    title: string;
    description: string;
    children?: ReactNode;

}




export function LorePage({

    title,
    description,
    children,

}: LorePageProps) {


    return (

        <LoreBackground>


            <section className="lore-page">


                <header className="lore-header">


                    <h1>
                        {title}
                    </h1>



                    <p>
                        {description}
                    </p>


                </header>





                <div className="lore-body">

                    {children}

                </div>




            </section>


        </LoreBackground>

    );

}





export default LorePage;