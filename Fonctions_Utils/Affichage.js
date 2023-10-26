export function MAJ_PV_Actuel_Pokemon(pokemon1, pokemon2) {
    let PV_Actuel1 = document.getElementById("PV1")
    PV_Actuel1.textContent = `PV: ${pokemon1.PV_Actuel} / ${pokemon1.PV_Max}`
    PV_Actuel1 = document.getElementById(`equipe1-${pokemon1.nom}`)
    PV_Actuel1.textContent = `PV: ${pokemon1.PV_Actuel} / ${pokemon1.PV_Max}`
    let PV_Actuel2 = document.getElementById("PV2")
    PV_Actuel2.textContent = `PV: ${pokemon2.PV_Actuel} / ${pokemon2.PV_Max}`
}

export function affichageGeneral(Partie){
    affichePokemon1(Partie.dresseurs[0].pokemons[Partie.index_pokemon1], Partie.dresseurs[1].pokemons[Partie.index_pokemon2], Partie)
    affichePokemon2(Partie.dresseurs[1].pokemons[Partie.index_pokemon2])
    afficherEquipe1(Partie.dresseurs[0], Partie)
}

export function genererCartePokemon(pokemon, equipe, index) {
    return `
        <button class="equipe${index}-pokemon-card">
            <div class="${equipe.dresseur}">
                <h5 class="card-title">${pokemon.nom}</h5>
                <p id="equipe${index}-${pokemon.nom}" class="card-text">PV: ${pokemon.PV_Actuel} / ${pokemon.PV_Max}</p>
                <p class="card-text">Type 1: ${pokemon.type1}</p>
                <p class="card-text">Type 2: ${pokemon.type2}</p>
                <ul>
                    <li>${pokemon.capacites[0].Nom_capa}</li>
                    <li>${pokemon.capacites[1].Nom_capa}</li>
                    <li>${pokemon.capacites[2].Nom_capa}</li>
                    <li>${pokemon.capacites[3].Nom_capa}</li>
                </ul>
            </div>
        </button>
    `;
}

export function genererCartePokemonCombat(pokemon, index) {
    return `
        <div class="card" data-index="${index}">
            <div class="pokemon-infos">
                <h5 class="card-title">${pokemon.nom}</h5>
                <p class="card-text" id="PV${index}">PV: ${pokemon.PV_Actuel} / ${pokemon.PV_Max}</p>
                <p class="card-text">Type 1: ${pokemon.type1}</p>
                <p class="card-text">Type 2: ${pokemon.type2}</p>
            </div>
            <img class="pokemon-image" src="${pokemon.image}" alt="${pokemon.nom}" />
        </div>
    `;
}

export function genererCapacitePokemon(capacite) {
    return `<li><button class="capa">${capacite.Nom_capa}</button></li>`;
}

export function afficherEquipe1(equipe, partie) {
    const equipeContainer = document.getElementById("equipe1");
    equipe.pokemons.forEach(pokemon => {
        const cartePokemon = genererCartePokemon(pokemon, equipe, 1);
        equipeContainer.innerHTML += cartePokemon;
    });
    const pokemon_card = document.querySelectorAll(".equipe1-pokemon-card");
    for (const [index, element] of pokemon_card.entries()) {
        element.addEventListener("click", function(event) {
            const boutonsCapa = document.getElementById("capa-list1");
            boutonsCapa.innerHTML = ``
            partie.Ordre_Action(4, index)
            affichePokemon1(partie.dresseurs[0].pokemons[partie.index_pokemon1], partie.dresseurs[1].pokemons[partie.index_pokemon2], partie)
        })
    }
}

export function afficherEquipe2(equipe) {
    const equipeContainer = document.getElementById("equipe2");
    equipe.pokemons.forEach(pokemon => {
        const cartePokemon = genererCartePokemon(pokemon, equipe, 2);
        equipeContainer.innerHTML += cartePokemon;
    });
}

export function affichePokemon1(pokemon1, pokemon2, partie) {
    const pokemonContainer = document.getElementById("pokemon1");
    const cartePokemon = genererCartePokemonCombat(pokemon1, 1);
    pokemonContainer.innerHTML = cartePokemon;
    const boutonsCapa = document.getElementById("capa-list1");
    for (const element of pokemon1.capacites) {
        boutonsCapa.innerHTML += genererCapacitePokemon(element)
    }
    const Capacites = document.querySelectorAll(".capa");
    for (const [index, element] of Capacites.entries()) {
        element.addEventListener("click", function(event) {
            partie.Ordre_Action(index)
        })
    }
}

export function affichePokemon2(pokemon2) {
    const pokemonContainer = document.getElementById("pokemon2");
    const cartePokemon = genererCartePokemonCombat(pokemon2, 2);
    pokemonContainer.innerHTML = cartePokemon;
}