import { Equipe } from "../Classes/Class_Equipe.js"
import { Jeu } from "../Classes/Class_Jeu.js"
import { Pokemon } from "../Classes/Class_Pokemon.js"
import { Statut } from "../Structures/Statut.js"

/**
 * Met à jour l'affichage des PV du Pokémon du joueur (pokemon1), de l'adversaire (pokemon2) et dans l'équipe (index)
 * @param {Pokemon} pokemon1 - Pokemon du joueur de gauche
 * @param {number} index - Index du pokemon actif du joueur
 * @param {Pokemon} pokemon2 - Pokemon du joueur de droite
 * @param {Equipe} equipe2 - Equipe du joueur de droite
 */
export function MAJ_PV_Actuel_Pokemon(pokemon1, index, pokemon2, equipe2) {
    document.getElementById("PV1-progress").value = pokemon1.PV_Actuel
    document.getElementById("PV1").textContent = `PV: ${pokemon1.PV_Actuel} / ${pokemon1.PV_Max}`
    document.getElementById(`equipe1-${index}`).textContent = `PV: ${pokemon1.PV_Actuel} / ${pokemon1.PV_Max}`
    document.getElementById(`equipe1-${index}-statut`).src = pokemon1.Statut.image
    document.getElementById(`pkm-statut-1`).src = pokemon1.Statut.image
    document.getElementById("PV2-progress").value = pokemon2.PV_Actuel
    document.getElementById("PV2").textContent = `PV: ${pokemon2.PV_Actuel} / ${pokemon2.PV_Max}`
    document.getElementById(`pkm-statut-2`).src = pokemon2.Statut.image
    document.getElementById(`${index}PPCapa0`).textContent = pokemon1.PP[0]
    document.getElementById(`${index}PPCapa1`).textContent = pokemon1.PP[1]
    document.getElementById(`${index}PPCapa2`).textContent = pokemon1.PP[2]
    document.getElementById(`${index}PPCapa3`).textContent = pokemon1.PP[3]
    afficherEquipe2(equipe2)
}

/**
 * Réinitialise la zone de texte pour la rendre vide
 */
export function reset_Zone_de_Texte() {
    document.getElementById("zone-de-texte").innerHTML = ""
}

/**
 * Ajoute du texte dans la zone de texte
 * @param {string} contenu - Texte à ajouter dans la zone de texte
 */
export function ecrire_dans_Zone_de_Texte(contenu) {
    document.getElementById("zone-de-texte").innerHTML += `${contenu}<br>`
}

/**
 * Utilise les information contenu dans l'instance de Jeu pour afficher le pokémon actif du joueur, de l'adversaire et l'équipe du joueur
 * @param {Jeu} Jeu Instance du Jeu
 */
export function affichageGeneral(Jeu){
    affichePokemon1(Jeu.equipes[0].pokemons[Jeu.index_pokemon1], Jeu)
    affichePokemon2(Jeu.equipes[1].pokemons[Jeu.index_pokemon2])
    afficherEquipe1(Jeu.equipes[0], Jeu)
    afficherEquipe2(Jeu.equipes[1])
}

/**
 * Génère l'affichage d'un pokémon dans la liste de l'équipe
 * @param {Pokemon} pokemon - Pokemon à afficher
 * @param {number} pkm_index - Index du pokemon
 * @param {Pokemon} equipe - Equipe du pokemon
 * @param {Equipe} index - Index de l'équipe
 * @returns {InnerHTML}
 */
export function genererCartePokemon(pokemon, pkm_index, equipe, index) {
    return `
        <button class="equipe${index}-pokemon-card">
            <div class="${equipe.dresseur}">
                <h5 class="card-title">${pokemon.nom}</h5>
                <p id="equipe${index}-${pkm_index}" class="card-text">PV: ${pokemon.PV_Actuel} / ${pokemon.PV_Max}</p>
                <img class="Team_Type" src="../Images_Types/Type_${pokemon.type1}.png"/>
                <img class="Team_Type" src="../Images_Types/Type_${pokemon.type2}.png"/>
                <p class="card-text-mini"><img id="equipe${index}-${pkm_index}-statut" class="statut-box" src="${pokemon.Statut.image}"></img></p>
                <ul>
                    <li class="list_Capa_mini"><div class="capa_mini ${pokemon.capacites[0].Type}">${pokemon.capacites[0].Nom_capa} <span class="PP_Capa_mini"><span id="${pkm_index}PPCapa${'0'}">${pokemon.PP[0]}</span>/${pokemon.capacites[0].PP}</span><img class="cat_Capa_mini" src="../Images_Catégories/${pokemon.capacites[0].Categorie}.png"/></div></li>
                    <li class="list_Capa_mini"><div class="capa_mini ${pokemon.capacites[1].Type}">${pokemon.capacites[1].Nom_capa} <span class="PP_Capa_mini"><span id="${pkm_index}PPCapa${'1'}">${pokemon.PP[1]}</span>/${pokemon.capacites[1].PP}</span><img class="cat_Capa_mini" src="../Images_Catégories/${pokemon.capacites[1].Categorie}.png"/></div></li>
                    <li class="list_Capa_mini"><div class="capa_mini ${pokemon.capacites[2].Type}">${pokemon.capacites[2].Nom_capa} <span class="PP_Capa_mini"><span id="${pkm_index}PPCapa${'2'}">${pokemon.PP[2]}</span>/${pokemon.capacites[2].PP}</span><img class="cat_Capa_mini" src="../Images_Catégories/${pokemon.capacites[2].Categorie}.png"/></div></li>
                    <li class="list_Capa_mini"><div class="capa_mini ${pokemon.capacites[3].Type}">${pokemon.capacites[3].Nom_capa} <span class="PP_Capa_mini"><span id="${pkm_index}PPCapa${'3'}">${pokemon.PP[3]}</span>/${pokemon.capacites[3].PP}</span><img class="cat_Capa_mini" src="../Images_Catégories/${pokemon.capacites[3].Categorie}.png"/></div></li>
                </ul>
            </div>
        </button>
    `;
}
{/*  */}


/**
 * Génère l'affichage d'un pokemon actif, l'index permet de savoir si le pokemon appartient à l'équipe de gauche (index == 1) ou de droite (index == 2)
 * @param {Pokemon} pokemon 
 * @param {number} index 
 * @returns {InnerHTML}
 */
export function genererCartePokemonCombat(pokemon, index) {
    return `
        <div class="card" data-index="${index}">
            <div class="pokemon-infos">
                <h5 class="card-title">${pokemon.nom}</h5>
                <progress id="PV${index}-progress" value="${pokemon.PV_Actuel}" max="${pokemon.PV_Max}">${pokemon.PV_Actuel} / ${pokemon.PV_Max}</progress>
                <p class="card-text" id="PV${index}">PV: ${pokemon.PV_Actuel} / ${pokemon.PV_Max}</p>
                <img class="Pokemon_Type" src="../Images_Types/Type_${pokemon.type1}.png"/>
                <img class="Pokemon_Type" src="../Images_Types/Type_${pokemon.type2}.png"/>
                <p class="card-text">Statut: <img id="pkm-statut-${index}" class="statut-box" src="${pokemon.Statut.image}"></img></p>
            </div>
            <img class="pokemon-image" src="${pokemon.image}" alt="${pokemon.nom}" />
        </div>
    `;
}


/**
 * Génère l'affichage d'une capacité du pokémon de l'équipe 1
 * @param {Object} capacite La capacité à afficher 
 * @returns 
 */
export function genererCapacitePokemon(capacite, nb_PP, index) {
    return `<li class="list_Capa"><button class="capa ${capacite.Type}">${capacite.Nom_capa} <span class="PP_Capa"><span id="PPCapa${index}">${nb_PP}</span>/${capacite.PP}</span><img class="cat_Capa" src="../Images_Catégories/${capacite.Categorie}.png"/></button></li>`;
}

/**
 * Déclenche les fonctions pour afficher les pokémons de l'équipe 1
 * @param {Equipe} equipe Instance de l'équipe à afficher
 * @param {Jeu} jeu Instance du jeu
 */
export function afficherEquipe1(equipe, jeu) {
    const equipeContainer = document.getElementById("equipe1");
    equipe.pokemons.forEach((pokemon, pkm_index) => {
        const cartePokemon = genererCartePokemon(pokemon, pkm_index, equipe, 1);
        equipeContainer.innerHTML += cartePokemon;
    });
    const pokemon_card = document.querySelectorAll(".equipe1-pokemon-card");
    for (const [index, element] of pokemon_card.entries()) {
        element.addEventListener("click", function(event) {
            document.getElementById("capa-list1").innerHTML = ``;
            jeu.Ordre_Action(4, index)
            affichePokemon1(jeu.equipes[0].pokemons[jeu.index_pokemon1], jeu)
        })
    }
}

/**
 * Affiche le nombre et l'état des pokemons de l'adversaire
 * @param {Pokemon} pokemon Pokemon adverse
 * @param {number} index index du pokemon dans l'équipe
 * @returns {InnerHTML}
 */
function genererStatutEquipe2(pokemon, index) {
    return `<img id="equipe2-${index}" class="pokeball" src="${pokemon.KO ? "../Images_Pokemon/pokeball_ko.png" : pokemon.Statut != Statut.Aucun ? "../Images_Pokemon/pokeball_statut.png" : "../Images_Pokemon/pokeball_ok.png"}"></img>`;
}

/**
 * Permet d'afficher l'équipe de l'adversaire
 * @param {Equipe} equipe Instance de l'équipe à afficher
 */
export function afficherEquipe2(equipe) {
    const equipeContainer = document.getElementById("equipe2");
    equipeContainer.innerHTML = '';
    equipe.pokemons.forEach((pokemon, index) => {
        const cartePokemon = genererStatutEquipe2(pokemon, index);
        equipeContainer.innerHTML += cartePokemon;
    });
}

/**
 * Déclenche les fonctions pour afficher le pokemon actif du joueur 1 et ses capacités
 * @param {Pokemon} pokemon1 Instance du pokemon actif du joueur
 * @param {Jeu} jeu Instance du jeu
 */
export function affichePokemon1(pokemon1, jeu) {
    const cartePokemon = genererCartePokemonCombat(pokemon1, 1);
    document.getElementById("pokemon1").innerHTML = cartePokemon;
    const boutonsCapa = document.getElementById("capa-list1");
    for (const [index, element] of pokemon1.capacites.entries()) {
        boutonsCapa.innerHTML += genererCapacitePokemon(element, pokemon1.PP[index], index)
    }
    if (pokemon1.type2 !== "Aucun") {

    }
    const Capacites = document.querySelectorAll(".capa");
    for (const [index, element] of Capacites.entries()) {
        element.addEventListener("click", function(event) {
            jeu.Ordre_Action(index)
            document.getElementById(`PPCapa${index}`).textContent = pokemon1.PP[index]
        })
    }
    document.getElementById("aleatoire").addEventListener("click", function(event) {
        let valeur_aleatoire = Math.floor(Math.random() * 4)
        jeu.Ordre_Action(valeur_aleatoire)
        document.getElementById(`PPCapa${valeur_aleatoire}`).textContent = pokemon1.PP[valeur_aleatoire]
    })
}

/**
 * Déclenche les fonctions pour afficher le pokémon actif de l'adversaire
 * @param {Pokemon} pokemon2 
 */
export function affichePokemon2(pokemon2) {
    const cartePokemon = genererCartePokemonCombat(pokemon2, 2);
    document.getElementById("pokemon2").innerHTML = cartePokemon;
}