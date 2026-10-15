import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import fallbackAvatar from "../../assets/icone.jfif"; // Importação garantida para o Vite/GitHub Pages
import "../../styles/navbar.css";

export function Navbar() {
    const { user, loading, logout, login } = useAuth();

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [loginError, setLoginError] = useState<string | null>(null);

    const closeMenu = () => setShowMobileMenu(false);

    const handleLogin = async () => {
        try {
            setLoginError(null);
            await login();
            setShowLoginModal(false);
        } catch (error) {
            console.error("Erro ao logar:", error);
            setLoginError("Não foi possível realizar o login. Tente novamente.");
        }
    };

    // Função utilitária para determinar a foto válida
    const getAvatarSrc = () => {
        if (user && user.photoURL && user.photoURL.trim() !== "") {
            return user.photoURL;
        }
        return fallbackAvatar;
    };

    return (
        <nav className="navbar-container" aria-label="Navegação principal">
            <div className="navbar-content">
                
                {/* ESQUERDA: Botão Hambúrguer (Mobile) e Links Principais (Desktop) */}
                <div className="navbar-left">
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setShowMobileMenu(true)}
                        aria-label="Abrir menu de navegação"
                    >
                        ☰
                    </button>

                    <div className="navbar-links">
                        <NavItem path="/" text="INÍCIO" />
                        <NavItem path="/historia" text="HISTÓRIA" />
                        <NavItem path="/mundo" text="MUNDO" />
                        <NavItem path="/personagens" text="PERSONAGENS" />

                        {!loading && !user && (
                            <button
                                onClick={() => setShowLoginModal(true)}
                                className="nav-link btn-link"
                            >
                                LOGIN
                            </button>
                        )}
                    </div>
                </div>

                {/* DIREITA: Player/Áudio e Perfil do Usuário */}
                <div className="navbar-right">
                    <button
                        className="icon-button audio-toggle-btn"
                        title="Ativar ou pausar trilha sonora"
                        aria-label="Controle da trilha sonora"
                    >
                        ⏸
                    </button>

                    {!loading && user && (
                        <div className="user-nav-actions">
                            <Link
                                to="/perfil"
                                className="profile-container"
                                title={user.displayName ?? "Perfil do viajante"}
                            >
                                <div className="profile-circle">
                                    <img
                                        src={getAvatarSrc()}
                                        alt="Avatar do viajante"
                                        onError={(e) => {
                                            e.currentTarget.src = fallbackAvatar;
                                        }}
                                    />
                                </div>
                                <span className="profile-name">
                                    {user.displayName?.split(" ")[0] ?? "Viajante"}
                                </span>
                                <span className="profile-arrow">▼</span>
                            </Link>

                            {/* Botão de Sair no Desktop */}
                            <button
                                onClick={logout}
                                className="logout-btn-desktop"
                                title="Sair da conta"
                                aria-label="Sair da conta"
                            >
                                🚪 Sair
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* DRAWER / MENU LATERAL MOBILE */}
            {showMobileMenu && (
                <div className="mobile-drawer-overlay" onClick={closeMenu}>
                    <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
                        <div className="mobile-drawer-header">
                            <h3>Eryon Chronicles</h3>
                            <button className="close-drawer-button" onClick={closeMenu}>✕</button>
                        </div>

                        <div className="mobile-drawer-links">
                            <Link to="/" className="mobile-nav-link" onClick={closeMenu}>INÍCIO</Link>
                            <Link to="/historia" className="mobile-nav-link" onClick={closeMenu}>HISTÓRIA</Link>
                            <Link to="/mundo" className="mobile-nav-link" onClick={closeMenu}>MUNDO</Link>
                            <Link to="/personagens" className="mobile-nav-link" onClick={closeMenu}>PERSONAGENS</Link>

                            <div className="mobile-drawer-divider" />

                            {!loading && !user && (
                                <button
                                    className="mobile-nav-link login-action-btn"
                                    onClick={() => {
                                        closeMenu();
                                        setShowLoginModal(true);
                                    }}
                                >
                                    🔑 LOGIN / ENTRAR
                                </button>
                            )}

                            {!loading && user && (
                                <>
                                    <Link to="/perfil" className="mobile-nav-link profile-link-mobile" onClick={closeMenu}>
                                        👤 PERFIL ({user.displayName?.split(" ")[0] ?? "Viajante"})
                                    </Link>
                                    <button
                                        onClick={() => {
                                            closeMenu();
                                            logout();
                                        }}
                                        className="mobile-nav-link logout-action-btn"
                                    >
                                        🚪 SAIR DA CONTA
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL DE LOGIN */}
            {showLoginModal && (
                <div className="login-modal-overlay" onClick={() => setShowLoginModal(false)}>
                    <div className="login-modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>Portal do Viajante</h3>
                        <p>Faça login para registrar suas jornadas em Eryon Chronicles.</p>
                        
                        {loginError && (
                            <p className="login-error-message">
                                {loginError}
                            </p>
                        )}

                        <button 
                            className="login-provider-button"
                            onClick={handleLogin}
                        >
                            <span>🌐</span> Entrar com Google
                        </button>

                        <button 
                            className="close-modal-button"
                            onClick={() => setShowLoginModal(false)}
                        >
                            ✕ Fechar
                        </button>
                    </div>
                </div>
            )}
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
