import { Pokemon } from "../Classes/Class_Pokemon.js"

/**
 * Permet de soigner le pokemon du total passé en paramètre
 * @param {Pokemon} pokemon Instance du pokemon à soigner
 * @param {number} total Total de points de vie à récupérer
 */
export function Soigner_PV(pokemon, total) {
    pokemon.PV_Actuel += total
    if (pokemon.PV_Actuel > pokemon.PV_Max){
        pokemon.PV_Actuel = pokemon.PV_Max
    }
    console.log(`${pokemon.nom} se soigne de ${total} points de vie !`)
}

/**
 * Permet de calculer la probabilité de déclencher un effet supplémentaire
 * @param {number} Chance 
 * @returns {boolean}
 */
export function Chance_Effet_Supplementaire(Chance) {
    let rand = Math.trunc(Math.random() * 100)
    return (rand <= Chance)
}

/**
 * Fait baisser la statistique d'un pokemon passé en paramètre
 * @param {Pokemon} pokemon Instance de pokemon
 * @param {string} stat Statistique à baisser
 */
export function Baisser_Stat(pokemon, stat) {
    console.log(`${stat} de ${pokemon.nom} diminue !`)
    pokemon[stat + '_Actuel'] = Math.trunc(pokemon[stat + '_Actuel'] / 1.3)
}

/**
 * Fait augmenter la statistique d'un pokemon passé en paramètre
 * @param {Pokemon} pokemon Instance de pokemon
 * @param {string} stat Statistique à augmenter
 */
export function Augmenter_Stat(pokemon, stat) {
    console.log(`${stat} de ${pokemon.nom} augmente !`)
    pokemon[stat + '_Actuel'] = Math.trunc(pokemon[stat + '_Actuel'] * 1.3)
}

/**
 * Inflige des dégats de recul au pokemon basé sur les dégats infligés et le pourcentage de dégats en recul
 * @param {Pokemon} pokemon Instance de pokemon
 * @param {number} degats Dégats infligés
 * @param {number} pourcentage Pourcentage de dégat à infliger en recul au pokemon
 */
export function Degat_de_Recul(pokemon, degats, pourcentage) {
    pokemon.PV_Actuel = Math.trunc(pokemon.PV_Actuel - (degats * pourcentage))
    console.log(`${pokemon.nom} subit des dégâts de recul`)
    pokemon.Check_KO()
}

/**
 * Fait augmenter la chance de critique d'un pokemon passé en paramètre
 * @param {Pokemon} pokemon Instance de pokemon
 */
export function Augmenter_Chances_Critique(pokemon) {
    if (pokemon.chance_Critique < 4) {
        console.log(`Les chances de critique de ${pokemon.nom} augmentent !`)
        pokemon.chance_Critique +=1
    } else {
        console.log(`Les chances de critique de ${pokemon.nom} ne peuvent plus augmenter !`)
    }
}

/**
 * Fait augmenter la chance de critique d'un pokemon passé en paramètre
 * @param {Pokemon} pokemon Instance de pokemon
 */
export function Baisser_Chances_Critique(pokemon) {
    if (pokemon.chance_Critique > 1) {
        console.log(`Les chances de critique de ${pokemon.nom} Diminuent !`)
        pokemon.chance_Critique -=1
    } else {
        console.log(`Les chances de critique de ${pokemon.nom} ne peuvent plus diminuer !`)
    }
}