import LorePage from "../components/lore/LorePage";

import { caleb } from "../data/characters/caleb";
import { Link } from "react-router-dom";


import "../styles/lorePage.css";



export default function Characters(){


    const characters = [

        caleb,

    ];



    return (


        <LorePage

            title="Personagens"

            description="
                Registros dos seres que moldaram
                os acontecimentos de Fragmentos da Eternidade.
                Novas informações serão reveladas conforme
                os fragmentos forem descobertos.
            "

        >



            <section className="characters-grid">


                {
                    characters.map(

                        (character)=>(


                            <Link

                              key={character.id}

                            to={`/${character.id}`}

                             className="character-grid-card"


                            >



{

character.media.bannerType === "video" ?


<video

className="character-grid-image"

src={character.media.banner}

autoPlay

muted

loop

playsInline

/>


:


<img

src={character.media.portrait}

alt={character.identity.name}

className="character-grid-image"

/>

}



                                <h2>

                                    {character.identity.name}

                                </h2>



                                <h3>

                                    {character.identity.title}

                                </h3>



                                <p>

                                    {character.biography.summary}

                                </p>



                            </Link>


                        )

                    )
                }


            </section>



        </LorePage>


    );

}