import { Pokemon } from "./Class_Pokemon.js"
import { Pokedex } from "../Structures/Pokedex.js"
import { ecrire_dans_Zone_de_Texte } from "../Fonctions_Utils/Affichage.js"

export class Equipe {
    /**
     * Permet de créer un nouvel objet Equipe.
     * @constructor
     * @param {string} dresseur - Nom du dresseur de l'Equipe.
     */
    constructor(dresseur) {
        this.dresseur = dresseur
        this.pokemons = []
    }

    Creer_Equipe_Red() {
        ecrire_dans_Zone_de_Texte("L'équipe de Red a été crée !")
        this.pokemons.push(new Pokemon(Pokedex.PIKACHU))
        this.pokemons.push(new Pokemon(Pokedex.LOKHLASS))
        this.pokemons.push(new Pokemon(Pokedex.FLORIZARRE))
    }

    Creer_Equipe_Blue() {
        ecrire_dans_Zone_de_Texte("L'équipe de Blue a été crée !")
        this.pokemons.push(new Pokemon(Pokedex.TAUROS))
        this.pokemons.push(new Pokemon(Pokedex.NOADKOKO))
        this.pokemons.push(new Pokemon(Pokedex.DRACAUFEU))
    }

    Creer_Equipe_Leaf() {
        ecrire_dans_Zone_de_Texte("L'équipe de Leaf a été crée !")
        this.pokemons.push(new Pokemon(Pokedex.MELODELFE))
        this.pokemons.push(new Pokemon(Pokedex.ECTOPLASMA))
        this.pokemons.push(new Pokemon(Pokedex.TORTANK))
    }

    Check_Equipe_KO() {
        for (const pokemon of this.pokemons) {
            if (pokemon.KO === false) {
                return false
            }
        }
        return true
    }
}