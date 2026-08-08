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
                <button
                    className="back-to-guide-btn"
                    onClick={() => navigate("/historia")}
                >
                    ← Voltar aos Capítulos
                </button>

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