import { Statut } from "../Structures/Statut.js";
import { Types } from "../Structures/Types.js";
import { MAJ_PV_Actuel_Pokemon } from "./Affichage.js";


// Permet de calculer la probabilité de déclencher un statut
export function Calcul_Probabilite(Chance) {
    let rand = Math.trunc(Math.random() * 100)
    return (rand < Chance)
}

// Renvoit true si le pokemon peut attaquer (malgré un statut ou non) et false s'il ne peut pas attaquer
export function Peut_Attaquer(pokemon, capacite) {
    if (pokemon.Statut == Statut.Aucun) {
        return(true)
    } else if (pokemon.Statut == Statut.GEL){
        if (capacite.Type == Types.FEU || Calcul_Probabilite(20)) {
            console.log(`${pokemon.nom} n'est plus ${pokemon.Statut.nom}`)
            pokemon.Statut = Statut.Aucun
            return(true)
        } else {
            console.log(`${pokemon.nom} ne peut pas attaquer, il est ${pokemon.Statut.nom}`)
            return false
        }
    } else if (pokemon.Statut == Statut.PARALYSIE) {
        if (Calcul_Probabilite(75)) {
            return(true)
        } else {
            console.log(`${pokemon.nom} ne peut pas attaquer, il est ${pokemon.Statut.nom}`)
            return false
        }
    } else if (pokemon.Statut == Statut.SOMMEIL) {
        if (Calcul_Probabilite(33) || pokemon.Tours_Sommeil == 3) {
            console.log(`${pokemon.nom} n'est plus ${pokemon.Statut.nom}`)
            pokemon.Statut = Statut.Aucun
            pokemon.Tours_Sommeil = 0
            return(true)
        } else {
            console.log(`${pokemon.nom} ne peut pas attaquer, il est ${pokemon.Statut.nom}`)
            pokemon.Tours_Sommeil += 1
            return false
        }
    }
    return (true)
}

// Gère les effets de statut à la fin du round
export function Statut_Fin_Round(Jeu) {
    let pokemon1 = Jeu.equipes[0].pokemons[Jeu.index_pokemon1]
    let pokemon2 = Jeu.equipes[1].pokemons[Jeu.index_pokemon2]
    if (pokemon1.Statut == Statut.BRULURE) {
        pokemon1.PV_Actuel -= Calcul_Degats_Brulure(pokemon1)
        console.log(`${pokemon1.nom} subit des dégats de brulure`)
    } else if (pokemon1.Statut == Statut.EMPOISONNEMENT) {
        pokemon1.PV_Actuel -= Calcul_Degats_Empoisonnement(pokemon1)
        console.log(`${pokemon1.nom} subit des dégats d'empoisonnement`)
    }
    if (pokemon2.Statut == Statut.BRULURE) {
        pokemon2.PV_Actuel -= Calcul_Degats_Brulure(pokemon2)
        console.log(`${pokemon2.nom} subit des dégats de brulure`)
    } else if (pokemon2.Statut == Statut.EMPOISONNEMENT) {
        pokemon2.PV_Actuel -= Calcul_Degats_Empoisonnement(pokemon2)
        console.log(`${pokemon2.nom} subit des dégats d'empoisonnement`)
    }
    pokemon1.Check_KO()
    pokemon2.Check_KO()
    if (pokemon1.KO) {
        console.log(`${pokemon1.nom} est KO`)
    }
    if (pokemon2.KO) {
        console.log(`${pokemon2.nom} est KO`)
    }
    MAJ_PV_Actuel_Pokemon(pokemon1, Jeu.index_pokemon1, pokemon2, Jeu.equipes[1])
}

// Permet d'appliquer un statut au pokemon passé en paramètre
export function Appliquer_Statut(pokemon, statut) {
    if (pokemon.Statut == Statut.Aucun) {
        if (statut == Statut.BRULURE && (pokemon.type1 != Types.FEU && pokemon.type2 != Types.FEU)) {
            pokemon.Statut = Statut.BRULURE
            Effet_Brulure(pokemon)
        } else if (statut == Statut.GEL && (pokemon.type1 != Types.GLACE && pokemon.type2 != Types.GLACE)) {
            pokemon.Statut = Statut.GEL
        } else if (statut == Statut.PARALYSIE && (pokemon.type1 != Types.ELECTRICK && pokemon.type2 != Types.ELECTRICK)) {
            pokemon.Statut = Statut.PARALYSIE
            Effet_Paralysie(pokemon)
        } else if (statut == Statut.EMPOISONNEMENT && ((pokemon.type1 != Types.POISON && pokemon.type2 != Types.POISON) && (pokemon.type1 != Types.ACIER && pokemon.type2 != Types.ACIER))) {
            pokemon.Statut = Statut.EMPOISONNEMENT
        } else if (statut == Statut.SOMMEIL) {
            pokemon.Statut = Statut.SOMMEIL
        }
    }
}

// Gère l'effet de baisse de stat de la brulure
function Effet_Brulure(pokemon) {
    pokemon.Attaque_Actuel = Math.trunc(pokemon.Attaque_Actuel / 2)
}

// Gère l'effet de baisse de stat de la paralysie
function Effet_Paralysie(pokemon) {
    pokemon.Vitesse_Actuel = Math.trunc(pokemon.Vitesse_Actuel / 2)
}

// Calcul les dégats infligés par la brulure
function Calcul_Degats_Brulure(pokemon) {
    let resultat = Math.trunc(pokemon.PV_Max * (1/8))
    return (resultat)
}

// Calcul les dégats infligés par l'empoisonnement
function Calcul_Degats_Empoisonnement(pokemon) {
    pokemon.Tours_Poison += 1
    let resultat = Math.trunc(pokemon.PV_Max * (pokemon.Tours_Poison/16))
    return (resultat)
}
