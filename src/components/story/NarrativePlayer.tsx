import {
    useCallback,
    useEffect,
    useState
} from "react";

import "../../styles/story.css";

import type { Chapter } from "../../types/chapter";

import { ChapterViewer } from "./ChapterViewer";

import { useAuth } from "../../hooks/useAuth";

import {
    PlayerService
} from "../../services/player/PlayerService";

interface NarrativePlayerProps {
    chapter: Chapter;
}

export function NarrativePlayer({
    chapter,
}: NarrativePlayerProps) {

    const { user } = useAuth();

    const [currentScene, setCurrentScene] =
        useState(0);

    const [currentCutscene, setCurrentCutscene] =
        useState(0);

    const [loaded, setLoaded] =
        useState(false);

    /*
    ==========================
    RESTAURAR PROGRESSO
    ==========================
    */
    useEffect(()=>{
        async function restore(){
            if(!user){
                setLoaded(true);
                return;
            }

            const player =
                await PlayerService.getPlayer(
                    user.uid
                );

            if(player?.progress){
                const sceneIndex =
                    player.progress.currentScene - 1;

                const cutsceneIndex =
                    player.progress.currentCutscene - 1;

                if(
                    sceneIndex >= 0 &&
                    sceneIndex < chapter.scenes.length
                ){
                    setCurrentScene(
                        sceneIndex
                    );

                    const scene =
                        chapter.scenes[sceneIndex];

                    if(
                        cutsceneIndex >= 0 &&
                        cutsceneIndex < scene.cutscenes.length
                    ){
                        setCurrentCutscene(
                            cutsceneIndex
                        );
                    }
                }
            }

            setLoaded(true);
        }

        restore();
    },[
        user,
        chapter
    ]);

    const scene =
        chapter.scenes[currentScene];

    /*
    ==========================
    SALVAR PROGRESSO
    ==========================
    */
    useEffect(()=>{
        async function save(){
            if(
                !user ||
                !loaded ||
                !scene
            ){
                return;
            }

            await PlayerService.updateProgress(
                user.uid,
                {
                    currentChapter:
                        Number(
                            String(chapter.id)
                            .replace(
                                "capitulo-",
                                ""
                            )
                        ),

                    currentScene:
                        currentScene + 1,

                    currentCutscene:
                        currentCutscene + 1,
                }
            );
        }

        save();
    },[
        user,
        loaded,
        currentScene,
        currentCutscene,
        chapter.id,
        scene
    ]);

    /*
    ==========================
    PRÓXIMA CENA
    ==========================
    */
    const nextScene = useCallback(()=>{
        if(
            currentScene >=
            chapter.scenes.length - 1
        ){
            return;
        }

        setCurrentScene(
            value =>
                value + 1
        );

        setCurrentCutscene(0);
    },[
        currentScene,
        chapter.scenes.length
    ]);

    /*
    ==========================
    CENA ANTERIOR
    ==========================
    */
    const previousScene = useCallback(()=>{
        if(currentScene <= 0){
            return;
        }

        setCurrentScene(
            value =>
                value - 1
        );

        setCurrentCutscene(0);
    },[
        currentScene
    ]);

    /*
    ==========================
    PRÓXIMA CUTSCENE
    ==========================
    */
    const nextCutscene = useCallback(()=>{
        if(
            currentCutscene <
            scene.cutscenes.length - 1
        ){
            setCurrentCutscene(
                value =>
                    value + 1
            );
            return;
        }

        nextScene();
    },[
        currentCutscene,
        scene,
        nextScene
    ]);

    /*
    ==========================
    CUTSCENE ANTERIOR
    ==========================
    */
    const previousCutscene = useCallback(()=>{
        if(currentCutscene > 0){
            setCurrentCutscene(
                value =>
                    value - 1
            );
            return;
        }

        previousScene();
    },[
        currentCutscene,
        previousScene
    ]);

    if(!chapter.scenes.length){
        return (
            <div className="narrative-wrapper">
                <div className="chapter-card error-card">
                    <p>Este capítulo ainda não possui cenas.</p>
                </div>
            </div>
        );
    }

    if(!scene){
        return (
            <div className="narrative-wrapper">
                <div className="chapter-card error-card">
                    <p>Cena não encontrada.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="narrative-wrapper">
            <ChapterViewer
                chapter={chapter}
                currentScene={
                    currentScene
                }
                currentCutscene={
                    currentCutscene
                }
                nextCutscene={
                    nextCutscene
                }
                previousCutscene={
                    previousCutscene
                }
                nextScene={
                    nextScene
                }
                previousScene={
                    previousScene
                }
            />
        </div>
    );
}