import { Equipe } from "./Classes/Class_Equipe.js";
import { Jeu } from "./Classes/Class_Jeu.js";
import { affichePokemon1, affichePokemon2, afficherEquipe1 } from "./Fonctions_Utils/Affichage.js";

// #################################################################
// ###                      INITIALISATION                       ###
// #################################################################

let Partie = new Jeu()
let equipe1 = new Equipe("Leaf", 1)
equipe1.Creer_Equipe_Leaf()
Partie.Ajouter_Dresseur(equipe1)

let equipe2 = new Equipe("Red", 2)
equipe2.Creer_Equipe_Red()
Partie.Ajouter_Dresseur(equipe2)

// #################################################################

affichePokemon1(Partie.dresseurs[0].pokemons[Partie.index_pokemon1], Partie.dresseurs[1].pokemons[Partie.index_pokemon2], Partie)
affichePokemon2(Partie.dresseurs[1].pokemons[Partie.index_pokemon2])

afficherEquipe1(Partie.dresseurs[0], Partie)
