import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "../../styles/navbar.css";

export function Navbar() {
    const {
        user,
        loading,
        logout, // <--- Adicionamos o logout aqui
    } = useAuth();

    return (
        <nav
            className="navbar-expanded"
            aria-label="Navegação principal"
        >
            {/* LINKS COM DESIGN MELHORADO */}
            <div className="navbar-links">
                <NavItem path="/" text="INÍCIO" />
                <NavItem path="/historia" text="HISTÓRIA" />
                <NavItem path="/mundo" text="MUNDO" />
                <NavItem path="/personagens" text="PERSONAGENS" />

                {!loading && !user && (
                    <NavItem path="/login" text="LOGIN" />
                )}
            </div>

            {/* DIREITA (Áudio, Perfil e Logout) */}
            <div className="navbar-right">
                <button
                    className="icon-button"
                    title="Ativar ou pausar trilha sonora"
                    aria-label="Controle da trilha sonora"
                >
                    ⏸
                </button>

                {!loading && user && (
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <Link
                            to="/perfil"
                            className="profile-container"
                            title={user.displayName ?? "Perfil do viajante"}
                        >
                            <div className="profile-circle">
                                <img
                                    src={user.photoURL ?? "/icone.jfif"}
                                    alt="Avatar do viajante"
                                    onError={(event) => {
                                        event.currentTarget.src = "/icone.jfif";
                                    }}
                                />
                            </div>
                            <span className="profile-name">
                                {user.displayName?.split(" ")[0] ?? "Viajante"}
                            </span>
                            <span className="profile-arrow">▼</span>
                        </Link>

                        {/* Botão de Logout rápido na Navbar para testes e uso */}
                        <button
                            onClick={logout}
                            className="icon-button"
                            title="Sair da conta"
                            aria-label="Sair da conta"
                            style={{ fontSize: "0.9rem", padding: "6px 10px", background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.3)", borderRadius: "6px", color: "#f87171", cursor: "pointer" }}
                        >
                            🚪 Sair
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}

interface NavItemProps {
    path: string;
    text: string;
}

function NavItem({ path, text }: NavItemProps) {
    return (
        <Link to={path} className="nav-link">
            {text}
        </Link>
    );
}