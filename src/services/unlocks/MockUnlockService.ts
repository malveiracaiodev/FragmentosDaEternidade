import type { UnlockId } from "../../types/unlocks";
import type { UnlockService } from "./UnlockService";
import { PlayerService } from "../player/PlayerService";

class MockUnlockService implements UnlockService {
  async isUnlocked(
    uid: string,
    unlockId: UnlockId
  ): Promise<boolean> {
    return PlayerService.isUnlocked(uid, unlockId);
  }

  async unlock(
    uid: string,
    unlockId: UnlockId
  ): Promise<void> {
    await PlayerService.unlock(uid, unlockId);
  }

  async lock(
    uid: string,
    unlockId: UnlockId
  ): Promise<void> {
    await PlayerService.lock(uid, unlockId);
  }

  async getAll(uid: string): Promise<UnlockId[]> {
    const player = await PlayerService.getPlayer(uid);

    if (!player) {
      return [];
    }

    const result: UnlockId[] = [];

    Object.entries(player.unlocks).forEach(
      ([category, value]) => {
        if (
          typeof value !== "object" ||
          value === null
        ) {
          return;
        }

        Object.entries(value).forEach(
          ([id, unlocked]) => {
            if (unlocked === true) {
              result.push(
                `${category}.${id}` as UnlockId
              );
            }
          }
        );
      }
    );

    return result;
  }
}

export default new MockUnlockService();
