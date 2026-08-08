import type { Chapter } from "../../types/chapter";
import { SceneViewer } from "./SceneViewer";
import "../../styles/story.css";

interface ChapterViewerProps {
    chapter: Chapter;
    currentScene: number;
    currentCutscene: number;
    nextCutscene: () => void;
    previousCutscene: () => void;
    previousScene: () => void;
    nextScene: () => void;
}

export function ChapterViewer({
    chapter,
    currentScene,
    currentCutscene,
    nextCutscene,
    previousCutscene,
    previousScene,
    nextScene,
}: ChapterViewerProps) {

    const scene = chapter.scenes[currentScene];

    if (!scene) {
        return (
            <section className="chapter-card error-card">
                <h2>
                    Cena não encontrada.
                </h2>
                <p>
                    Esta parte da história ainda não foi revelada.
                </p>
            </section>
        );
    }

    return (
        <section className="chapter-viewer">
            <section className="chapter-card">
                <header className="chapter-header">
                    <span className="chapter-label">
                        CENA {scene.order}
                    </span>

                    <h1>
                        {chapter.title}
                    </h1>

                    <p>
                        {chapter.description}
                    </p>
                </header>
            </section>

            <SceneViewer
                scene={scene}
                currentSceneIndex={currentScene}
                totalScenes={chapter.scenes.length}
                currentCutscene={currentCutscene}
                nextCutscene={nextCutscene}
                previousCutscene={previousCutscene}
                previousScene={previousScene}
                nextScene={nextScene}
            />
        </section>
    );
}