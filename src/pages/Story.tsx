import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Book } from "../types/chapter"; // Importação oficial do tipo Book
import "../styles/story.css";

// Estrutura expandida suportando Livros, Capítulos e Cenas tipada com a interface Book
const ERYON_BOOKS: Book[] = [
    {
        id: "caleb-fate",
        title: "Caleb Fate",
        subtitle: "Livro I • A Jornada Inicial",
        description: "Explore as memórias fragmentadas e os primeiros passos de Caleb em Eryon.",
        status: "active",
        chapters: [
            {
                id: 1,
                number: 1,
                title: "O Despertar",
                description: "Cada fragmento guarda uma memória. Descubra os primeiros passos de Caleb.",
                status: "available",
                scenes: [
                    { 
                        id: "cena1", 
                        title: "Cena 1: O Despertar", 
                        order: 1, 
                        duration: "Leitura / Interativo", 
                        isUnlocked: true, 
                        cutscenes: [] 
                    },
                    { 
                        id: "cena2", 
                        title: "Cena 2: Sombras no Horizonte", 
                        order: 2, 
                        duration: "Leitura / Interativo", 
                        isUnlocked: true, 
                        cutscenes: [] 
                    },
                ]
            },
            {
                id: 2,
                number: 2,
                title: "Próximo Capítulo",
                description: "Em breve...",
                status: "coming_soon",
                scenes: []
            }
        ]
    },
    {
        id: "proximos-livros",
        title: "Próximos Livros",
        subtitle: "Livros Futuros",
        description: "Novos arcos e desdobramentos do multiverso em breve.",
        status: "locked",
        chapters: []
    }
];

export default function Story() {
    const navigate = useNavigate();
    
    // Mantém o Livro I aberto por padrão
    const [expandedBookId, setExpandedBookId] = useState<string>("caleb-fate");
    // Mantém o Capítulo 1 aberto por padrão para facilitar o acesso rápido
    const [expandedChapters, setExpandedChapters] = useState<Record<string | number, boolean>>({ 1: true });

    const toggleBook = (bookId: string, status: string) => {
        if (status === "locked") return;
        setExpandedBookId(expandedBookId === bookId ? "" : bookId);
    };

    const toggleChapter = (chapterId: string | number) => {
        setExpandedChapters(prev => ({
            ...prev,
            [chapterId]: !prev[chapterId]
        }));
    };

    return (
        <main className="story-page-container">
            <div className="chapter-guide-header">
                <h1>Guia de Episódios</h1>
                <p>Escolha um livro, navegue pelos capítulos e reviva as memórias para desvendar os fragmentos.</p>
            </div>

            <div className="books-wrapper">
                {ERYON_BOOKS.map((book) => {
                    const isBookOpen = expandedBookId === book.id;
                    const isLocked = book.status === "locked";

                    return (
                        <div key={book.id} className={`book-widget ${isLocked ? "locked" : ""} ${isBookOpen ? "open" : ""}`}>
                            {/* Cabeçalho do Livro */}
                            <div className="book-widget-header" onClick={() => toggleBook(book.id, book.status)}>
                                <div className="book-meta">
                                    <span className="chapter-number">{book.subtitle}</span>
                                    <h2>{book.title}</h2>
                                    <p>{book.description}</p>
                                </div>
                                <div className="book-toggle-icon">
                                    {isLocked ? "🔒" : (isBookOpen ? "▲" : "▼")}
                                </div>
                            </div>

                            {/* Capítulos do Livro */}
                            {isBookOpen && !isLocked && (
                                <div className="chapters-list-container">
                                    {book.chapters.map((chapter) => {
                                        const isChapterOpen = expandedChapters[chapter.id];
                                        const isComingSoon = chapter.status === "coming_soon";

                                        return (
                                            <div key={chapter.id} className="chapter-card-item">
                                                <div 
                                                    className="chapter-select-card-header"
                                                    onClick={() => !isComingSoon && toggleChapter(chapter.id)}
                                                >
                                                    <div className="chapter-info">
                                                        <span className="chapter-number">Capítulo {chapter.number}</span>
                                                        <h2>{chapter.title}</h2>
                                                        <p>{chapter.description}</p>
                                                    </div>
                                                    {!isComingSoon && (
                                                        <button className="play-chapter-btn">
                                                            {isChapterOpen ? "Recolher Cenas ▲" : "Ver Cenas ▼"}
                                                        </button>
                                                    )}
                                                </div>

                                                {/* Cenas Internas do Capítulo */}
                                                {isChapterOpen && !isComingSoon && (
                                                    <div className="scenes-grid">
                                                        {chapter.scenes.map((scene) => (
                                                            <div 
                                                                key={scene.id} 
                                                                className={`scene-item-card ${scene.isUnlocked ? "" : "locked-scene"}`}
                                                                onClick={() => {
                                                                    if (scene.isUnlocked) {
                                                                        navigate(`/historia/${chapter.id}`);
                                                                    }
                                                                }}
                                                            >
                                                                <div className="scene-details">
                                                                    <h4>{scene.title}</h4>
                                                                    {scene.duration && <span>⏱ {scene.duration}</span>}
                                                                </div>
                                                                <div className="play-chapter-btn" style={{ textAlign: "center", marginTop: "8px", fontSize: "0.8rem" }}>
                                                                    {scene.isUnlocked ? "Iniciar Cena ▶" : "Bloqueada 🔒"}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {isComingSoon && (
                                                    <div style={{ padding: "20px", color: "#8892b0", fontStyle: "italic" }}>
                                                        Em breve... Novos segredos aguardam.
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </main>
    );
}