import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  type DocumentReference,
} from "firebase/firestore";

import type { User } from "firebase/auth";

import { db } from "../../firebase/firestore";

import type {
  PlayerData,
  ContentUnlocks,
} from "../../types/user";

import type { UnlockId } from "../../types/unlocks";


export class PlayerService {

  private static readonly collection = "users";


  /**
   * Referência do documento do jogador.
   */
  private static playerRef(
    uid: string
  ): DocumentReference {
    return doc(
      db,
      this.collection,
      uid
    );
  }


  /**
   * Cria o jogador caso ele ainda não exista.
   */
  static async createPlayer(
    user: User
  ): Promise<void> {

    const ref = this.playerRef(user.uid);

    const snapshot = await getDoc(ref);

    if (snapshot.exists()) {
      return;
    }


    const player: PlayerData = {

      profile: {
        displayName:
          user.displayName ?? "Jogador",

        email:
          user.email ?? "",

        photoURL:
          user.photoURL ?? "",

        createdAt:
          new Date().toISOString(),
      },


      progress: {
        currentChapter: 1,
        currentScene: 1,
        currentCutscene: 1,
      },


     journey: {
  discoveredCharacters: [],
  discoveredLocations: [],
  discoveredFragments: [],
  discoveredSymbols: [],
  discoveredLore: [],

  discoveredCreatures: [],
  discoveredChapters: [],
  discoveredScenes: [],
  discoveredPowers: [],
  discoveredWeapons: [],
  discoveredClans: [],
  discoveredGuilds: [],
  discoveredAchievements: [],
  discoveredGovernments: [],
},


      unlocks: {

        character: {},
        chapter: {},
        scene: {},
        location: {},
        fragment: {},
        symbol: {},
        lore: {},
        achievement: {},
        clan: {},
        weapon: {},
        power: {},
        guild: {},

        // Categorias adicionais existentes
        // na versão atual de ContentUnlocks.
        creature: {},
        government: {},
      },


      settings: {},
    };


    await setDoc(
      ref,
      {
        ...player,
        updatedAt: serverTimestamp(),
      }
    );
  }


  /**
   * Verifica se o jogador existe.
   */
  static async exists(
    uid: string
  ): Promise<boolean> {

    const snapshot = await getDoc(
      this.playerRef(uid)
    );

    return snapshot.exists();
  }


  /**
   * Obtém os dados completos do jogador.
   */
  static async getPlayer(
    uid: string
  ): Promise<PlayerData | null> {

    const snapshot = await getDoc(
      this.playerRef(uid)
    );

    if (!snapshot.exists()) {
      return null;
    }

    return snapshot.data() as PlayerData;
  }


  /**
   * Obtém o jogador ou cria um novo caso
   * ele ainda não exista.
   */
  static async getOrCreatePlayer(
    user: User
  ): Promise<PlayerData | null> {

    const exists = await this.exists(
      user.uid
    );

    if (!exists) {
      await this.createPlayer(user);
    }

    return this.getPlayer(
      user.uid
    );
  }


  /**
   * Atualização genérica do documento.
   *
   * Aceita campos parciais do PlayerData.
   */
  static async update(
    uid: string,
    data: Record<string, unknown>
  ): Promise<void> {

    await updateDoc(
      this.playerRef(uid),
      {
        ...data,
        updatedAt: serverTimestamp(),
      }
    );
  }


  /**
   * Atualiza o progresso de leitura.
   *
   * Apenas os campos enviados são modificados.
   */
  static async updateProgress(
    uid: string,
    progress: Partial<PlayerData["progress"]>
  ): Promise<void> {

    const updates: Record<string, unknown> = {};

    if (
      progress.currentChapter !== undefined
    ) {
      updates["progress.currentChapter"] =
        progress.currentChapter;
    }

    if (
      progress.currentScene !== undefined
    ) {
      updates["progress.currentScene"] =
        progress.currentScene;
    }

    if (
      progress.currentCutscene !== undefined
    ) {
      updates["progress.currentCutscene"] =
        progress.currentCutscene;
    }

    if (Object.keys(updates).length === 0) {
      return;
    }

    await this.update(
      uid,
      updates
    );
  }


  /**
   * Desbloqueia um conteúdo.
   *
   * Exemplos:
   *
   * character.caleb
   * scene.chapter1.scene1
   * symbol.government
   */
  static async unlock(
    uid: string,
    unlockId: UnlockId
  ): Promise<void> {

    const parts = unlockId.split(".");

    const category = parts[0];
    const id = parts.slice(1).join(".");

    if (!category || !id) {
      return;
    }


    const validCategories:
      Array<keyof ContentUnlocks> = [

        "character",
        "chapter",
        "scene",
        "location",
        "fragment",
        "symbol",
        "lore",
        "achievement",
        "clan",
        "weapon",
        "power",
        "guild",
        "creature",
        "government",

      ];


    if (
      !validCategories.includes(
        category as keyof ContentUnlocks
      )
    ) {
      console.warn(
        `[PlayerService] Categoria de unlock desconhecida: ${category}`
      );

      return;
    }


    await this.update(
      uid,
      {
        [`unlocks.${category}.${id}`]: true,
      }
    );
  }


  /**
   * Bloqueia novamente um conteúdo.
   */
  static async lock(
    uid: string,
    unlockId: UnlockId
  ): Promise<void> {

    const parts = unlockId.split(".");

    const category = parts[0];
    const id = parts.slice(1).join(".");

    if (!category || !id) {
      return;
    }


    const validCategories:
      Array<keyof ContentUnlocks> = [

        "character",
        "chapter",
        "scene",
        "location",
        "fragment",
        "symbol",
        "lore",
        "achievement",
        "clan",
        "weapon",
        "power",
        "guild",
        "creature",
        "government",

      ];


    if (
      !validCategories.includes(
        category as keyof ContentUnlocks
      )
    ) {
      console.warn(
        `[PlayerService] Categoria de unlock desconhecida: ${category}`
      );

      return;
    }


    await this.update(
      uid,
      {
        [`unlocks.${category}.${id}`]: false,
      }
    );
  }


  /**
   * Verifica se determinado conteúdo está desbloqueado.
   */
  static async isUnlocked(
    uid: string,
    unlockId: UnlockId
  ): Promise<boolean> {

    const player =
      await this.getPlayer(uid);

    if (!player) {
      return false;
    }


    const parts = unlockId.split(".");

    const category = parts[0];
    const id = parts.slice(1).join(".");

    if (!category || !id) {
      return false;
    }


    const unlocks =
      player.unlocks;


    switch (category) {

      case "character":
        return Boolean(
          unlocks.character?.[id]
        );


      case "chapter":
        return Boolean(
          unlocks.chapter?.[id]
        );


      case "scene":
        return Boolean(
          unlocks.scene?.[id]
        );


      case "location":
        return Boolean(
          unlocks.location?.[id]
        );


      case "fragment":
        return Boolean(
          unlocks.fragment?.[id]
        );


      case "symbol":
        return Boolean(
          unlocks.symbol?.[id]
        );


      case "lore":
        return Boolean(
          unlocks.lore?.[id]
        );


      case "achievement":
        return Boolean(
          unlocks.achievement?.[id]
        );


      case "clan":
        return Boolean(
          unlocks.clan?.[id]
        );


      case "weapon":
        return Boolean(
          unlocks.weapon?.[id]
        );


      case "power":
        return Boolean(
          unlocks.power?.[id]
        );


      case "guild":
        return Boolean(
          unlocks.guild?.[id]
        );


      case "creature":
        return Boolean(
          unlocks.creature?.[id]
        );


      case "government":
        return Boolean(
          unlocks.government?.[id]
        );


      default:
        return false;
    }
  }


  /**
   * Retorna todos os conteúdos desbloqueados.
   */
  static async getAll(
    uid: string
  ): Promise<UnlockId[]> {

    const player =
      await this.getPlayer(uid);

    if (!player) {
      return [];
    }


    const result: UnlockId[] = [];


    const addUnlocked = (
      category: keyof ContentUnlocks,
      values: Record<string, boolean> | undefined
    ) => {

      if (!values) {
        return;
      }


      Object.entries(values)
        .forEach(([id, unlocked]) => {

          if (!unlocked) {
            return;
          }


          const unlockId =
            `${category}.${id}`;


          result.push(
            unlockId as UnlockId
          );
        });
    };


    addUnlocked(
      "character",
      player.unlocks.character
    );

    addUnlocked(
      "chapter",
      player.unlocks.chapter
    );

    addUnlocked(
      "scene",
      player.unlocks.scene
    );

    addUnlocked(
      "location",
      player.unlocks.location
    );

    addUnlocked(
      "fragment",
      player.unlocks.fragment
    );

    addUnlocked(
      "symbol",
      player.unlocks.symbol
    );

    addUnlocked(
      "lore",
      player.unlocks.lore
    );

    addUnlocked(
      "achievement",
      player.unlocks.achievement
    );

    addUnlocked(
      "clan",
      player.unlocks.clan
    );

    addUnlocked(
      "weapon",
      player.unlocks.weapon
    );

    addUnlocked(
      "power",
      player.unlocks.power
    );

    addUnlocked(
      "guild",
      player.unlocks.guild
    );

    addUnlocked(
      "creature",
      player.unlocks.creature
    );

    addUnlocked(
      "government",
      player.unlocks.government
    );


    return result;
  }


  /**
   * Atualiza uma configuração específica.
   */
  static async updateSettings(
    uid: string,
    settings: Partial<PlayerData["settings"]>
  ): Promise<void> {

    const updates: Record<string, unknown> = {};

    if (settings.theme !== undefined) {
      updates["settings.theme"] =
        settings.theme;
    }

    if (settings.language !== undefined) {
      updates["settings.language"] =
        settings.language;
    }

    if (
      settings.notifications !== undefined
    ) {
      updates["settings.notifications"] =
        settings.notifications;
    }


    if (Object.keys(updates).length === 0) {
      return;
    }


    await this.update(
      uid,
      updates
    );
  }


  /**
   * Atualiza uma informação do perfil.
   */
  static async updateProfile(
    uid: string,
    profile: Partial<PlayerData["profile"]>
  ): Promise<void> {

    const updates: Record<string, unknown> = {};


    if (
      profile.displayName !== undefined
    ) {
      updates["profile.displayName"] =
        profile.displayName;
    }


    if (
      profile.email !== undefined
    ) {
      updates["profile.email"] =
        profile.email;
    }


    if (
      profile.photoURL !== undefined
    ) {
      updates["profile.photoURL"] =
        profile.photoURL;
    }


    if (Object.keys(updates).length === 0) {
      return;
    }


    await this.update(
      uid,
      updates
    );
  }
}