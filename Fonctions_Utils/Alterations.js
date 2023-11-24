import { Jeu } from "../Classes/Class_Jeu.js";
import { Pokemon } from "../Classes/Class_Pokemon.js";
import { Statistiques } from "../Structures/Statistiques.js";
import { Statut } from "../Structures/Statut.js";
import { Types } from "../Structures/Types.js";
import { MAJ_PV_Actuel_Pokemon } from "./Affichage.js";
import { Degats_Meteo } from "./Effets_Meteo.js";

/**
 * Permet de calculer la probabilité de déclencher un statut
 * @param {number} Chance 
 * @returns {boolean}
 */
export function Calcul_Probabilite(Chance) {
    let rand = Math.trunc(Math.random() * 100)
    return (rand < Chance)
}

/**
 * Renvoit true si le pokemon peut attaquer (malgré un statut ou non) et false s'il ne peut pas attaquer
 * @param {Pokemon} pokemon Instance de pokemon
 * @param {Object} capacite Capacité employée par le pokemon
 * @returns {boolean}
 */
export function Peut_Attaquer(pokemon, capacite) {
    if (pokemon.Statut === Statut.Aucun && pokemon.Confusion === false && pokemon.Peur === false) { // Si tout va bien
        return true
    } else if (pokemon.Statut === Statut.GEL){ // Si le pokemon est Gelé
        if (capacite.Type === Types.FEU || Calcul_Probabilite(20)) { // Mais se dégel
            console.log(`${pokemon.nom} n'est plus ${pokemon.Statut.nom}`)
            pokemon.Statut = Statut.Aucun
            return true
        } else { // Si il ne se dégel pas
            console.log(`${pokemon.nom} ne peut pas attaquer, il est ${pokemon.Statut.nom}`)
            return false
        }
    } else if (pokemon.Statut === Statut.PARALYSIE) { // Si le pokemon est paralysé
        if (Calcul_Probabilite(75)) { // Si la paralysie ne s'applique pas
            return true
        } else { // Si la paralysie s'applique
            console.log(`${pokemon.nom} ne peut pas attaquer, il est ${pokemon.Statut.nom}`)
            return false
        }
    } else if (pokemon.Statut === Statut.SOMMEIL) { // Si le pokemon dort
        if (Calcul_Probabilite(33) || pokemon.Tours_Sommeil === 3) { // Mais se réveil
            console.log(`${pokemon.nom} n'est plus ${pokemon.Statut.nom}`)
            pokemon.Statut = Statut.Aucun
            pokemon.Tours_Sommeil = 0
            return true
        } else { // Si il dort toujours
            console.log(`${pokemon.nom} ne peut pas attaquer, il est ${pokemon.Statut.nom}`)
            pokemon.Tours_Sommeil += 1
            return false
        }
    } else if (pokemon.Peur) { // Si le pokemon a peur
        console.log(`La peur empêche ${pokemon.nom} d'attaquer !`)
        return false
    } else if (pokemon.Confusion) { // Si le pokemon est confus
        if (Calcul_Probabilite(25) || pokemon.Tours_Confusion === 4) { // Si il sort de sa confusion
            console.log(`${pokemon.nom} n'est plus confus`)
            pokemon.Confusion = false
            pokemon.Tours_Confusion = 0
            return true
        } else if (Calcul_Probabilite(33)) { // Si le pokemon se blesse dans sa confusion
            pokemon.PV_Actuel -= Calcul_Degats_Confusion(pokemon)
            pokemon.Tours_Confusion += 1
            console.log(`${pokemon.nom} se blesse dans sa confusion`)
            return false
        } else { // Si la confusion ne s'applique pas
            return true
        }
    }
    return (true)
}

/**
 * Gère les effets de statut à la fin du round
 * @param {Jeu} Jeu Instance de Jeu
 */
export function Statut_Fin_Round(Jeu) {
    let pokemon1 = Jeu.equipes[0].pokemons[Jeu.index_pokemon1]
    let pokemon2 = Jeu.equipes[1].pokemons[Jeu.index_pokemon2]
    if (pokemon1.Statut === Statut.BRULURE) { // Applique les dégats de brulure - Pokemon gauche
        pokemon1.PV_Actuel -= Calcul_Degats_Brulure(pokemon1)
        console.log(`${pokemon1.nom} subit des dégats de brulure`)
    } else if (pokemon1.Statut === Statut.EMPOISONNEMENT) { // Applique les dégats de poison - Pokemon gauche
        pokemon1.PV_Actuel -= Calcul_Degats_Empoisonnement(pokemon1)
        console.log(`${pokemon1.nom} subit des dégats d'empoisonnement`)
    }
    if (pokemon2.Statut === Statut.BRULURE) { // Applique les dégats de brulure - Pokemon droite
        pokemon2.PV_Actuel -= Calcul_Degats_Brulure(pokemon2)
        console.log(`${pokemon2.nom} subit des dégats de brulure`)
    } else if (pokemon2.Statut === Statut.EMPOISONNEMENT) { // Applique les dégats de poison - Pokemon gauche
        pokemon2.PV_Actuel -= Calcul_Degats_Empoisonnement(pokemon2)
        console.log(`${pokemon2.nom} subit des dégats d'empoisonnement`)
    }
    pokemon1.Peur = false
    pokemon2.Peur = false
    Degats_Meteo(Jeu)
    pokemon1.Check_KO()
    pokemon2.Check_KO()
    if (pokemon1.KO) { // Si le pokemon de gauche tombe KO
        console.log(`${pokemon1.nom} est KO`)
    }
    if (pokemon2.KO) { // Si le pokemon de droite tombe KO
        console.log(`${pokemon2.nom} est KO`)
    }
    MAJ_PV_Actuel_Pokemon(pokemon1, Jeu.index_pokemon1, pokemon2, Jeu.equipes[1])
}

/**
 * Permet d'appliquer un statut au pokemon passé en paramètre
 * @param {Pokemon} pokemon Instance de pokemon
 * @param {Object} statut Statut à appliquer au pokemon
 */
export function Appliquer_Statut(pokemon, statut) {
    if (pokemon.Statut === Statut.Aucun) { // On vérifie que le pokemon n'a pas déjà un statut
        if (statut === Statut.BRULURE && (pokemon.type1 != Types.FEU && pokemon.type2 != Types.FEU)) { // Si le pokemon peut être brulé
            pokemon.Statut = Statut.BRULURE
            Effet_Brulure(pokemon)
        } else if (statut === Statut.GEL && (pokemon.type1 != Types.GLACE && pokemon.type2 != Types.GLACE)) { // Si le pokemon peut être Gelé
            pokemon.Statut = Statut.GEL
        } else if (statut === Statut.PARALYSIE && (pokemon.type1 != Types.ELECTRICK && pokemon.type2 != Types.ELECTRICK)) { // Si le pokemon peut être Paralysé
            pokemon.Statut = Statut.PARALYSIE
            Effet_Paralysie(pokemon)
        } else if (statut === Statut.EMPOISONNEMENT && ((pokemon.type1 != Types.POISON && pokemon.type2 != Types.POISON) && (pokemon.type1 != Types.ACIER && pokemon.type2 != Types.ACIER))) { // SI le pokemon peut être empoisonné
            pokemon.Statut = Statut.EMPOISONNEMENT
        } else if (statut === Statut.SOMMEIL) { // Faire dormir le pokemon
            pokemon.Statut = Statut.SOMMEIL
        }
    }
}

/**
 * Permet d'appliquer la confusion au pokemon passé en paramètre
 * @param {Pokemon} pokemon Instance de pokemon
 */
export function Appliquer_Confusion(pokemon) {
    pokemon.Confusion = true
}

/**
 * Permet d'appliquer la peur au pokemon passé en paramètre
 * @param {Pokemon} pokemon Instance de pokemon
 */
export function Appliquer_Peur(pokemon) {
    pokemon.Peur = true
}

/**
 * Gère l'effet de baisse de stat de la brulure
 * @param {Pokemon} pokemon Instance de pokemon
 */
function Effet_Brulure(pokemon) {
    pokemon.Attaque = Math.trunc(pokemon.Attaque / 2)
}

/**
 * Gère l'effet de baisse de stat de la paralysie
 * @param {Pokemon} pokemon Instance de pokemon
 */
function Effet_Paralysie(pokemon) {
    pokemon.Vitesse = Math.trunc(pokemon.Vitesse / 2)
}

/**
 * Calcul les dégats infligés par la brulure
 * @param {Pokemon} pokemon Instance de pokemon
 * @returns {number} Renvoit les dégats à infliger au pokemon
 */
function Calcul_Degats_Brulure(pokemon) {
    let resultat = Math.trunc(pokemon.PV_Max * (1/8))
    return (resultat)
}

/**
 * Calcul les dégats infligés par l'empoisonnement
 * @param {Pokemon} pokemon 
 * @returns {number} Renvoit les dégats à infliger au pokemon
 */
function Calcul_Degats_Empoisonnement(pokemon) {
    pokemon.Tours_Poison += 1
    let resultat = Math.trunc(pokemon.PV_Max * (pokemon.Tours_Poison/16))
    return (resultat)
}

/**
 * Calcul les dégats infligés par la confusion
 * @param {Pokemon} pokemon 
 * @returns {number} Renvoit les dégats à infliger au pokemon
 */
function Calcul_Degats_Confusion(pokemon) {
    let Degats = 40
    Degats = Degats * (40 * (pokemon.Attaque * Statistiques[pokemon.Attaque_Niveau]) / 50.0)
    Degats = (Degats / (pokemon.Defense * Statistiques[pokemon.Defense_Niveau])) + 2.0
    return Math.trunc(Degats)
}
