import { Equipe } from './Classes/Class_Equipe.js'
import { Jeu } from './Classes/Class_Jeu.js'
import { afficherEquipe1, afficherEquipe2 } from './Fonctions_Utils/Affichage.js'

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

afficherEquipe1(Partie.dresseurs[0]);
afficherEquipe2(Partie.dresseurs[1])


  

  