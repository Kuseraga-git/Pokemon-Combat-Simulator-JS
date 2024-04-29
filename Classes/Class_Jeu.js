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
       
        /* Initialisez 3 variables :
        ** Vous trouverez juste en dessous 3 variables déclaré mais sans valeurs, assignez leur une valeur en suivant les indications donnés
        **/
 
        // Cette variable doit contenir le pokemon actif (sur le terrain) du joueur 1
        let pokemon1
        
        // Cette variable doit contenir le pokemon actif (sur le terrain) du joueur 2
        let pokemon2

        // Cette variable doit contenir un chiffre aléatoire entre 0 et 3, elle nous servira pour déterminer l'attaque du seconde Pokémon
        let valeur_aleatoire



        // SI changement de pokemon
        if (choix1 === 4){
            if (pokemon1.KO) { // SI le pokemon actif est KO
                if (this.equipes[0].pokemons[index_nouveau_pokemon1].KO === false && index_nouveau_pokemon1 != this.index_pokemon1){
                    // SI le nouveau Pokémon n'est pas KO et n'est pas le même que celui sur le terrain
                    
                    /* Vous avez 4 étapes à réaliser :
                    ** - Appeler la fonction Nouveau_Tour()
                    ** - Remettre le compteur des tours de poison du pokemon 1 à 0
                    ** - Changer l'index du Pokémon actif (Pensez à modifier la valeur de pokemon1)
                    ** - Déclencher la fonction "Appel()" du Pokémon
                    ** Codez en dessous
                    **/


                }
            } else { // SI le pokemon actif n'est pas KO
                if (this.equipes[0].pokemons[index_nouveau_pokemon1].KO === false && index_nouveau_pokemon1 != this.index_pokemon1){
                    // SI le nouveau Pokémon n'est pas KO et n'est pas le même que celui sur le terrain

                    /* Vous avez 4 étapes à réaliser :
                    ** - Appeler la fonction Nouveau_Tour()
                    ** - Remettre le compteur des tours de poison du pokemon 1 à 0
                    ** - Changer l'index du Pokémon actif (Pensez à modifier la valeur de pokemon1)
                    ** - Déclencher la fonction "Appel()" du Pokémon
                    ** Codez en dessous
                    **/


                    if (Peut_Attaquer(this, pokemon2, pokemon2.capacites[valeur_aleatoire], pokemon1, valeur_aleatoire)) {
                        // Vous devez faire attaquer le pokemon du joueur 2 avec une attaque aléatoire
                        // Codez en dessous


                    }
                }
            } 
        } else if (pokemon1.KO === false && pokemon2.KO === false) { // SI les 2 pokemons ne sont pas KO
            this.Nouveau_Tour();
            if (pokemon1.Vitesse * Statistiques[pokemon1.Vitesse_Niveau] >= pokemon2.Vitesse * Statistiques[pokemon2.Vitesse_Niveau]) { // SI pokemon joueur + Rapide
                if (Peut_Attaquer(this, pokemon1, pokemon1.capacites[choix1], pokemon2, choix1)) {
                    // Vous devez faire attaquer le Pokémon du joueur 1 avec l'attaque choisie
                    // Codez en dessous


                }
                if (pokemon2.KO === false && pokemon1.KO === false) {
                    if (Peut_Attaquer(this, pokemon2, pokemon2.capacites[valeur_aleatoire], pokemon1, valeur_aleatoire)) {
                        // Vous devez faire attaquer le Pokémon du joueur 2 avec une attaque aléatoire
                        // Codez en dessous


                    }
                }
            } else { // SI pokemon adverse + Rapide
                if (Peut_Attaquer(this, pokemon2, pokemon2.capacites[valeur_aleatoire], pokemon1, valeur_aleatoire)) {
                    // Vous devez faire attaquer le Pokémon du joueur 2 avec une attaque aléatoire
                    // Codez en dessous


                }

                if (pokemon2.KO === false && pokemon1.KO === false) { // Si les 2 Pokémons ne sont pas KO
                    if (Peut_Attaquer(this, pokemon1, pokemon1.capacites[choix1], pokemon2, choix1)) {
                        // Vous devez faire attaquer le Pokémon du joueur 1 avec l'attaque choisie
                        // Codez en dessous


                    }
                }
            }
            // Appelez la fonction qui déclenche les effets de statut à la fin du tour - Codez en dessous


        }
        // Les conditions en dessous s'occupent de vérifier si une condition de victoire a été effectué ou si le jeu doit continuer
        if (this.equipes[0].Check_Equipe_KO() && this.equipes[1].Check_Equipe_KO()) { // SI les 2 équipes sont KO
            setTimeout(alert, 500, `Egalité !!!`); // Permet au programme, après 1/2 seconde, d'afficher un message.
        } else if (pokemon2.KO) { // SI pokemon adverse est KO
            if (this.equipes[1].Check_Equipe_KO() === false) { // SI l'équipe adverse a encore des pokemons jouables
                /*
                ** La partie continue ! Il vous reste 2 étapes à réaliser :
                ** - Augmenter l'index_pokemon2 de 1 pour passer au Pokémon suivant (Pensez à modifier la valeur de pokemon2)
                ** - Afficher le Pokemon du joueur 2
                ** Codez en dessous
                **/


            } else { // SI l'équipe adverse n'a plus de Pokémons jouables
                setTimeout(alert, 500, `Victoire pour ${this.equipes[0].dresseur} !!!`);
            }
        } else if (this.equipes[0].Check_Equipe_KO()) { // SI l'équipe du joueur n'a plus de Pokémons
            setTimeout(alert, 500, `Victoire pour ${this.equipes[1].dresseur} !!!`);
        }
    }
}