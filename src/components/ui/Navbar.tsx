import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "../../styles/navbar.css";

export function Navbar() {
    const {
        user,
        loading,
        logout,
        login,
    } = useAuth();

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const closeMenu = () => setShowMobileMenu(false);

    return (
        <nav
            className="navbar-expanded"
            aria-label="Navegação principal"
        >
            {/* BOTÃO HAMBÚRGUER (Aparece apenas no mobile via CSS) */}
            <button
                className="mobile-menu-toggle"
                onClick={() => setShowMobileMenu(true)}
                aria-label="Abrir menu de navegação"
            >
                ☰
            </button>

            {/* LINKS DA ESQUERDA (Ocultos no mobile via CSS) */}
            <div className="navbar-links">
                <NavItem path="/" text="INÍCIO" />
                <NavItem path="/historia" text="HISTÓRIA" />
                <NavItem path="/mundo" text="MUNDO" />
                <NavItem path="/personagens" text="PERSONAGENS" />

                {!loading && !user && (
                    <button
                        onClick={() => setShowLoginModal(true)}
                        className="nav-link"
                        style={{ background: "none", border: "none", cursor: "pointer" }}
                    >
                        LOGIN
                    </button>
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
                    <div className="user-nav-actions" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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

                        {/* Botão de Sair apenas no Desktop (no mobile vai para o menu lateral) */}
                        <button
                            onClick={logout}
                            className="icon-button logout-btn-desktop"
                            title="Sair da conta"
                            aria-label="Sair da conta"
                            style={{ fontSize: "0.9rem", padding: "6px 10px", width: "auto", background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.3)", borderRadius: "6px", color: "#f87171", cursor: "pointer" }}
                        >
                            🚪 Sair
                        </button>
                    </div>
                )}
            </div>

            {/* MENU LATERAL / WIDGET MOBILE (Drawer) */}
            {showMobileMenu && (
                <div className="mobile-drawer-overlay" onClick={closeMenu}>
                    <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
                        <div className="mobile-drawer-header">
                            <h3>Navegação</h3>
                            <button className="close-drawer-button" onClick={closeMenu}>✕</button>
                        </div>

                        <div className="mobile-drawer-links">
                            <Link to="/" className="mobile-nav-link" onClick={closeMenu}>INÍCIO</Link>
                            <Link to="/historia" className="mobile-nav-link" onClick={closeMenu}>HISTÓRIA</Link>
                            <Link to="/mundo" className="mobile-nav-link" onClick={closeMenu}>MUNDO</Link>
                            <Link to="/personagens" className="mobile-nav-link" onClick={closeMenu}>PERSONAGENS</Link>

                            {!loading && !user && (
                                <button
                                    className="mobile-nav-link login-action-btn"
                                    onClick={() => {
                                        closeMenu();
                                        setShowLoginModal(true);
                                    }}
                                >
                                    LOGIN
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

            {/* MODAL / POP-UP DE LOGIN FLUTUANTE */}
            {showLoginModal && (
                <div className="login-modal-overlay" onClick={() => setShowLoginModal(false)}>
                    <div className="login-modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>Portal do Viajante</h3>
                        <p>Faça login para registrar suas jornadas em Eryon Chronicles.</p>
                        
                        <button 
                            className="login-provider-button"
                            onClick={async () => {
                                try {
                                    await login();
                                    setShowLoginModal(false);
                                } catch (error) {
                                    console.error("Erro ao logar:", error);
                                }
                            }}
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