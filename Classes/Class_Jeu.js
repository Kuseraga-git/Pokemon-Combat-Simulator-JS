import { MAJ_PV_Actuel_Pokemon, affichePokemon2 } from "../Fonctions_Utils/Affichage.js"

export class Jeu {
    constructor() {
        this.dresseurs = []
        this.index_pokemon1 = 0
        this.index_pokemon2 = 0
    }

    Ajouter_Dresseur(equipe) {
        this.dresseurs.push(equipe)
    }

    Lancer_Partie() {
        if (this.dresseurs.length == 2) {
            console.log(`L'équipe de ${this.dresseurs[0].dresseur} et de ${this.dresseurs[1].dresseur} sont prêtes !`)
            // Page selection pokemon - Seul le joueur choisit un pokemon, l'adversaire choisi un pokemon au hasard
            console.log(`Choisissez vos pokemons !!!`)
        } else {
            console.log("Pas assez de dresseurs sur le terrain. La partie est reportée")
        }
    }

    Ordre_Action(choix1, index_nouveau_pokemon1 = 0) {

        /* choix1 :
        **  0, 1, 2, 3 == capacité pokemon du joueur
        **  4 == changement de pokemon sur le pokemon, l'index du poke choisi est envoyé dans index_nouveau_pokemon
        **/

        let pokemon1 = this.dresseurs[0].pokemons[this.index_pokemon1]
        let pokemon2 = this.dresseurs[1].pokemons[this.index_pokemon2]
        const valeurAleatoire = Math.floor(Math.random() * 4);

        // SI changement de pokemon
        if (choix1 == 4){
            if (pokemon1.KO) { // SI le pokemon est KO
                this.index_pokemon1 = index_nouveau_pokemon1
                pokemon1 = this.dresseurs[0].pokemons[this.index_pokemon1]
                MAJ_PV_Actuel_Pokemon(pokemon1, pokemon2)
            } else { // SI le pokemon n'est pas KO
                this.index_pokemon1 = index_nouveau_pokemon1
                pokemon1 = this.dresseurs[0].pokemons[this.index_pokemon1]
                pokemon2.capacites[valeurAleatoire].Effet(pokemon1, pokemon2)
                MAJ_PV_Actuel_Pokemon(pokemon1, pokemon2)
            }
        } else if (pokemon1.KO == false && pokemon2.KO == false) { // SI les 2 pokemons ne sont pas KO
            if (pokemon1.Vitesse_Actuel >= pokemon2.Vitesse_Actuel) { // SI pokemon joueur + Rapide
                pokemon1.capacites[choix1].Effet(pokemon2, pokemon1)
                if (pokemon2.KO == false && pokemon1.KO == false) {
                    pokemon2.capacites[valeurAleatoire].Effet(pokemon1, pokemon2)
                }
                MAJ_PV_Actuel_Pokemon(pokemon1, pokemon2)
            } else { // SI pokemon adverse + Rapide
                pokemon2.capacites[valeurAleatoire].Effet(pokemon1, pokemon2)
                if (pokemon2.KO == false && pokemon1.KO == false) {
                    pokemon1.capacites[choix1].Effet(pokemon2, pokemon1)
                }
                MAJ_PV_Actuel_Pokemon(pokemon1, pokemon2)
            }
        }
        if (this.dresseurs[0].Check_Equipe_KO() && this.dresseurs[1].Check_Equipe_KO()) { // SI les 2 équipes sont KO
            setTimeout(alert, 500, `Egalité !!!`);
        } else if (pokemon2.KO) { // SI pokemon adverse est KO
            if (this.dresseurs[1].Check_Equipe_KO() == false) { // SI l'équipe adverse a encore des pokemons jouables
                this.index_pokemon2 += 1
                pokemon2 = this.dresseurs[1].pokemons[this.index_pokemon2]
                affichePokemon2(pokemon2)
                MAJ_PV_Actuel_Pokemon(pokemon1, pokemon2)
            } else {
                MAJ_PV_Actuel_Pokemon(pokemon1, pokemon2)
                setTimeout(alert, 500, `Victoire pour ${this.dresseurs[0].dresseur} !!!`);
            }
        } else if (this.dresseurs[0].Check_Equipe_KO()) {
            MAJ_PV_Actuel_Pokemon(pokemon1, pokemon2)
            setTimeout(alert, 500, `Victoire pour ${this.dresseurs[1].dresseur} !!!`);
        }
    }
}