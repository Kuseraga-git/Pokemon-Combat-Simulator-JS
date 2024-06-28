import { Pokemon } from "../Classes/Class_Pokemon.js"
import { ecrire_dans_Zone_de_Texte } from "../Fonctions_Utils/Affichage.js"

export const Precision = {
    '-6': 3/9,
    '-5': 3/8,
    '-4': 3/7,
    '-3': 3/6,
    '-2': 3/5,
    '-1': 3/4,
    '0': 1,
    '1': 4/3,
    '2': 5/3,
    '3': 6/3,
    '4': 7/3,
    '5': 8/3,
    '6': 9/3,
}

/**
 * Fait baisser la précision d'un pokemon passé en paramètre
 * @param {Pokemon} pokemon Instance de pokemon
 */
export function Baisser_Precision(pokemon) {
    if (pokemon.Precision > -5) {
        ecrire_dans_Zone_de_Texte(`La Précision de ${pokemon.nom} diminue !`)
        pokemon.Precision -= 1
    } else {
        ecrire_dans_Zone_de_Texte(`La Précision de ${pokemon.nom} ne peut plus diminuer !`)
    }
}

/**
 * Fait augmenter la précision d'un pokemon passé en paramètre
 * @param {Pokemon} pokemon Instance de pokemon
 */
export function Augmenter_Precision(pokemon) {
    if (pokemon.Precision < 6) {
        ecrire_dans_Zone_de_Texte(`La Précision de ${pokemon.nom} augmente !`)
        pokemon.Precision += 1
    } else {
        ecrire_dans_Zone_de_Texte(`La Précision de ${pokemon.nom} ne peut plus augmenter !`)
    }
}

/**
 * Permet de calculer la probabilité de toucher le pokemon adverse
 * @param {number} precision // Précision de la capacité
 * @param {Pokemon} pokemon // Instance de pokemon
 * @returns {boolean}
 */
export function Check_Precision(precision, pokemon) {
    let rand = Math.trunc(Math.random() * 100)
    return (rand <= precision * Precision[pokemon.Precision])
}
