import { PlayerService } from "../player/PlayerService";

import type { UnlockId } from "../../types/unlocks";

export const unlockService = {

    async isUnlocked(
        uid: string,
        unlockId: UnlockId
    ): Promise<boolean> {

        return PlayerService.isUnlocked(
            uid,
            unlockId
        );

    },

    async unlock(
        uid: string,
        unlockId: UnlockId
    ): Promise<void> {

        return PlayerService.unlock(
            uid,
            unlockId
        );

    },

    async lock(
        uid: string,
        unlockId: UnlockId
    ): Promise<void> {

        return PlayerService.lock(
            uid,
            unlockId
        );

    },

    async getAll(
        uid: string
    ): Promise<UnlockId[]> {

        const player =
            await PlayerService.getPlayer(uid);

        if (!player?.unlocks) {

            return [];

        }

        const result: UnlockId[] = [];

        Object.entries(player.unlocks)
            .forEach(([category, values]) => {

                if (
                    typeof values !== "object" ||
                    values === null
                ) {
                    return;
                }

                Object.entries(values)
                    .forEach(([id, unlocked]) => {

                        if (unlocked === true) {

                            result.push(
                                `${category}.${id}` as UnlockId
                            );

                        }

                    });

            });

        return result;

    },

};