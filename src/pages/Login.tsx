import { useAuth } from "../hooks/useAuth";
import { Navbar } from "../components/ui/Navbar";
import backgroundVideo from "../assets/background.mp4";
import "../styles/login.css";

export function Login() {
    const {
        user,
        loading,
        login,
        logout
    } = useAuth();

    return (
        <div className="login-page-wrapper" style={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden" }}>
            {/* Background em Vídeo */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="background-video"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                    zIndex: -1
                }}
            >
                <source src={backgroundVideo} type="video/mp4" />
                Seu navegador não suporta vídeos em segundo plano.
            </video>

            {/* Navbar Global */}
            <Navbar />

            {loading ? (
                <main className="login-container">
                    <div className="login-card">
                        <div className="login-spinner" />
                        <h2>Restaurando jornada...</h2>
                        <p>Sincronizando os registros do viajante.</p>
                    </div>
                </main>
            ) : !user ? (
                <main className="login-container">
                    <div className="login-card">
                        <div className="login-header">
                            <h1>Entrar na Jornada</h1>
                            <p>
                                Entre com sua conta Google para salvar seu progresso,
                                descobertas e fragmentos.
                            </p>
                        </div>

                        <button
                            className="google-login-btn"
                            onClick={login}
                        >
                            <svg className="google-icon" viewBox="0 0 24 24">
                                <path
                                    fill="#4285F4"
                                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.2v3.15C3.21 21.34 7.32 24 12 24z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.2C.43 8.15 0 9.89 0 12s.43 3.85 1.2 5.39l4.07-3.15z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.32 0 3.21 2.66 1.2 6.61l4.07 3.15c.95-2.85 3.6-4.96 6.73-4.96z"
                                />
                            </svg>
                            ✨ Entrar com Google
                        </button>

                        <div className="login-footer">
                            <span>Fragmentos da Eternidade</span>
                        </div>
                    </div>
                </main>
            ) : (
                <main className="login-container">
                    <div className="login-card">
                        <div className="login-avatar-container">
                            <img
                                src={user.photoURL ?? ""}
                                alt="Avatar"
                                className="login-user-avatar"
                            />
                        </div>

                        <div className="login-header">
                            <h1>
                                Bem-vindo,{" "}
                                {user.displayName}
                            </h1>
                            <p>{user.email}</p>
                        </div>

                        <button
                            className="google-login-btn logout-btn"
                            onClick={logout}
                        >
                            Sair da conta
                        </button>

                        <div className="login-footer">
                            <span>Fragmentos da Eternidade</span>
                        </div>
                    </div>
                </main>
            )}
        </div>
    );
}