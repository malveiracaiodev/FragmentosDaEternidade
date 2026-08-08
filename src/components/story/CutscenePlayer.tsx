import { Fragment } from "react";

import type { Cutscene, Media } from "../../types/chapter";



interface CutscenePlayerProps {

    cutscene: Cutscene;

}



export function CutscenePlayer({

    cutscene,

}: CutscenePlayerProps) {



    // Divide o texto mantendo os marcadores {media:id}

    const blocks =
        cutscene.content.split(/(\{media:[^}]+\})/g);





    function renderMedia(media: Media) {


        switch (media.type) {


            case "video":

                return (

                    <video

                        key={media.id}

                        controls

                        poster={media.thumbnail}

                        className="cutscene-video"

                    >

                        <source

                            src={media.src}

                            type="video/mp4"

                        />


                        Seu navegador não suporta vídeos.

                    </video>

                );





            case "image":

                return (

                    <img

                        key={media.id}

                        src={media.src}

                        alt={media.alt ?? ""}

                        className="cutscene-image"

                    />

                );





            case "audio":

                return (

                    <audio

                        key={media.id}

                        controls

                        className="cutscene-audio"

                    >

                        <source

                            src={media.src}

                        />


                        Seu navegador não suporta áudio.

                    </audio>

                );





            default:

                return null;

        }

    }








    return (

        <article className="cutscene-player">


            <h3>

                {cutscene.title}

            </h3>





            {

                blocks.map((block, index) => {


                    const match =
                        block.match(
                            /\{media:([^}]+)\}/
                        );




                    // =========================
                    // BLOCO DE MÍDIA
                    // =========================

                    if(match){


                        const mediaId =
                            match[1];



                        const media =
                            cutscene.media?.find(

                                item =>
                                    item.id === mediaId

                            );



                        if(!media){

                            return null;

                        }



                        return (

                            <Fragment key={index}>

                                {renderMedia(media)}

                            </Fragment>

                        );


                    }






                    // =========================
                    // BLOCO DE TEXTO
                    // =========================

                    return (

                        <p

                            key={index}

                            className="cutscene-content"

                        >

                            {

                                block
                                .split("\n")
                                .map(

                                    (
                                        line,
                                        lineIndex,
                                        array

                                    ) => (

                                        <Fragment

                                            key={lineIndex}

                                        >

                                            {line}


                                            {
                                                lineIndex <
                                                array.length - 1
                                                &&
                                                (

                                                    <>

                                                        <br />

                                                        <br />

                                                    </>

                                                )
                                            }


                                        </Fragment>

                                    )

                                )

                            }


                        </p>

                    );


                })

            }





        </article>

    );

}