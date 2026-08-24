import React from 'react';
import { useNavigate } from "react-router-dom";
import videoBg from "../../assets/background.mp4";
import headerImg from "../../assets/header.png";
import "../../styles/hero.css";

export function Hero(): React.JSX.Element {
    const navigate = useNavigate();

    // Direciona para o guia geral de capítulos/história
    function handleOpenStory(): void {
        navigate("/historia");
    }

    // Direciona especificamente para o leitor do último fragmento/capítulo salvo
    function handleContinueReading(): void {
        // Exemplo: redireciona direto para o Capítulo I (ou resgate do localStorage futuramente)
        navigate("/historia/capitulo-1"); 
    }

    return (
        <div className="hero-wrapper">
            {/* LOGO GRANDE NO TOPO */}
            <div className="main-logo-container">
                <img 
                    src={headerImg} 
                    alt="Eryon Chronicles" 
                    className="main-logo-img"
                />
            </div>

            {/* SEÇÃO HERO COM VÍDEO E PAINEL */}
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

                    <button className="hero-action primary" onClick={handleOpenStory}>
                        ▶ Iniciar Jornada
                    </button>

                    <button className="hero-action secondary" onClick={handleContinueReading}>
                        ⟳ Continuar de Onde Parou
                    </button>

                    <div className="hero-divider" />

                    <div className="hero-last-chapter">
                        <small>ÚLTIMO FRAGMENTO REVELADO</small>
                        <h3>Capítulo I</h3>
                        <p>O Despertar</p>

                        <button className="hero-read" onClick={handleContinueReading}>
                            Ler Agora →
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;