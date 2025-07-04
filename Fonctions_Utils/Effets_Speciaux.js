import { Pokemon } from "../Classes/Class_Pokemon.js"
import { ecrire_dans_Zone_de_Texte } from "./Affichage.js"

/**
 * Permet de soigner le pokemon du total passé en paramètre
 * @param {Pokemon} pokemon Instance du pokemon à soigner
 * @param {number} total Total de points de vie à récupérer
 */
export function Soigner_PV(pokemon, total) {
    pokemon.PV_Actuel = Math.floor(pokemon.PV_Actuel + total)
    if (pokemon.PV_Actuel > pokemon.PV_Max){
        pokemon.PV_Actuel = pokemon.PV_Max
    }
    ecrire_dans_Zone_de_Texte(`${pokemon.nom} se soigne de ${Math.floor(total)} points de vie !`)
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
    ecrire_dans_Zone_de_Texte(`${stat} de ${pokemon.nom} diminue !`)
    pokemon[stat + '_Niveau'] -= 1
}

/**
 * Fait augmenter la statistique d'un pokemon passé en paramètre
 * @param {Pokemon} pokemon Instance de pokemon
 * @param {string} stat Statistique à augmenter
 */
export function Augmenter_Stat(pokemon, stat) {
    ecrire_dans_Zone_de_Texte(`${stat} de ${pokemon.nom} augmente !`)
    pokemon[stat + '_Niveau'] += 1
}

/**
 * Inflige des dégats de recul au pokemon basé sur les dégats infligés et le pourcentage de dégats en recul
 * @param {Pokemon} pokemon Instance de pokemon
 * @param {number} degats Dégats infligés
 * @param {number} pourcentage Pourcentage de dégat à infliger en recul au pokemon
 */
export function Degat_de_Recul(pokemon, degats, pourcentage) {
    pokemon.PV_Actuel = Math.trunc(pokemon.PV_Actuel - (degats * pourcentage))
    ecrire_dans_Zone_de_Texte(`${pokemon.nom} subit des dégâts de recul`)
    pokemon.Check_KO()
}
