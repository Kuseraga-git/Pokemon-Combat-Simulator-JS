export class Pokemon {
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
        this.KO = false
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
            this.KO = true
            console.log(`${this.nom} est KO`)
        }
    }

    Reinitialisation_Stats() {
        this.Attaque = this.Attaque_Actuel
        this.Defense = this.Defense_Actuel
        this.Spe_Attaque = this.Spe_Attaque_Actuel
        this.Spe_Defense = this.Spe_Defense_Actuel
        this.Vitesse = this.Vitesse_Actuel
    }
}
