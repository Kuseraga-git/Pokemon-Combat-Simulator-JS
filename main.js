import { Equipe } from "./Classes/Class_Equipe.js";
import { Jeu } from "./Classes/Class_Jeu.js";
import { affichageGeneral } from "./Fonctions_Utils/Affichage.js";

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

affichageGeneral(Partie)

