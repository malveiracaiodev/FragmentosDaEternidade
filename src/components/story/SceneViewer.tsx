import type { Scene } from "../../types/chapter";
import { CutscenePlayer } from "./CutscenePlayer";
import UnlockButton from "./UnlockButton";
import "../../styles/story.css";

interface SceneViewerProps {
    scene: Scene;
    currentSceneIndex: number; // Adicionado para sabermos qual cena estamos
    totalScenes: number;       // Para validações extras se precisar
    currentCutscene: number;
    nextCutscene: () => void;
    previousCutscene: () => void;
    previousScene: () => void; // Adicionada função para voltar a cena inteira
    nextScene: () => void;
}

export function SceneViewer({
    scene,
    currentCutscene,
    nextCutscene,
    previousCutscene,
    previousScene,
    nextScene,
}: SceneViewerProps) {

    const cutscene = scene.cutscenes[currentCutscene];

    if (!cutscene) {
        return (
            <div className="scene-error">
                Cena não encontrada.
            </div>
        );
    }

    const isFirstCutscene = currentCutscene === 0;
    const isLastCutscene = currentCutscene === scene.cutscenes.length - 1;

    function handleNext() {
        if (isLastCutscene) {
            nextScene();
            return;
        }
        nextCutscene();
    }

    function handlePrevious() {
        if (isFirstCutscene) {
            previousScene(); // Volta para a cena anterior (tratado no ChapterReader)
            return;
        }
        previousCutscene();
    }

    return (
        <section className="scene-viewer">
            <CutscenePlayer cutscene={cutscene} />

            {cutscene.unlocks?.reward && (
                <div className="unlock-container">
                    <UnlockButton
                        unlocks={{
                            reward: cutscene.unlocks.reward
                        }}
                    />
                </div>
            )}

            <div className="scene-controls">
                {(!isFirstCutscene || scene.order > 1) && (
                    <button
                        className="scene-button previous"
                        onClick={handlePrevious}
                    >
                        {isFirstCutscene
                            ? "← Cena anterior"
                            : "← Cutscene anterior"}
                    </button>
                )}

                <button
                    className="scene-button next"
                    onClick={handleNext}
                >
                    {isLastCutscene
                        ? "Próxima cena →"
                        : "Próxima cutscene →"}
                </button>
            </div>
        </section>
    );
}