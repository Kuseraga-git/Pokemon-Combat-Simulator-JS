import { Pokemon } from "../Classes/Class_Pokemon.js"
import { ecrire_dans_Zone_de_Texte } from "../Fonctions_Utils/Affichage.js"

export const Critique = {
    1: 4.17,
    2: 12.5,
    3: 50.0,
    4: 100.0,
}

/**
 * Fait augmenter la chance de critique d'un pokemon passé en paramètre
 * @param {Pokemon} pokemon Instance de pokemon
 */
export function Augmenter_Chances_Critique(pokemon) {
    if (pokemon.chance_Critique < 4) {
        ecrire_dans_Zone_de_Texte(`Les chances de critique de ${pokemon.nom} augmentent !`)
        pokemon.chance_Critique +=1
    } else {
        ecrire_dans_Zone_de_Texte(`Les chances de critique de ${pokemon.nom} ne peuvent plus augmenter !`)
    }
}

/**
 * Fait augmenter la chance de critique d'un pokemon passé en paramètre
 * @param {Pokemon} pokemon Instance de pokemon
 */
export function Baisser_Chances_Critique(pokemon) {
    if (pokemon.chance_Critique > 1) {
        ecrire_dans_Zone_de_Texte(`Les chances de critique de ${pokemon.nom} Diminuent !`)
        pokemon.chance_Critique -=1
    } else {
        ecrire_dans_Zone_de_Texte(`Les chances de critique de ${pokemon.nom} ne peuvent plus diminuer !`)
    }
}