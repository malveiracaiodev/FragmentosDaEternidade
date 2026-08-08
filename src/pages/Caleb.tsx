import { CharacterProfile } from "../components/lore/CharacterProfile";
import { UnlockGuard } from "../components/lore/UnlockGuard";

import { caleb } from "../data/characters";

import "../styles/characterProfile.css";


export default function Caleb() {

  return (

    <UnlockGuard unlockId={caleb.unlockId}>

      <CharacterProfile
        character={caleb}
      />

    </UnlockGuard>

  );

}