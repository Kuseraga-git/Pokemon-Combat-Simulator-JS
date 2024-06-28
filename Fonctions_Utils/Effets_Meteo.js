import { Jeu } from "../Classes/Class_Jeu.js";
import { Meteo } from "../Structures/Meteo.js";
import { Types } from "../Structures/Types.js";
import { ecrire_dans_Zone_de_Texte } from "./Affichage.js";

/**
 * Applique un effet météo
 * @param {Jeu} Jeu Instance de Jeu
 * @param {Object} nouvelle_Meteo Météo contenu dans la structure Meteo
 */
export function Appliquer_meteo(Jeu, nouvelle_Meteo) {
    if (Jeu.Meteo != nouvelle_Meteo) {
        Meteo_neutre(Jeu, nouvelle_Meteo);
        switch (nouvelle_Meteo) {
            case Meteo.SOLEIL:
                Appliquer_Soleil(Jeu);
                break;
            case Meteo.PLUIE:
                Appliquer_Pluie(Jeu);
                break;
            case Meteo.TEMPETE_DE_SABLE:
                Appliquer_Tempete_de_sable(Jeu);
                break;
            case Meteo.GRELE:
                Appliquer_Grele(Jeu);
                break;
            default:
                break;
        }
    }
}

/**
 * Rétablit un météo normale, sans effets
 * @param {Jeu} Jeu Instance de Jeu
 * @param {Object} nouvelle_Meteo Météo contenu dans la structure Meteo
 */
export function Meteo_neutre(Jeu, nouvelle_Meteo = Meteo.Aucun) {
    if (Jeu.Meteo != Meteo.Aucun && nouvelle_Meteo == Meteo.Aucun){
        ecrire_dans_Zone_de_Texte(`La météo redevient calme !`)
    }
    switch (Jeu.Meteo) {
        case Meteo.TEMPETE_DE_SABLE:
            Enlever_Tempete_de_sable(Jeu);
            break;
        case Meteo.GRELE:
            Enlever_Grele(Jeu);
            break;
        default:
            break;
    }
    document.getElementById("meteo").src = "";
    Jeu.Meteo = Meteo.Aucun;
    Jeu.Tours_Meteo = 0;
}

/**
 * Applique le soleil
 * @param {Jeu} Jeu Instance de Jeu
 */
function Appliquer_Soleil(Jeu) {
    document.getElementById("meteo").src = "../Images_Meteo/Soleil.png";
    Jeu.Meteo = Meteo.SOLEIL;
    Jeu.Tours_Meteo = 5;
}

/**
 * Applique la pluie
 * @param {Jeu} Jeu Instance de Jeu
 */
function Appliquer_Pluie(Jeu) {
    document.getElementById("meteo").src = "../Images_Meteo/Pluie.png";
    Jeu.Meteo = Meteo.PLUIE;
    Jeu.Tours_Meteo = 5;
}

/**
 * Applique les effets de la tempête de sable
 * @param {Jeu} Jeu Instance de Jeu
 */
function Appliquer_Tempete_de_sable(Jeu) {
    document.getElementById("meteo").src = "../Images_Meteo/Tempête_de_sable.png";
    Jeu.Meteo = Meteo.TEMPETE_DE_SABLE;
    Jeu.Tours_Meteo = 5;
    if (Jeu.equipes[0].pokemons[Jeu.index_pokemon1].type1 === Types.ROCHE || Jeu.equipes[0].pokemons[Jeu.index_pokemon1].type2 === Types.ROCHE) {
        Jeu.equipes[0].pokemons[Jeu.index_pokemon1].Spe_Defense_Niveau += 1;
    }
    if (Jeu.equipes[1].pokemons[Jeu.index_pokemon2].type1 === Types.ROCHE || Jeu.equipes[1].pokemons[Jeu.index_pokemon2].type2 === Types.ROCHE) {
        Jeu.equipes[1].pokemons[Jeu.index_pokemon2].Spe_Defense_Niveau += 1;
    }
}

/**
 * Retire les effets de la tempête de sable
 * @param {Jeu} Jeu Instance de Jeu
 */
function Enlever_Tempete_de_sable(Jeu) {
    if (Jeu.equipes[0].pokemons[Jeu.index_pokemon1].type1 === Types.ROCHE || Jeu.equipes[0].pokemons[Jeu.index_pokemon1].type2 === Types.ROCHE) {
        Jeu.equipes[0].pokemons[Jeu.index_pokemon1].Spe_Defense_Niveau -= 1;
    }
    if (Jeu.equipes[1].pokemons[Jeu.index_pokemon2].type1 === Types.ROCHE || Jeu.equipes[1].pokemons[Jeu.index_pokemon2].type2 === Types.ROCHE) {
        Jeu.equipes[1].pokemons[Jeu.index_pokemon2].Spe_Defense_Niveau -= 1;
    }
}

/**
 * Applique les effets de la grêle
 * @param {Jeu} Jeu Instance de Jeu
 */
function Appliquer_Grele(Jeu) {
    document.getElementById("meteo").src = "../Images_Meteo/Grêle.png";
    Jeu.Meteo = Meteo.GRELE;
    Jeu.Tours_Meteo = 5;
    if (Jeu.equipes[0].pokemons[Jeu.index_pokemon1].type1 === Types.GLACE || Jeu.equipes[0].pokemons[Jeu.index_pokemon1].type2 === Types.GLACE) {
        Jeu.equipes[0].pokemons[Jeu.index_pokemon1].Defense_Niveau += 1;
    }
    if (Jeu.equipes[1].pokemons[Jeu.index_pokemon2].type1 === Types.GLACE || Jeu.equipes[1].pokemons[Jeu.index_pokemon2].type2 === Types.GLACE) {
        Jeu.equipes[1].pokemons[Jeu.index_pokemon2].Defense_Niveau += 1;
    }
}

/**
 * Retire les effets de la grêle
 * @param {Jeu} Jeu Instance de Jeu
 */
function Enlever_Grele(Jeu) {
    if (Jeu.equipes[0].pokemons[Jeu.index_pokemon1].type1 === Types.GLACE || Jeu.equipes[0].pokemons[Jeu.index_pokemon1].type2 === Types.GLACE) {
        Jeu.equipes[0].pokemons[Jeu.index_pokemon1].Defense_Niveau -= 1;
    }
    if (Jeu.equipes[1].pokemons[Jeu.index_pokemon2].type1 === Types.GLACE || Jeu.equipes[1].pokemons[Jeu.index_pokemon2].type2 === Types.GLACE) {
        Jeu.equipes[1].pokemons[Jeu.index_pokemon2].Defense_Niveau -= 1;
    }
}

/**
 * S'occupe du traitement et du calcule des dégâts de météo
 * @param {Jeu} Jeu Instance de Jeu
 */
export function Degats_Meteo(Jeu) {
    if (Jeu.Tours_Meteo > 0) {
        const pokemon1 = Jeu.equipes[0].pokemons[Jeu.index_pokemon1]
        const pokemon2 = Jeu.equipes[1].pokemons[Jeu.index_pokemon2]
        const resist_sable = [Types.ROCHE, Types.ACIER, Types.SOL]
        if (Jeu.Meteo === Meteo.TEMPETE_DE_SABLE) {
            if (!(resist_sable.includes(pokemon1.type1) || resist_sable.includes(pokemon1.type2))) { // Check pokemon1 pas Roche/Acier/Sol
                ecrire_dans_Zone_de_Texte(`${pokemon1.nom} subit des dégats de la tempête de sable !`)
                pokemon1.PV_Actuel -= Math.floor(pokemon1.PV_Actuel * 1/16)
            }
            if (!(resist_sable.includes(pokemon2.type1) || resist_sable.includes(pokemon2.type2))) { // Check pokemon2 pas Roche/Acier/Sol
                ecrire_dans_Zone_de_Texte(`${pokemon2.nom} subit des dégats de la tempête de sable !`)
                pokemon2.PV_Actuel -= Math.floor(pokemon1.PV_Actuel * 1/16)
            }
        }
        if (Jeu.Meteo === Meteo.GRELE) {
            if (pokemon1.type1 != Types.GLACE && pokemon1.type2 != Types.GLACE) { // Check pokemon1 pas glace
                ecrire_dans_Zone_de_Texte(`${pokemon1.nom} subit des dégats de la grêle !`)
                pokemon2.PV_Actuel -= Math.floor(pokemon2.PV_Actuel * 1/16)
            }
            if (pokemon2.type1 != Types.GLACE && pokemon2.type2 != Types.GLACE) { // Check pokemon2 pas glace
                ecrire_dans_Zone_de_Texte(`${pokemon2.nom} subit des dégats de la grêle !`)
                pokemon2.PV_Actuel -= Math.floor(pokemon2.PV_Actuel * 1/16)
            }
        }
        Jeu.Tours_Meteo -= 1
    } else if (Jeu.Meteo != Meteo.Aucun) {
        Meteo_neutre(Jeu)
    }
}
