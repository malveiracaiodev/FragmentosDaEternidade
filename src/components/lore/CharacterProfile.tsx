import type { ReactNode } from "react";
import type { Character } from "../../types/character";

import "../../styles/characterProfile.css";


interface CharacterProfileProps {

    character: Character;

}



export function CharacterProfile({

    character,

}: CharacterProfileProps) {


return (


<main className="character-profile">



<section className="character-banner">


<div className="banner-placeholder">

<span>
Registro de personagem
</span>

</div>



<div className="banner-overlay">


<h1>
{character.identity.name}
</h1>


<h2>
{character.identity.title}
</h2>


</div>


</section>






<section className="character-header">



<div className="character-image">


{character.media.portrait ? (


<img

src={character.media.portrait}

alt={character.identity.name}

className="character-portrait"

/>


) : (


<div className="character-placeholder">

Imagem em desenvolvimento

</div>


)}


</div>





<div className="character-introduction">


<h1>

{character.identity.name}

</h1>



<h2>

{character.identity.title}

</h2>



<p className="character-summary">

{character.biography.summary}

</p>



</div>


</section>









<section className="character-card">


<h2>

Informações Gerais

</h2>



<div className="character-details">


<LockedDetail

label="Idade"

value={String(character.attributes.age)}

/>



<LockedDetail

label="Altura"

value={character.attributes.height}

unlocked

/>



<LockedDetail

label="Raça"

value={character.attributes.race}

/>



<LockedDetail

label="Gênero"

value={character.attributes.gender}

unlocked

/>



<LockedDetail

label="Origem"

value={character.world.origin}

/>



<LockedDetail

label="Status"

value={character.world.status}

unlocked

/>



<LockedDetail

label="Clã"

value={character.world.clan}

/>



<LockedDetail

label="Guilda"

value={character.world.guild}

/>



</div>


</section>









<Section title="Biografia">


<p>

{character.biography.biography}

</p>


</Section>








<Section title="Personalidade">


<p>

{character.biography.personality || "???"}

</p>


</Section>









<Section title="Aparência">


<p>

{character.biography.appearance}

</p>


</Section>









<section className="character-card">


<h2>

Habilidades

</h2>


<AbilityList

title="Poderes"

items={character.abilities.powers}

/>


<AbilityList

title="Armas"

items={character.abilities.weapons}

/>


<AbilityList

title="Técnicas"

items={character.abilities.techniques}

/>


<AbilityList

title="Skills"

items={character.abilities.skills}

/>


</section>









<section className="character-card">


<h2>

Linha do Tempo

</h2>


<p>

Primeira aparição:

<strong>

{" "}

{character.story.firstAppearance}

</strong>


</p>


<ul>

{

character.story.appearances.map(

(item)=>(

<li key={item}>

{item}

</li>

)

)

}

</ul>



</section>







</main>


);

}








function LockedDetail({

label,

value,

unlocked=false,


}:{

label:string;

value?:string;

unlocked?:boolean;


}){


return (


<div className="character-detail">


<span>

{label}

</span>


<strong>


{

unlocked

?

value

:

"???"

}


</strong>


</div>


);


}







function Section({

title,

children,


}:{

title:string;

children:ReactNode;


}){


return (

<section className="character-card">


<h2>

{title}

</h2>


{children}


</section>

);


}








function AbilityList({

title,

items,


}:{

title:string;

items?:string[];


}){


return (

<div className="ability-group">


<h3>

{title}

</h3>


{

items && items.length > 0

?


<ul>

{

items.map(

(item)=>(

<li key={item}>

{item}

</li>

)

)

}

</ul>


:


<p>

Fragmentos ainda não revelados.

</p>


}


</div>

);


}