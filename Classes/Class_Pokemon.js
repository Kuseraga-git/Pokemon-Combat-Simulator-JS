import { Statut } from "../Structures/Statut.js"

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
        this.Attaque_Actuel = pokemon.Attaque
        this.Defense = pokemon.Defense
        this.Defense_Actuel = pokemon.Defense
        this.Spe_Attaque = pokemon.Spe_Attaque
        this.Spe_Attaque_Actuel = pokemon.Spe_Attaque
        this.Spe_Defense = pokemon.Spe_Defense
        this.Spe_Defense_Actuel = pokemon.Spe_Defense
        this.Vitesse = pokemon.Vitesse
        this.Vitesse_Actuel = pokemon.Vitesse
        this.Precision = 100
        this.KO = false
        this.Statut = Statut.Aucun
        this.Tours_Sommeil = 0
        this.Tours_Poison = 0
        this.Confusion = false
        this.Tours_Confusion = 0
        this.Peur = false
        this.capacites = pokemon.Capacites
        this.image = pokemon.Image
    }

    Appel() {
        console.log(`Je te choisis ${this.nom} !!!`)
        this.Reinitialisation_Stats()
    }

    Check_KO() {
        if (this.PV_Actuel <= 0) {
            this.PV_Actuel = 0
            this.Statut = Statut.Aucun
            this.KO = true
        }
    }

    Reinitialisation_Stats() {
        this.Attaque_Actuel = this.Attaque
        this.Defense_Actuel = this.Defense
        this.Spe_Attaque_Actuel = this.Spe_Attaque
        this.Spe_Defense_Actuel = this.Spe_Defense
        this.Vitesse_Actuel = this.Vitesse
        this.Confusion = false
        this.Peur = false
        if (this.Statut == Statut.PARALYSIE) {
            this.Vitesse_Actuel /= 2
        }
        if (this.Statut == Statut.BRULURE) {
            this.Attaque_Actuel /= 2
        }
    }

    Reinitialiser_Statut() {
        this.Tours_Poison = 0
        this.Tours_Sommeil = 0
        if (this.Statut == Statut.PARALYSIE) {
            this.Vitesse_Actuel *= 2
        }
        if (this.Statut == Statut.BRULURE) {
            this.Attaque_Actuel *= 2
        }
        this.Statut = Statut.Aucun
    }
}
