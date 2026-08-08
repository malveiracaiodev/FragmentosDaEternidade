import type { Scene } from "../../types/chapter";

export class NarrativeService {
  static getCurrentCutscene(
    scene: Scene,
    currentCutscene: number
  ) {
    return scene.cutscenes[currentCutscene] ?? null;
  }

  static canGoNext(
    scene: Scene,
    currentCutscene: number
  ): boolean {
    return currentCutscene < scene.cutscenes.length - 1;
  }

  static canGoPrevious(
    currentCutscene: number
  ): boolean {
    return currentCutscene > 0;
  }

  static next(currentCutscene: number): number {
    return currentCutscene + 1;
  }

  static previous(currentCutscene: number): number {
    return currentCutscene - 1;
  }

  static isFirstCutscene(
    currentCutscene: number
  ): boolean {
    return currentCutscene === 0;
  }

  static isLastCutscene(
    scene: Scene,
    currentCutscene: number
  ): boolean {
    return currentCutscene === scene.cutscenes.length - 1;
  }

  static getProgress(
    scene: Scene,
    currentCutscene: number
  ) {
    return {
      current: currentCutscene + 1,
      total: scene.cutscenes.length,
      percentage:
        ((currentCutscene + 1) / scene.cutscenes.length) * 100,
    };
  }
}