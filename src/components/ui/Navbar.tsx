import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "../../styles/navbar.css";

export function Navbar() {
    const {
        user,
        loading,
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

            {/* DIREITA (Áudio e Perfil) */}
            <div className="navbar-right">
                <button
                    className="icon-button"
                    title="Ativar ou pausar trilha sonora"
                    aria-label="Controle da trilha sonora"
                >
                    ⏸
                </button>

                {!loading && user && (
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