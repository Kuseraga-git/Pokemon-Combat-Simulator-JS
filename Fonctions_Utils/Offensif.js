import { Pokemon } from "../Classes/Class_Pokemon.js"
import { Critique } from "../Structures/Critique.js"
import { Statistiques } from "../Structures/Statistiques.js"
import { Calcul_Table_des_Types } from "../Structures/Types.js"

/**
 * Fait le calcul des dégats à infliger par une capacité
 * @param {Object} Categorie Categorie de la capacité
 * @param {Pokemon} adversaire Instance du pokemon qui subit la capacité
 * @param {Pokemon} pokemon Instance du pokemon qui inflige la capacité
 * @param {number} Puissance Puissance de la capacité
 * @param {Object} Type Type de la capacité
 * @param {number} chance_Critique Chance de critique, baasé sur la structure Critique
 * @returns {number} Renvoit les dégats infligé par la capacité au pokemon adverse
 */
export function Calcul_Degats(Categorie, adversaire, pokemon, Puissance, Type, chance_Critique) {
    if (Categorie === "Phys") {
        return (Calcul_Degats_Physique(adversaire, pokemon, Puissance, Type, chance_Critique))
    } else if (Categorie === "Spe") {
        return (Calcul_Degats_Speciaux(adversaire, pokemon, Puissance, Type, chance_Critique))
    }
}

/**
 * Calcul les dégats à infliger en cas d'attaques physiques
 * @param {Pokemon} adversaire Instance du pokemon qui subit la capacité
 * @param {Pokemon} pokemon Instance du pokemon qui inflige la capacité
 * @param {number} Puissance Puissance de la capacité
 * @param {Object} Type Type de la capacité
 * @param {number} chance_Critique Chance de critique, baasé sur la structure Critique
 * @returns {number} Renvoit les dégats infligé par la capacité au pokemon adverse
 */
function Calcul_Degats_Physique(adversaire, pokemon, Puissance, Type, chance_Critique) {
    let Degats = 40
    let critique = ((Math.random() * 100.0) < Critique[chance_Critique] ? 2.0 : 1.0)
    Degats = Degats * (Puissance * (pokemon.Attaque * Statistiques[pokemon.Attaque_Niveau]) / 50.0)
    Degats = (Degats / (adversaire.Defense * Statistiques[adversaire.Defense_Niveau])) + 2.0
    Degats = Degats * critique
    Degats = Degats * ((pokemon.type1 === Type || pokemon.type2 === Type) ? 1.5 : 1.0)
    Degats = Degats * Calcul_Table_des_Types(Type, adversaire.type1, adversaire.type2)
    return [Math.trunc(Degats), (critique === 2.0)]
}

/**
 * Calcul les dégats à infliger en cas d'attaques spéciales
 * @param {Pokemon} adversaire Instance du pokemon qui subit la capacité
 * @param {Pokemon} pokemon Instance du pokemon qui inflige la capacité
 * @param {number} Puissance Puissance de la capacité
 * @param {Object} Type Type de la capacité
 * @param {number} chance_Critique Chance de critique, baasé sur la structure Critique
 * @returns {number} Renvoit les dégats infligé par la capacité au pokemon adverse
 */
function Calcul_Degats_Speciaux(adversaire, pokemon, Puissance, Type, chance_Critique) {
    let Degats = 40
    let critique = ((Math.random() * 100.0) < Critique[chance_Critique] ? 2.0 : 1.0)
    Degats = Degats * (Puissance * (pokemon.Spe_Attaque * Statistiques[pokemon.Spe_Attaque_Niveau]) / 50.0)
    Degats = (Degats / (adversaire.Spe_Defense * Statistiques[adversaire.Spe_Defense_Niveau])) + 2.0
    Degats = Degats * critique
    Degats = Degats * ((pokemon.type1 === Type || pokemon.type2 === Type) ? 1.5 : 1.0)
    Degats = Degats * Calcul_Table_des_Types(Type, adversaire.type1, adversaire.type2)
    return [Math.trunc(Degats), (critique === 2.0)]
}

/**
 * Inflige le total des dégats infligés au pokemon passé en paramètre
 * @param {Pokemon} pokemon Instance de pokemon
 * @param {number} total Total des dégats à infliger
 */
export function Infliger_Degats(pokemon, total) {
    pokemon.PV_Actuel -= total
    console.log(`L'adversaire a subit ${total} points de dégats !`)
}
