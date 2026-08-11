import {
    useEffect,
    useMemo,
    useState,
} from "react";

import {
    useAuth,
} from "../hooks/useAuth";

import {
    PlayerService,
} from "../services/player/PlayerService";

import {
    resolveUnlock,
} from "../services/player/UnlockResolver";

import type {
    PlayerData,
} from "../types/user";

import "../styles/profile.css";

export default function Profile() {
    const { user } = useAuth();

    const [player, setPlayer] =
        useState<PlayerData | null>(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {
        async function loadProfile() {
            if (!user) {
                setLoading(false);
                return;
            }

            try {
                const data =
                    await PlayerService.getOrCreatePlayer(
                        user
                    );

                setPlayer(data);
            }
            catch (error) {
                console.error(
                    "Erro carregando perfil:",
                    error
                );
            }
            finally {
                setLoading(false);
            }
        }

        loadProfile();
    }, [user]);

    const unlockedItems =
        useMemo(() => {
            if (!player) {
                return [];
            }

            const result: string[] = [];

            Object.entries(
                player.unlocks ?? {}
            )
            .forEach(
                ([category, value]) => {
                    if (
                        typeof value === "object" &&
                        value !== null
                    ) {
                        Object.entries(value)
                        .forEach(
                            ([id, status]) => {
                                if (status === true) {
                                    result.push(
                                        `${category}.${id}`
                                    );
                                }
                            }
                        );
                    }
                }
            );

            return result;
        }, [player]);

    const symbolsUnlocked =
        useMemo(() => {
            return unlockedItems
                .filter(
                    item =>
                    item.startsWith(
                        "symbol."
                    )
                )
                .map(
                    unlockId =>
                    resolveUnlock(
                        unlockId
                    )
                )
                .filter((symbol): symbol is NonNullable<typeof symbol> => {
                    if (!symbol || typeof symbol !== 'object') return false;
                    return 'rarity' in symbol || 'rarities' in symbol;
                });
        }, [unlockedItems]);

    // Helper para formatar os últimos desbloqueios de forma amigável
    const formatUnlockName = (itemKey: string) => {
        const resolved = resolveUnlock(itemKey);
        if (resolved && typeof resolved === 'object' && 'name' in resolved && resolved.name) {
            return resolved.name;
        }
        
        // Fallback caso não resolva via helper: limpa o prefixo e formata
        const [category, id] = itemKey.split(".");
        const formattedId = id ? id.replace(/[-_]/g, " ") : itemKey;
        const capitalizedId = formattedId.charAt(0).toUpperCase() + formattedId.slice(1);
        
        const categoryMap: Record<string, string> = {
            symbol: "Símbolo",
            character: "Personagem",
            location: "Região",
            fragment: "Fragmento"
        };

        const catName = categoryMap[category] || category;
        return `${catName}: ${capitalizedId}`;
    };

    const statistics =
        useMemo(() => {
            function count(
                category: string
            ) {
                if (!player) {
                    return 0;
                }

                const data: any =
                    (player.unlocks as any)?.[category];

                if (!data) {
                    return 0;
                }

                return Object.values(data)
                    .filter(Boolean)
                    .length;
            }

            return {
                characters:
                    count("character"),

                locations:
                    count("location"),

                fragments:
                    count("fragment"),

                symbols:
                    count("symbol"),
            };
        }, [player]);

    const progressPercentage =
        useMemo(() => {
            if (!player) {
                return 0;
            }

            const chapter =
                player.progress?.currentChapter ?? 1;

            const scene =
                player.progress?.currentScene ?? 1;

            return Math.min(
                (
                    ((chapter - 1) * 10)
                    +
                    scene
                ),
                100
            );
        }, [player]);

    if (loading) {
        return (
            <div className="profile-loading">
                Carregando perfil...
            </div>
        );
    }

    if (!user) {
        return (
            <main className="profile-container">
                <h2>
                    Faça login para acessar seu perfil.
                </h2>
            </main>
        );
    }

    return (
        <main className="profile-container">

            {/* PERFIL */}
            <section className="profile-header">
                <div className="profile-avatar">
                    {
                    user.photoURL
                    ?
                    <img
                        src={user.photoURL}
                        alt="Avatar"
                    />
                    :
                    <span>
                        {
                            user.displayName
                            ?.charAt(0)
                            ??
                            "J"
                        }
                    </span>
                    }
                </div>

                <div className="profile-info">
                    <h1>
                        {
                            player?.profile?.displayName
                            ??
                            "Jogador"
                        }
                    </h1>

                    <p>
                        {
                            player?.profile?.email
                            ??
                            user.email
                        }
                    </p>

                    <span className="player-title">
                        Viajante dos Fragmentos
                    </span>
                </div>
            </section>

            {/* SIMBOLOS */}
            <section className="profile-card symbols-section">
                <h2>
                    Símbolos descobertos
                </h2>

                <div className="symbols-grid">
                    {
                    symbolsUnlocked.length === 0
                    ?
                    <div className="symbol-item locked">
                        🔒
                        <span>
                            Nenhum símbolo encontrado
                        </span>
                    </div>
                    :
                    symbolsUnlocked.map(
                        symbol => {
                            const symName = symbol && 'name' in symbol ? (symbol.name as string) : "Símbolo Desconhecido";
                            const symImage = symbol && 'image' in symbol ? (symbol.image as string) : "";
                            const symDesc = symbol && 'description' in symbol ? (symbol.description as string) : "";
                            const symRarity = symbol && 'rarity' in symbol ? (symbol.rarity as string) : "common";

                            return (
                                <div
                                    key={symbol && 'id' in symbol ? (symbol.id as string) : Math.random()}
                                    className="symbol-item unlocked"
                                >
                                    <img
                                        src={symImage}
                                        alt={symName}
                                        loading="lazy"
                                    />

                                    <div>
                                        <h3>
                                            {symName}
                                        </h3>

                                        <p>
                                            {symDesc}
                                        </p>

                                        <span>
                                            Raridade:
                                            {" "}
                                            {symRarity}
                                        </span>
                                    </div>
                                </div>
                            );
                        }
                    )
                    }
                </div>
            </section>

            {/* JORNADA */}
            <section className="profile-card progress-card">
                <h2>
                    Jornada
                </h2>

                <div className="chapter-info">
                    <strong>
                        Capítulo {
                            player?.progress?.currentChapter ?? 1
                        }
                    </strong>

                    <span>
                        Cena {
                            player?.progress?.currentScene ?? 1
                        }
                    </span>
                </div>

                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{
                            width:
                            `${progressPercentage}%`
                        }}
                    />
                </div>

                <small>
                    {progressPercentage}% da jornada
                </small>
            </section>

            {/* COLEÇÃO */}
            <section className="profile-card">
                <h2>
                    Coleção
                </h2>

                <div className="stats-grid">
                    <article>
                        <span>
                            Personagens
                        </span>
                        <strong>
                            {statistics.characters}
                        </strong>
                    </article>

                    <article>
                        <span>
                            Regiões
                        </span>
                        <strong>
                            {statistics.locations}
                        </strong>
                    </article>

                    <article>
                        <span>
                            Fragmentos
                        </span>
                        <strong>
                            {statistics.fragments}
                        </strong>
                    </article>

                    <article>
                        <span>
                            Símbolos
                        </span>
                        <strong>
                            {statistics.symbols}
                        </strong>
                    </article>
                </div>
            </section>

            {/* HISTÓRICO */}
            <section className="profile-card">
                <h2>
                    Últimos desbloqueios
                </h2>

                <ul className="unlock-list">
                    {
                    unlockedItems.length === 0
                    ?
                    <li>
                        Sua jornada ainda começou.
                    </li>
                    :
                    unlockedItems
                    .slice(-5)
                    .reverse()
                    .map(
                        item => (
                            <li key={item}>
                                ✨ {formatUnlockName(item)}
                            </li>
                        )
                    )
                    }
                </ul>
            </section>

            {/* FUTURO */}
            <section className="profile-card future-section">
                <h2>
                    Próximamente
                </h2>

                <div className="future-grid">
                    <div>
                        🏆
                        <span>
                            Títulos
                        </span>
                    </div>

                    <div>
                        ⚔️
                        <span>
                            Ranking
                        </span>
                    </div>

                    <div>
                        📜
                        <span>
                            Conquistas
                        </span>
                    </div>
                </div>
            </section>

        </main>
    );
}