import {
    useEffect,
    useState
} from "react";

import { useAuth } from "../../hooks/useAuth";
import { PlayerService } from "../../services/player/PlayerService";
import type { UnlockId } from "../../types/unlocks";

interface UnlockButtonProps {
    unlocks: {
        reward?: {
            id: UnlockId;
            name: string;
        };
    };
}

export default function UnlockButton({
    unlocks
}: UnlockButtonProps) {

    const { user } = useAuth();
    const [unlocked, setUnlocked] = useState(false);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        async function check() {
            if (!user || !unlocks.reward) {
                setLoading(false);
                return;
            }

            try {
                const result = await PlayerService.isUnlocked(
                    user.uid,
                    unlocks.reward.id
                );
                setUnlocked(result);
            } catch (error) {
                console.error("Erro ao verificar desbloqueio:", error);
            } finally {
                setLoading(false);
            }
        }

        check();
    }, [user, unlocks.reward?.id]);

    async function handleUnlock() {
        if (!user || !unlocks.reward) {
            alert("Faça login para salvar sua jornada.");
            return;
        }

        try {
            setSaving(true);
            await PlayerService.unlock(
                user.uid,
                unlocks.reward.id
            );
            setUnlocked(true);
        } catch (error) {
            console.error("Erro ao desbloquear:", error);
        } finally {
            setSaving(false);
        }
    }

    if (loading || !unlocks.reward) {
        return null;
    }

    return (
        <button
            type="button"
            className={`unlock-button ${unlocked ? "unlocked" : ""}`}
            disabled={unlocked || saving}
            onClick={handleUnlock}
        >
            {unlocked ? (
                <>✓ CONTEÚDO DESBLOQUEADO: {unlocks.reward.name}</>
            ) : saving ? (
                "⏳ SALVANDO..."
            ) : (
                `🔓 DESBLOQUEAR ${unlocks.reward.name}`
            )}
        </button>
    );
}

export { UnlockButton };
