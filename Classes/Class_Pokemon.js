import { Meteo } from "../Structures/Meteo.js"
import { Statut } from "../Structures/Statut.js"
import { Types } from "../Structures/Types.js"
import { Jeu } from "./Class_Jeu.js"

export class Pokemon {
    /**
     * Permet de créer un nouvel objet Pokemon.
     * @constructor
     * @param {Object} pokemon - Pokemon contenu dans la structure Pokedex.
     */
    constructor(pokemon) {
        this.nom = pokemon.Nom
        this.PV_Max = pokemon.PV_Max
        this.PV_Actuel = pokemon.PV_Max
        this.type1 = pokemon.Type1
        this.type2 = pokemon.Type2
        this.Attaque = pokemon.Attaque
        this.Attaque_Niveau = 0
        this.Defense = pokemon.Defense
        this.Defense_Niveau = 0
        this.Spe_Attaque = pokemon.Spe_Attaque
        this.Spe_Attaque_Niveau = 0
        this.Spe_Defense = pokemon.Spe_Defense
        this.Spe_Defense_Niveau = 0
        this.Vitesse = pokemon.Vitesse
        this.Vitesse_Niveau = 0
        this.Precision = 0
        this.chance_Critique = 1
        this.KO = false
        this.Statut = Statut.Aucun
        this.Tours_Sommeil = 0
        this.Tours_Poison = 0
        this.Confusion = false
        this.Tours_Confusion = 0
        this.Peur = false
        this.capacites = pokemon.Capacites
        this.PP = [pokemon.Capacites[0].PP, pokemon.Capacites[1].PP, pokemon.Capacites[2].PP, pokemon.Capacites[3].PP]
        this.image = pokemon.Image
    }

    /**
     * 
     * @param {Jeu} Jeu Instance de la partie (de Jeu)
     */
    Appel(Jeu) {
        console.log(`Je te choisis ${this.nom} !!!`)
        this.Reinitialisation_Stats()
        this.Bonus_Meteo(Jeu)
    }

    Check_KO() {
        if (this.PV_Actuel <= 0) {
            this.PV_Actuel = 0
            this.Statut = Statut.Aucun
            this.KO = true
        }
    }

    Reinitialisation_Stats() {
        this.Attaque_Niveau = 0
        this.Defense_Niveau = 0
        this.Spe_Attaque_Niveau = 0
        this.Spe_Defense_Niveau = 0
        this.Vitesse_Niveau = 0
        this.Confusion = false
        this.Peur = false
        if (this.Statut === Statut.PARALYSIE) {
            this.Vitesse = Math.trunc(this.Vitesse / 2)
        }
        if (this.Statut === Statut.BRULURE) {
            this.Attaque = Math.trunc(this.Attaque / 2)
        }
    }

    Reinitialiser_Statut() {
        this.Tours_Poison = 0
        this.Tours_Sommeil = 0
        if (this.Statut === Statut.PARALYSIE) {
            this.Vitesse *= 2
        }
        if (this.Statut === Statut.BRULURE) {
            this.Attaque *= 2
        }
        this.Statut = Statut.Aucun
    }

    /**
     * 
     * @param {Jeu} Jeu Instance de la partie (de Jeu)
     */
    Bonus_Meteo(Jeu) {
        if (Jeu.Meteo === Meteo.TEMPETE_DE_SABLE) {
            if (this.type1 === Types.ROCHE || this.type2 === Types.ROCHE) {
                this.Spe_Defense += this.Spe_Defense * 3/2
            }
        } else if (Jeu.Meteo === Meteo.GRELE) {
            if (this.type1 === Types.GLACE || this.type2 === Types.GLACE) {
                this.Defense += this.Defense * 3/2
            }
        }
    }
}
