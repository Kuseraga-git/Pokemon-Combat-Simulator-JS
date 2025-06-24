import { Equipe } from "./Classes/Class_Equipe.js";
import { Jeu } from "./Classes/Class_Jeu.js";
import { affichageGeneral } from "./Fonctions_Utils/Affichage.js";

// #################################################################
// ###                      INITIALISATION                       ###
// #################################################################

const Partie = new Jeu()
const equipe1 = new Equipe("Leaf")
const equipe2 = new Equipe("Red")

equipe1.Creer_Equipe_Leaf()
equipe2.Creer_Equipe_Red()

Partie.Ajouter_Dresseur(equipe1)
Partie.Ajouter_Dresseur(equipe2)

// #################################################################
// ###                         AFFICHAGE                         ###
// #################################################################

affichageGeneral(Partie)
