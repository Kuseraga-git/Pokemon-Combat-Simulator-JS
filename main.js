import { Equipe } from "./Classes/Class_Equipe.js";
import { Jeu } from "./Classes/Class_Jeu.js";
import { affichageGeneral } from "./Fonctions_Utils/Affichage.js";
import { Meteo } from "./Structures/Meteo.js";

// #################################################################
// ###                      INITIALISATION                       ###
// #################################################################

// Vous devez initialiser une instance de jeu - Codez en dessous
const jeu = new Jeu()
const equipe1 = new Equipe("Oscar")
const equipe2 = new Equipe("Jean")
equipe1.Creer_Equipe_Blue()
equipe2.Creer_Equipe_Red()
jeu.Ajouter_Dresseur(equipe1)
jeu.Ajouter_Dresseur(equipe2)

// #################################################################
// ###                         AFFICHAGE                         ###
// #################################################################

// Vous devez utiliser la/les fonction/fonctions d'affichage sur l'écran - Codez en dessous
affichageGeneral(jeu)