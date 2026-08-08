import { useAuth } from "../hooks/useAuth";

import "../styles/profile.css";


export function Login() {


    const {
        user,
        loading,
        login,
        logout

    } = useAuth();




    if(loading){

        return (

            <main className="profile-page">

                <h2>
                    Restaurando jornada...
                </h2>

                <p>
                    Sincronizando os registros do viajante.
                </p>

            </main>

        );

    }






    if(!user){


        return (

            <main className="profile-page">


                <section className="profile-card login-card">


                    <h1>

                        Entrar na Jornada

                    </h1>



                    <p>

                        Entre com sua conta Google
                        para salvar seu progresso,
                        descobertas e fragmentos.

                    </p>




                    <button

                        className="profile-button"

                        onClick={login}

                    >

                        ✨ Entrar com Google

                    </button>


                </section>


            </main>

        );


    }







    return (

        <main className="profile-page">


            <section className="profile-card">


                <img

                    src={
                        user.photoURL ??
                        ""
                    }

                    alt="Avatar"

                    className="profile-avatar"

                />



                <h1>

                    Bem-vindo,
                    {" "}
                    {user.displayName}

                </h1>




                <p>

                    {user.email}

                </p>





                <button

                    className="profile-button logout"

                    onClick={logout}

                >

                    Sair da conta

                </button>



            </section>


        </main>

    );

}