import {
    useEffect,
    useState,
    type ReactNode,
} from "react";


import { useAuth } from "../../hooks/useAuth";

import type { UnlockId } from "../../types/unlocks";

import { PlayerService } from "../../services/player/PlayerService";

import "../../styles/unlockGuard.css";



interface UnlockGuardProps {

    unlockId: UnlockId;

    children: ReactNode;

    refreshKey?: number;

}




export function UnlockGuard({

    unlockId,

    children,

    refreshKey,

}: UnlockGuardProps) {



    const {
        user,
        loading: authLoading,

    } = useAuth();




    const [checking,setChecking] = useState(true);

    const [unlocked,setUnlocked] = useState(false);





    useEffect(() => {


        let cancelled = false;




        async function verifyUnlock(){



            if(authLoading){

                return;

            }




            if(!user){


                if(!cancelled){

                    setUnlocked(false);

                    setChecking(false);

                }


                return;

            }




            try{


                setChecking(true);



                const result =

                    await PlayerService.isUnlocked(

                        user.uid,

                        unlockId

                    );




                if(!cancelled){

                    setUnlocked(result);

                }



            }

            catch(error){


                console.error(

                    "Erro verificando desbloqueio:",

                    error

                );



                if(!cancelled){

                    setUnlocked(false);

                }


            }

            finally{


                if(!cancelled){

                    setChecking(false);

                }


            }



        }





        verifyUnlock();




        return()=>{

            cancelled=true;

        }



    },[

        user,

        unlockId,

        authLoading,

        refreshKey

    ]);









    if(authLoading){


        return (

            <LockedCard

                title="⏳ Restaurando jornada..."

                description="Sincronizando os registros do viajante."

            />

        );

    }







    if(checking){


        return (

            <LockedCard

                title="📖 Consultando os Arquivos da Eternidade..."

                description="Verificando os fragmentos descobertos."

            />

        );

    }







    if(!user){


        return (

            <LockedCard

                title="🔒 Registro Protegido"

                description="Faça login para registrar seu progresso."

            />

        );

    }







    if(!unlocked){


        return (

            <div className="unlock-locked">


                <h2>
                    📜 Fragmento Selado
                </h2>



                <p>
                    As memórias deste registro ainda
                    permanecem ocultas.
                </p>



                <span>
                    Continue sua jornada para revelar
                    este conhecimento.
                </span>



                <small className="unlock-id">

                    Registro:
                    {" "}
                    {unlockId}

                </small>


            </div>

        );

    }







    return (

        <>

            {children}

        </>

    );


}







function LockedCard({

    title,

    description,

}:{

    title:string;

    description:string;

}){


    return (

        <div className="unlock-locked">

            <h2>
                {title}
            </h2>


            <p>
                {description}
            </p>

        </div>

    );

}