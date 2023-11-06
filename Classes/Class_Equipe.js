import { Pokemon } from "./Class_Pokemon.js"
import { Pokedex } from "../Structures/Pokedex.js"

export class Equipe {
    constructor(dresseur) {
        this.dresseur = dresseur
        this.pokemons = []
    }

    Creer_Equipe_Red() {
        console.log("L'équipe de Red a été crée !")
        this.pokemons.push(new Pokemon(Pokedex.PIKACHU))
        this.pokemons.push(new Pokemon(Pokedex.LOKHLASS))
        this.pokemons.push(new Pokemon(Pokedex.FLORIZARRE))
    }

    Creer_Equipe_Blue() {
        console.log("L'équipe de Blue a été crée !")
        this.pokemons.push(new Pokemon(Pokedex.TAUROS))
        this.pokemons.push(new Pokemon(Pokedex.NOADKOKO))
        this.pokemons.push(new Pokemon(Pokedex.DRACAUFEU))
    }

    Creer_Equipe_Leaf() {
        console.log("L'équipe de Leaf a été crée !")
        this.pokemons.push(new Pokemon(Pokedex.MELODELFE))
        this.pokemons.push(new Pokemon(Pokedex.ECTOPLASMA))
        this.pokemons.push(new Pokemon(Pokedex.TORTANK))
    }

    Creer_Equipe_test() {
        console.log("L'équipe de Leaf a été crée !")
        this.pokemons.push(new Pokemon(Pokedex.test))
        this.pokemons.push(new Pokemon(Pokedex.test))
        this.pokemons.push(new Pokemon(Pokedex.test))
    }

    Check_Equipe_KO() {
        for (const pokemon of this.pokemons) {
            if (pokemon.KO == false) {
                return false
            }
        }
        return true
    }
}