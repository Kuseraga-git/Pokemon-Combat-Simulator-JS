import { affichePokemon2 } from "../Fonctions_Utils/Affichage.js"
import { Peut_Attaquer, Statut_Fin_Round } from "../Fonctions_Utils/Alterations.js"
import { Meteo } from "../Structures/Meteo.js"
import { Statistiques } from "../Structures/Statistiques.js"
import { Equipe } from "./Class_Equipe.js"

export class Jeu {
    /**
     * Permet de créer un nouvel objet Jeu.
     * @constructor
     */
    constructor() {
        this.equipes = []
        this.index_pokemon1 = 0
        this.index_pokemon2 = 0
        this.Meteo = Meteo.Aucun
        this.Tours_Meteo = 0
        this.nbTours = 1
    }

    /**
     * Ajoute une equipe dans le Jeu
     * @param {Equipe} equipe Un objet Equipe
     */
    Ajouter_Dresseur(equipe) {
        this.equipes.push(equipe)
    }

    /**
     * Affiche le nombre de tour actuel de la partie
     */
    Nouveau_Tour() {
        console.log(`========================${this.nbTours}========================`);
        this.nbTours+=1;
    }

    /**
     * Détermine l'ordre des actions et le déroulée d'une partie
     * @param {number} choix1 Chiffre symbolisant le choix du joueur (0, 1, 2, 3 === capacité pokemon, 4 === changement de pokemon actif)
     * @param {number} [index_nouveau_pokemon1=0] Chiffre symbolisant l'index du nouveau pokemon actif
     */
    Ordre_Action(choix1, index_nouveau_pokemon1 = 0) {

        /* choix1 :
        **  0, 1, 2, 3 === capacité pokemon du joueur
        **  4 === changement de pokemon sur le pokemon, l'index du poke choisi est envoyé dans index_nouveau_pokemon
        **/
       
       let pokemon1 = this.equipes[0].pokemons[this.index_pokemon1]
       let pokemon2 = this.equipes[1].pokemons[this.index_pokemon2]
       const valeur_aleatoire = Math.floor(Math.random() * 4);
       
       // SI changement de pokemon
       if (choix1 === 4){
           if (pokemon1.KO) { // SI le pokemon actif est KO
            if (this.equipes[0].pokemons[index_nouveau_pokemon1].KO === false && index_nouveau_pokemon1 != this.index_pokemon1){
                    this.Nouveau_Tour();
                    pokemon1.Tours_Poison = 0
                    this.index_pokemon1 = index_nouveau_pokemon1
                    pokemon1 = this.equipes[0].pokemons[this.index_pokemon1]
                    pokemon1.Appel(this)
                }
            } else { // SI le pokemon actif n'est pas KO
                if (this.equipes[0].pokemons[index_nouveau_pokemon1].KO === false && index_nouveau_pokemon1 != this.index_pokemon1){
                    this.Nouveau_Tour();
                    pokemon1.Tours_Poison = 0
                    this.index_pokemon1 = index_nouveau_pokemon1
                    pokemon1 = this.equipes[0].pokemons[this.index_pokemon1]
                    pokemon1.Appel(this)
                    if (Peut_Attaquer(this, pokemon2, pokemon2.capacites[valeur_aleatoire], pokemon1, valeur_aleatoire)) {
                        pokemon2.capacites[valeur_aleatoire].Effet(this, pokemon1, pokemon2)
                        pokemon2.PP[valeur_aleatoire] -= 1
                    }
                }
            }
        } else if (pokemon1.KO === false && pokemon2.KO === false) { // SI les 2 pokemons ne sont pas KO
            this.Nouveau_Tour();
            if (pokemon1.Vitesse * Statistiques[pokemon1.Vitesse_Niveau] >= pokemon2.Vitesse * Statistiques[pokemon2.Vitesse_Niveau]) { // SI pokemon joueur + Rapide
                if (Peut_Attaquer(this, pokemon1, pokemon1.capacites[choix1], pokemon2, choix1)) {
                    pokemon1.capacites[choix1].Effet(this, pokemon2, pokemon1)
                    pokemon1.PP[choix1] -= 1
                }
                if (pokemon2.KO === false && pokemon1.KO === false) {
                    if (Peut_Attaquer(this, pokemon2, pokemon2.capacites[valeur_aleatoire], pokemon1, valeur_aleatoire)) {
                        pokemon2.capacites[valeur_aleatoire].Effet(this, pokemon1, pokemon2)
                        pokemon2.PP[valeur_aleatoire] -= 1
                    }
                }
            } else { // SI pokemon adverse + Rapide
                if (Peut_Attaquer(this, pokemon2, pokemon2.capacites[valeur_aleatoire], pokemon1, valeur_aleatoire)) {
                    pokemon2.capacites[valeur_aleatoire].Effet(this, pokemon1, pokemon2)
                    pokemon2.PP[valeur_aleatoire] -= 1
                }
                if (pokemon2.KO === false && pokemon1.KO === false) {
                    if (Peut_Attaquer(this, pokemon1, pokemon1.capacites[choix1], pokemon2, choix1)) {
                        pokemon1.capacites[choix1].Effet(this, pokemon2, pokemon1)
                        pokemon1.PP[choix1] -= 1
                    }
                }
            }
        }
        Statut_Fin_Round(this)
        if (this.equipes[0].Check_Equipe_KO() && this.equipes[1].Check_Equipe_KO()) { // SI les 2 équipes sont KO
            setTimeout(alert, 500, `Egalité !!!`);
        } else if (pokemon2.KO) { // SI pokemon adverse est KO
            if (this.equipes[1].Check_Equipe_KO() === false) { // SI l'équipe adverse a encore des pokemons jouables
                this.index_pokemon2 += 1
                pokemon2 = this.equipes[1].pokemons[this.index_pokemon2]
                affichePokemon2(pokemon2)
            } else {
                setTimeout(alert, 500, `Victoire pour ${this.equipes[0].dresseur} !!!`);
            }
        } else if (this.equipes[0].Check_Equipe_KO()) {
            setTimeout(alert, 500, `Victoire pour ${this.equipes[1].dresseur} !!!`);
        }
    }
}