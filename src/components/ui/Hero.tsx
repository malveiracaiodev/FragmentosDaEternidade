import { useNavigate } from "react-router-dom";
import videoBg from "../../assets/background.mp4";
import headerImg from "../../assets/header.png";
import "../../styles/hero.css";

function Hero() {
    const navigate = useNavigate();

    function openStory() {
        navigate("/historia");
    }

    return (
        <div className="hero-wrapper">
            {/* 1. LOGO GRANDE NO TOPO (Rola junto com a página) */}
            <div className="main-logo-container">
                <img 
                    src={headerImg} 
                    alt="Fragmentos da Eternidade" 
                    className="main-logo-img"
                />
            </div>

            {/* 3. SEÇÃO HERO COM VÍDEO E PAINEL */}
            <section className="hero">
                <video autoPlay loop muted playsInline className="hero-video-bg" aria-hidden="true">
                    <source src={videoBg} type="video/mp4" />
                </video>

                <div className="hero-overlay" aria-hidden="true" />
                
                <div className="hero-particles" aria-hidden="true">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <span key={index} />
                    ))}
                </div>

                {/* PAINEL DE JORNADA */}
                <div className="hero-panel">
                    <div className="hero-panel-header">
                        <span>✦</span>
                        <h2>Sua Jornada</h2>
                    </div>

                    <button className="hero-action primary" onClick={openStory}>
                        ▶ Iniciar Jornada
                    </button>

                    <button className="hero-action secondary" onClick={openStory}>
                        ⟳ Continuar de Onde Parou
                    </button>

                    <div className="hero-divider" />

                    <div className="hero-last-chapter">
                        <small>ÚLTIMO FRAGMENTO REVELADO</small>
                        <h3>Capítulo I</h3>
                        <p>O Despertar</p>

                        <button className="hero-read" onClick={openStory}>
                            Ler Agora →
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;