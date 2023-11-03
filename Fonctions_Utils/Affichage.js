// Met à jour l'affichage des PV du Pokémon du joueur (pokemon1), de l'adversaire (pokemon2) et dans l'équipe (index)
export function MAJ_PV_Actuel_Pokemon(pokemon1, index, pokemon2) {
    let PV_Actuel1 = document.getElementById("PV1")
    PV_Actuel1.textContent = `PV: ${pokemon1.PV_Actuel} / ${pokemon1.PV_Max}`
    PV_Actuel1 = document.getElementById(`equipe1-${index}`)
    PV_Actuel1.textContent = `PV: ${pokemon1.PV_Actuel} / ${pokemon1.PV_Max}`
    let PV_Actuel2 = document.getElementById("PV2")
    PV_Actuel2.textContent = `PV: ${pokemon2.PV_Actuel} / ${pokemon2.PV_Max}`
}

// Utilise les information contenu dans l'instance de Jeu pour afficher le pokémon actif du joueur, de l'adversaire et l'équipe du joueur
export function affichageGeneral(Jeu){
    affichePokemon1(Jeu.equipes[0].pokemons[Jeu.index_pokemon1], Jeu)
    affichePokemon2(Jeu.equipes[1].pokemons[Jeu.index_pokemon2])
    afficherEquipe1(Jeu.equipes[0], Jeu)
}

// Génère l'affichage d'un pokémon dans la liste de l'équipe
export function genererCartePokemon(pokemon, pkm_index, equipe, index) {
    return `
        <button class="equipe${index}-pokemon-card">
            <div class="${equipe.dresseur}">
                <h5 class="card-title">${pokemon.nom}</h5>
                <p id="equipe${index}-${pkm_index}" class="card-text">PV: ${pokemon.PV_Actuel} / ${pokemon.PV_Max}</p>
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

// Génère l'affichage d'un pokemon actif, l'index permet de savoir si le pokemon appartient à l'équipe de gauche (index == 1) ou de droite (index == 2)
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

// Génère l'affichage d'une capacité du pokémon de l'équipe 1
export function genererCapacitePokemon(capacite) {
    return `<li><button class="capa">${capacite.Nom_capa}</button></li>`;
}

// Déclenche les fonctions pour afficher les pokémons de l'équipe 1
export function afficherEquipe1(equipe, jeu) {
    const equipeContainer = document.getElementById("equipe1");
    equipe.pokemons.forEach((pokemon, pkm_index) => {
        const cartePokemon = genererCartePokemon(pokemon, pkm_index, equipe, 1);
        equipeContainer.innerHTML += cartePokemon;
    });
    const pokemon_card = document.querySelectorAll(".equipe1-pokemon-card");
    for (const [index, element] of pokemon_card.entries()) {
        element.addEventListener("click", function(event) {
            const boutonsCapa = document.getElementById("capa-list1");
            boutonsCapa.innerHTML = ``
            jeu.Ordre_Action(4, index)
            affichePokemon1(jeu.equipes[0].pokemons[jeu.index_pokemon1], jeu)
        })
    }
}

// Déclenche les fonctions pour afficher le pokemon actif du joueur 1 et ses capacités
export function affichePokemon1(pokemon1, jeu) {
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
            jeu.Ordre_Action(index)
        })
    }
}

// Déclenche les fonctions pour afficher le pokémon actif de l'adversaire
export function affichePokemon2(pokemon2) {
    const pokemonContainer = document.getElementById("pokemon2");
    const cartePokemon = genererCartePokemonCombat(pokemon2, 2);
    pokemonContainer.innerHTML = cartePokemon;
}