import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChapterViewer } from "../components/story/ChapterViewer";
import { capitulo1 } from "../data/chapters/capitulo1";
import type { Chapter } from "../types/chapter";
import { Navbar } from "../components/ui/Navbar";
import "../styles/story.css";

const chaptersMap: Record<string, Chapter> = {
    "1": capitulo1,
};

export default function ChapterReader() {
    const { chapterId } = useParams<{ chapterId: string }>();
    const navigate = useNavigate();

    const [currentScene, setCurrentScene] = useState(0);
    const [currentCutscene, setCurrentCutscene] = useState(0);
    
    // Estado para controlar a abertura do menu de navegação de capítulos/cenas
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const chapter = chapterId ? chaptersMap[chapterId] : null;
    const scene = chapter ? chapter.scenes[currentScene] : null;

    const nextCutscene = () => {
        if (scene && currentCutscene < scene.cutscenes.length - 1) {
            setCurrentCutscene((prev) => prev + 1);
        }
    };

    const previousCutscene = () => {
        if (currentCutscene > 0) {
            setCurrentCutscene((prev) => prev - 1);
        }
    };

    const previousScene = () => {
        if (currentScene > 0) {
            const prevSceneIndex = currentScene - 1;
            const lastCutsceneIndex = chapter!.scenes[prevSceneIndex].cutscenes.length - 1;
            setCurrentScene(prevSceneIndex);
            setCurrentCutscene(lastCutsceneIndex);
        }
    };

    const nextScene = () => {
        if (chapter && currentScene < chapter.scenes.length - 1) {
            setCurrentScene((prev) => prev + 1);
            setCurrentCutscene(0);
        } else {
            navigate("/historia");
        }
    };

    // Função para pular diretamente para uma cena específica pelo menu
    const jumpToScene = (sceneIndex: number) => {
        setCurrentScene(sceneIndex);
        setCurrentCutscene(0);
        setIsMenuOpen(false);
    };

    if (!chapter || !scene) {
        return (
            <>
                <Navbar />
                <main className="story-page-container">
                    <h2>Capítulo não encontrado</h2>
                    <button
                        className="back-to-guide-btn"
                        onClick={() => navigate("/historia")}
                    >
                        ← Voltar ao Guia de Episódios
                    </button>
                </main>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <main className="chapter-reader-wrapper">
                
                {/* BARRA DE CONTRASTE COM BOTÃO DE SUMÁRIO */}
                <div className="reader-top-bar">
                    <button
                        className="back-to-guide-btn"
                        onClick={() => navigate("/historia")}
                    >
                        ← Voltar aos Capítulos
                    </button>

                    <button
                        className="open-index-btn"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        📖 Sumário / Cenas
                    </button>
                </div>

                {/* MENU LATERAL (DRAWER) DE CAPÍTULOS E CENAS */}
                {isMenuOpen && (
                    <div className="reader-drawer-overlay" onClick={() => setIsMenuOpen(false)}>
                        <div className="reader-drawer-content" onClick={(e) => e.stopPropagation()}>
                            <div className="drawer-header">
                                <h3>Índice do Capítulo</h3>
                                <button className="close-drawer-btn" onClick={() => setIsMenuOpen(false)}>✕</button>
                            </div>

                            <div className="drawer-chapter-info">
                                <span className="drawer-book-title">Eryon Chronicles</span>
                                <h4>{chapter.title}</h4>
                            </div>

                            <div className="drawer-scenes-list">
                                <p className="drawer-list-title">CENAS DISPONÍVEIS</p>
                                {chapter.scenes.map((s, index) => (
                                    <button
                                        key={index}
                                        className={`drawer-scene-item ${currentScene === index ? "active" : ""}`}
                                        onClick={() => jumpToScene(index)}
                                    >
                                        <span className="scene-number-badge">Cena {index + 1}</span>
                                        <span className="scene-title-text">{s.title}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="drawer-footer">
                                <button 
                                    className="drawer-all-chapters-btn"
                                    onClick={() => navigate("/historia")}
                                >
                                    Ver Todos os Capítulos
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <ChapterViewer
                    chapter={chapter}
                    currentScene={currentScene}
                    currentCutscene={currentCutscene}
                    nextCutscene={nextCutscene}
                    previousCutscene={previousCutscene}
                    previousScene={previousScene}
                    nextScene={nextScene}
                />
            </main>
        </>
    );
}