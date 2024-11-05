import { Categorie } from "./Categories.js"
import { Types } from "./Types.js"
import { Infliger_Degats, Calcul_Degats } from "../Fonctions_Utils/Offensif.js"
import { Chance_Effet_Supplementaire, Baisser_Stat, Degat_de_Recul, Soigner_PV, Augmenter_Stat } from "../Fonctions_Utils/Effets_Speciaux.js"
import { Appliquer_Confusion, Appliquer_Peur, Appliquer_Statut, Calcul_Probabilite } from "../Fonctions_Utils/Alterations.js"
import { Baisser_Precision, Check_Precision } from "./Precision.js"
import { Statut } from "./Statut.js"
import { Appliquer_meteo } from "../Fonctions_Utils/Effets_Meteo.js"
import { Meteo } from "./Meteo.js"
import { ecrire_dans_Zone_de_Texte } from "../Fonctions_Utils/Affichage.js"

export const Capacites = {
    ELECTACLE: {
        Nom_capa: "Electacle",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.ELECTRICK,
        Puissance: 120,
        Precision: 100,
        PP: 15,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                Degat_de_Recul(pokemon, tmp[0], 0.3)
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    CALINERIE: {
        Nom_capa: "Câlinerie",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.FEE,
        Puissance: 90,
        Precision: 90,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Chance_Effet_Supplementaire(10)) {
                    Baisser_Stat(adversaire, "Attaque")
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    CASSE_BRIQUE: {
        Nom_capa: "Casse-Brique",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.COMBAT,
        Puissance: 75,
        Precision: 100,
        PP: 15,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    QUEUE_DE_FER: {
        Nom_capa: "Queue de Fer",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.ACIER,
        Puissance: 100,
        Precision: 75,
        PP: 15,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Chance_Effet_Supplementaire(30)) {
                    Baisser_Stat(adversaire, "Defense")
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    MEGA_SANGSUE: {
        Nom_capa: "Méga-Sangsue",
        Categorie: Categorie.SPECIAL,
        Type: Types.PLANTE,
        Puissance: 75,
        Precision: 100,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                Soigner_PV(pokemon, Math.trunc(tmp[0] / 2))
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    SEISME: {
        Nom_capa: "Seisme",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.SOL,
        Puissance: 100,
        Precision: 100,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    BOMB_BEURK: {
        Nom_capa: "Bombe Beurk",
        Categorie: Categorie.SPECIAL,
        Type: Types.POISON,
        Puissance: 90,
        Precision: 100,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Calcul_Probabilite(30)) {
                    Appliquer_Statut(adversaire, Statut.EMPOISONNEMENT)
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    TEMPETE_VERTE: {
        Nom_capa: "Tempête verte",
        Categorie: Categorie.SPECIAL,
        Type: Types.PLANTE,
        Puissance: 130,
        Precision: 90,
        PP: 5,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                Baisser_Stat(pokemon, "Spe_Attaque")
                Baisser_Stat(pokemon, "Spe_Attaque")
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    SURF: {
        Nom_capa: "Surf",
        Categorie: Categorie.SPECIAL,
        Type: Types.EAU,
        Puissance: 90,
        Precision: 100,
        PP: 15,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            switch (Jeu.Meteo) {
                case Meteo.PLUIE:
                    Puissance *= (3/2)
                    break;
                case Meteo.SOLEIL:
                    Puissance *= (1/2)
                default:
                    break;
            }
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    BLIZZARD: {
        Nom_capa: "Blizzard",
        Categorie: Categorie.SPECIAL,
        Type: Types.GLACE,
        Puissance: 120,
        Precision: 70,
        PP: 5,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Jeu.Meteo === Meteo.GRELE || Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Calcul_Probabilite(10)) {
                    Appliquer_Statut(adversaire, Statut.GEL)
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    PSYKO: {
        Nom_capa: "Psyko",
        Categorie: Categorie.SPECIAL,
        Type: Types.PSY,
        Puissance: 90,
        Precision: 100,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Chance_Effet_Supplementaire(10)) {
                    Baisser_Stat(adversaire, "Spe_Defense")
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    POUVOIR_ANTIQUE: {
        Nom_capa: "Pouvoir Antique",
        Categorie: Categorie.SPECIAL,
        Type: Types.ROCHE,
        Puissance: 60,
        Precision: 100,
        PP: 5,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (tmp[0] > 0 && Chance_Effet_Supplementaire(10)) {
                    Augmenter_Stat(pokemon, "Attaque")
                    Augmenter_Stat(pokemon, "Defense")
                    Augmenter_Stat(pokemon, "Spe_Attaque")
                    Augmenter_Stat(pokemon, "Spe_Defense")
                    Augmenter_Stat(pokemon, "Vitesse")
                }
                
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    DEFLAGRATION: {
        Nom_capa: "Déflagration",
        Categorie: Categorie.SPECIAL,
        Type: Types.FEU,
        Puissance: 110,
        Precision: 85,
        PP: 5,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            switch (Jeu.Meteo) {
                case Meteo.SOLEIL:
                    Puissance *= (3/2)
                    break;
                case Meteo.PLUIE:
                    Puissance *= (1/2)
                default:
                    break;
            }
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Calcul_Probabilite(10)) {
                    Appliquer_Statut(adversaire, Statut.BRULURE)
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    VENT_VIOLENT: {
        Nom_capa: "Vent Violent",
        Categorie: Categorie.SPECIAL,
        Type: Types.VOL,
        Puissance: 120,
        Precision: 70,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Jeu.Meteo === Meteo.SOLEIL) {
                Precision = 50
            }
            if (Jeu.Meteo === Meteo.PLUIE || Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Calcul_Probabilite(30)){
                    Appliquer_Confusion(adversaire)
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    DRACO_CHOC: {
        Nom_capa: "Draco-Choc",
        Categorie: Categorie.SPECIAL,
        Type: Types.DRAGON,
        Puissance: 85,
        Precision: 100,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    EXPLOFORCE: {
        Nom_capa: "Exploforce",
        Categorie: Categorie.SPECIAL,
        Type: Types.COMBAT,
        Puissance: 120,
        Precision: 70,
        PP: 5,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Chance_Effet_Supplementaire(10)) {
                    Baisser_Stat(adversaire, "Spe_Defense")
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    MEGAFOUET: {
        Nom_capa: "Mégafouet",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.PLANTE,
        Puissance: 120,
        Precision: 85,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    DAMOCLES :{
        Nom_capa: "Damoclès",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.NORMAL,
        Puissance: 120,
        Precision: 100,
        PP: 15,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                Degat_de_Recul(pokemon, tmp[0], 0.3)
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    EBOULEMENT: {
        Nom_capa: "Eboulement",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.ROCHE,
        Puissance: 80,
        Precision: 90,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Calcul_Probabilite(30)){
                    Appliquer_Peur(adversaire)
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    HYDROCANON: {
        Nom_capa: "Hydrocanon",
        Categorie: Categorie.SPECIAL,
        Type: Types.EAU,
        Puissance: 120,
        Precision: 85,
        PP: 5,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            switch (Jeu.Meteo) {
                case Meteo.PLUIE:
                    Puissance *= (3/2)
                    break;
                case Meteo.SOLEIL:
                    Puissance *= (1/2)
                default:
                    break;
            }
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    LUMINOCANON: {
        Nom_capa: "Luminocanon",
        Categorie: Categorie.SPECIAL,
        Type: Types.ACIER,
        Puissance: 80,
        Precision: 100,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Chance_Effet_Supplementaire(10)) {
                    Baisser_Stat(adversaire, "Spe_Defense")
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    LASER_GLACE: {
        Nom_capa: "Laser Glace",
        Categorie: Categorie.SPECIAL,
        Type: Types.GLACE,
        Puissance: 90,
        Precision: 100,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Calcul_Probabilite(10)) {
                    Appliquer_Statut(adversaire, Statut.GEL)
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    AURASPHERE: {
        Nom_capa: "Aurasphère",
        Categorie: Categorie.SPECIAL,
        Type: Types.COMBAT,
        Puissance: 80,
        PP: 20,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
            Infliger_Degats(adversaire, tmp[0])
            if (tmp[1]) {
                ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
            }
            adversaire.Check_KO()
        }
    },
    POUVOIR_LUNAIRE: {
        Nom_capa: "Pouvoir Lunaire",
        Categorie: Categorie.SPECIAL,
        Type: Types.FEE,
        Puissance: 95,
        Precision: 100,
        PP: 15,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Chance_Effet_Supplementaire(30)) {
                    Baisser_Stat(adversaire, "Spe_Attaque")
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    TRIPLATTAQUE: {
        Nom_capa: "Triplattaque",
        Categorie: Categorie.SPECIAL,
        Type: Types.NORMAL,
        Puissance: 80,
        Precision: 100,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Calcul_Probabilite(20)) {
                    switch (Math.floor(Math.random() * 3)) {
                        case 0:
                            Appliquer_Statut(adversaire, Statut.BRULURE)
                            break;
                        case 1:
                            Appliquer_Statut(adversaire, Statut.PARALYSIE)
                            break;
                        case 2:
                            Appliquer_Statut(adversaire, Statut.GEL)
                            break;
                        default:
                            break;
                    }
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    LANCE_FLAMME: {
        Nom_capa: "Lance Flamme",
        Categorie: Categorie.SPECIAL,
        Type: Types.FEU,
        Puissance: 90,
        Precision: 100,
        PP: 15,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            switch (Jeu.Meteo) {
                case Meteo.SOLEIL:
                    Puissance *= (3/2)
                    break;
                case Meteo.PLUIE:
                    Puissance *= (1/2)
                default:
                    break;
            }
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Calcul_Probabilite(10)) {
                    Appliquer_Statut(adversaire, Statut.BRULURE)
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    TONNERRE: {
        Nom_capa: "Tonnerre",
        Categorie: Categorie.SPECIAL,
        Type: Types.ELECTRICK,
        Puissance: 90,
        Precision: 100,
        PP: 15,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Calcul_Probabilite(10)) {
                    Appliquer_Statut(adversaire, Statut.PARALYSIE)
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    VIBROBSCUR: {
        Nom_capa: "Vibrobscur",
        Categorie: Categorie.SPECIAL,
        Type: Types.TENEBRE,
        Puissance: 80,
        Precision: 100,
        PP: 15,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Calcul_Probabilite(20)){
                    Appliquer_Peur(adversaire)
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    BALLOMBRE: {
        Nom_capa: "Ball'Ombre",
        Categorie: Categorie.SPECIAL,
        Type: Types.SPECTRE,
        Puissance: 80,
        Precision: 100,
        PP: 15,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Chance_Effet_Supplementaire(20)) {
                    Baisser_Stat(adversaire, "Spe_Defense")
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    ECO_SPHERE: {
        Nom_capa: "Eco-Sphère",
        Categorie: Categorie.SPECIAL,
        Type: Types.PLANTE,
        Puissance: 90,
        Precision: 100,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Chance_Effet_Supplementaire(10)) {
                    Baisser_Stat(adversaire, "Spe_Defense")
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    DRACO_METEORE: {
        Nom_capa: "Draco Météore",
        Categorie: Categorie.SPECIAL,
        Type: Types.DRAGON,
        Puissance: 130,
        Precision: 90,
        PP: 5,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                    let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                    Infliger_Degats(adversaire, tmp[0])
                    if (tmp[1]) {
                        ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                    }
                    Baisser_Stat(pokemon, "Spe_Attaque")
                    Baisser_Stat(pokemon, "Spe_Attaque")
                    adversaire.Check_KO()
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    COUP_VICTOIRE: {
        Nom_capa: "Coup Victoire",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.FEU,
        Puissance: 180,
        Precision: 95,
        PP: 5,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            switch (Jeu.Meteo) {
                case Meteo.SOLEIL:
                    Puissance *= (3/2)
                    break;
                case Meteo.PLUIE:
                    Puissance *= (1/2)
                default:
                    break;
            }
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                Baisser_Stat(pokemon, "Defense")
                Baisser_Stat(pokemon, "Spe_Defense")
                Baisser_Stat(pokemon, "Vitesse")
                adversaire.Check_KO()
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    FLAMME_BLEUE: {
        Nom_capa: "Flamme Bleue",
        Categorie: Categorie.SPECIAL,
        Type: Types.FEU,
        Puissance: 130,
        Precision: 85,
        PP: 5,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            switch (Jeu.Meteo) {
                case Meteo.SOLEIL:
                    Puissance *= (3/2)
                    break;
                case Meteo.PLUIE:
                    Puissance *= (1/2)
                default:
                    break;
            }
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Calcul_Probabilite(20)) {
                    Appliquer_Statut(adversaire, Statut.BRULURE)
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    OCROUPI: {
        Nom_capa: "Ocroupi",
        Categorie: Categorie.SPECIAL,
        Type: Types.EAU,
        Puissance: 90,
        Precision: 85,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            switch (Jeu.Meteo) {
                case Meteo.PLUIE:
                    Puissance *= (3/2)
                    break;
                case Meteo.SOLEIL:
                    Puissance *= (1/2)
                default:
                    break;
            }
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Calcul_Probabilite(30)) {
                    Baisser_Precision(adversaire)
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    COUP_CROIX: {
        Nom_capa: "Coup Croix",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.COMBAT,
        Puissance: 100,
        Precision: 80,
        PP: 5,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique + 1)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    BOURDON: {
        Nom_capa: "Bourdon",
        Categorie: Categorie.SPECIAL,
        Type: Types.INSECTE,
        Puissance: 90,
        Precision: 100,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Chance_Effet_Supplementaire(10)) {
                    Baisser_Stat(adversaire, "Spe_Defense")
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    MACHOUILLE: {
        Nom_capa: "Machouille",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.TENEBRE,
        Puissance: 80,
        Precision: 100,
        PP: 15,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Chance_Effet_Supplementaire(20)) {
                    Baisser_Stat(adversaire, "Defense")
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    HYDRO_QUEUE: {
        Nom_capa: "Hydro Queue",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.EAU,
        Puissance: 90,
        Precision: 90,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            switch (Jeu.Meteo) {
                case Meteo.PLUIE:
                    Puissance *= (3/2)
                    break;
                case Meteo.SOLEIL:
                    Puissance *= (1/2)
                default:
                    break;
            }
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    DESTRUCTION: {
        Nom_capa: "Destruction",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.NORMAL,
        Puissance: 200,
        Precision: 100,
        PP: 5,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                pokemon.PV_Actuel = 0
                pokemon.Check_KO()
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    EXPLOSION: {
        Nom_capa: "Explosion",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.NORMAL,
        Puissance: 250,
        Precision: 100,
        PP: 5,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                pokemon.PV_Actuel = 0
                pokemon.Check_KO()
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    ULTIMAWASHI: {
        Nom_capa: "Ultimawashi",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.NORMAL,
        Puissance: 120,
        Precision: 75,
        PP: 5,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    SURPUISSANCE: {
        Nom_capa: "Surpuissance",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.COMBAT,
        Puissance: 120,
        Precision: 100,
        PP: 5,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                Baisser_Stat(adversaire, "Attaque")
                Baisser_Stat(adversaire, "Defense")
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    FATAL_FOUDRE:{
        Nom_capa: "Fatal Foudre",
        Categorie: Categorie.SPECIAL,
        Type: Types.ELECTRICK,
        Puissance: 110,
        Precision: 70,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Jeu.Meteo === Meteo.SOLEIL) {
                Precision = 50
            }
            if (Jeu.Meteo === Meteo.PLUIE || Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Calcul_Probabilite(30)) {
                    Appliquer_Statut(adversaire, Statut.PARALYSIE)
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    } ,
    FRACASS_TETE:{
        Nom_capa: "Fracass'Tête",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.ROCHE,
        Puissance: 150,
        Precision: 80,
        PP: 5,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                Degat_de_Recul(pokemon, tmp[0], 0.5)
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    DETRICANON:{
        Nom_capa: "Détricanon",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.POISON,
        Puissance: 120,
        Precision: 80,
        PP: 5,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Calcul_Probabilite(30)) {
                    Appliquer_Statut(adversaire, Statut.EMPOISONNEMENT)
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    OURAGAN: {
        Nom_capa: "Ouragan",
        Categorie: Categorie.SPECIAL,
        Type: Types.DRAGON,
        Puissance: 40,
        Precision: 100,
        PP: 20,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Calcul_Probabilite(20)){
                    Appliquer_Peur(adversaire)
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    TORGNOLE: {
        Nom_capa: "Torgnole",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.NORMAL,
        Puissance: 25,
        Precision: 100,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let i = 0
                const randint = Math.floor(Math.random() * 4) + 1
                for (i; i <= randint && adversaire.KO === false ;i++){
                    let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                    Infliger_Degats(adversaire, tmp[0])
                    if (tmp[1]) {
                        ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                    }
                    adversaire.Check_KO()
                } 
                ecrire_dans_Zone_de_Texte(`Touché ${i} fois !`)
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    DOUBLE_LASER: {
        Nom_capa: "Double Laser",
        Categorie: Categorie.SPECIAL,
        Type: Types.PSY,
        Puissance: 40,
        Precision: 100,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let i = 0
                for (i; i<2 && adversaire.KO === false ;i++){
                    let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                    Infliger_Degats(adversaire, tmp[0])
                    if (tmp[1]) {
                        ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                    }
                    adversaire.Check_KO()
                } 
                ecrire_dans_Zone_de_Texte(`Touché ${i} fois !`)
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    BANG_SONIQUE: {
        Nom_capa: "Bang Sonique",
        Categorie: Categorie.SPECIAL,
        Type: Types.NORMAL,
        Puissance: 140,
        Precision: 100,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    OVERDRIVE: {
        Nom_capa: "Overdrive",
        Categorie: Categorie.SPECIAL,
        Type: Types.ELECTRICK,
        Puissance: 80,
        Precision: 100,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    BOUTEFEU: {
        Nom_capa: "Boutefeu",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.FEU,
        Puissance: 120,
        Precision: 100,
        PP: 15,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            switch (Jeu.Meteo) {
                case Meteo.SOLEIL:
                    Puissance *= (3/2)
                    break;
                case Meteo.PLUIE:
                    Puissance *= (1/2)
                default:
                    break;
            }
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Calcul_Probabilite(10)) {
                    Appliquer_Statut(adversaire, Statut.BRULURE)
                }
                Degat_de_Recul(pokemon, tmp[0], 0.3)

            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    TREMPETTE: {
        Nom_capa: "Trempette",
        Categorie: Categorie.STATUS,
        Type: Types.EAU,
        PP: 40,
        Effet(Jeu, adversaire, pokemon) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            ecrire_dans_Zone_de_Texte(`Il ne se passe rien ...`)
        }
    },
    ZENITH: {
        Nom_capa: "Zénith",
        Categorie: Categorie.STATUS,
        Type: Types.FEU,
        PP: 5,
        Effet(Jeu, adversaire, pokemon) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} !`)
            Appliquer_meteo(Jeu, Meteo.SOLEIL)
            ecrire_dans_Zone_de_Texte(`Les rayons du soleil brillent !`)
        }
    },
    DANSE_PLUIE: {
        Nom_capa: "Danse Pluie",
        Categorie: Categorie.STATUS,
        Type: Types.EAU,
        PP: 5,
        Effet(Jeu, adversaire, pokemon) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} !`)
            Appliquer_meteo(Jeu, Meteo.PLUIE)
            ecrire_dans_Zone_de_Texte(`Il commence à pleuvoir !`)
        }
    },
    TEMPETE_DE_SABLE: {
        Nom_capa: "Tempête de Sable",
        Categorie: Categorie.STATUS,
        Type: Types.SOL,
        PP: 5,
        Effet(Jeu, adversaire, pokemon) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} !`)
            Appliquer_meteo(Jeu, Meteo.TEMPETE_DE_SABLE)
            ecrire_dans_Zone_de_Texte(`Une tempête de sable se prépare !`)
        }
    },
    GRELE: {
        Nom_capa: "Grêle",
        Categorie: Categorie.STATUS,
        Type: Types.GLACE,
        PP: 5,
        Effet(Jeu, adversaire, pokemon) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} !`)
            Appliquer_meteo(Jeu, Meteo.GRELE)
            ecrire_dans_Zone_de_Texte(`Il commence à grêler !`)
        }
    },
    AURORE: {
        Nom_capa: "Aurore",
        Categorie: Categorie.STATUS,
        Type: Types.NORMAL,
        PP: 5,
        Effet(Jeu, adversaire, pokemon) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} !`)
            if (pokemon.PV_Actuel == pokemon.PV_Max) {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} a déjà tous ses PV !`)
            } else {
                let soins = 1/2
                switch (Jeu.Meteo) {
                    case Meteo.SOLEIL:
                        soins = 2/3
                        break
                    case Meteo.PLUIE || Meteo.TEMPETE_DE_SABLE || Meteo.GRELE:
                        soins = 1/4
                        break
                    default:
                        break
                }
                Soigner_PV(pokemon, pokemon.PV_Max * soins)
            }
        }
    },
    RAYON_LUNE: {
        Nom_capa: "Rayon Lune",
        Categorie: Categorie.STATUS,
        Type: Types.FEE,
        PP: 5,
        Effet(Jeu, adversaire, pokemon) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} !`)
            if (pokemon.PV_Actuel == pokemon.PV_Max) {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} a déjà tous ses PV !`)
            } else {
                let soins = 1/2
                switch (Jeu.Meteo) {
                    case Meteo.SOLEIL:
                        soins = 2/3
                        break
                    case Meteo.PLUIE || Meteo.TEMPETE_DE_SABLE || Meteo.GRELE:
                        soins = 1/4
                        break
                    default:
                        break
                }
                Soigner_PV(pokemon, pokemon.PV_Max * soins)
            }
        }
    },
    SYNTHESE: {
        Nom_capa: "Synthèse",
        Categorie: Categorie.STATUS,
        Type: Types.PLANTE,
        PP: 5,
        Effet(Jeu, adversaire, pokemon) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} !`)
            if (pokemon.PV_Actuel == pokemon.PV_Max) {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} a déjà tous ses PV !`)
            } else {
                let soins = 1/2
                switch (Jeu.Meteo) {
                    case Meteo.SOLEIL:
                        soins = 2/3
                        break
                    case Meteo.PLUIE || Meteo.TEMPETE_DE_SABLE || Meteo.GRELE:
                        soins = 1/4
                        break
                    default:
                        break
                }
                Soigner_PV(pokemon, pokemon.PV_Max * soins)
            }
        }
    },
    CROISSANCE: {
        Nom_capa: "Croissance",
        Categorie: Categorie.STATUS,
        Type: Types.NORMAL,
        PP: 20,
        Effet(Jeu, adversaire, pokemon) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} !`)
            Augmenter_Stat(pokemon, "Attaque")
            Augmenter_Stat(pokemon, "Spe_Attaque")
            if (Jeu.Meteo == Meteo.SOLEIL) {
                Augmenter_Stat(pokemon, "Attaque")
                Augmenter_Stat(pokemon, "Spe_Attaque")
            }
        }
    },
    // A refacto, manque effet tour rapide
    // TOUPIEECLAT: {
    //     Nom_capa: "Toupi éclat",
    //     Categorie: Categorie.PHYSIQUE,
    //     Type: Types.POISON,
    //     Puissance: 30,
    //     Precision: 100,
    //     Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
    //         ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
    //         if (Check_Precision(Precision, pokemon)) {
    //             let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
    //             Infliger_Degats(adversaire, tmp[0])
    //             if (tmp[1]) {
    //                 ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
    //             }
    //             adversaire.Check_KO()
    //             if (adversaire.KO === false && tmp[0] > 0) {
    //                 Appliquer_Statut(adversaire, Statut.EMPOISONNEMENT)
    //             }
    //         } else {
    //             ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
    //         }
    //     }
    // },
    VIBRASOIN: {
        Nom_capa: "Vibrasoin",
        Categorie: Categorie.STATUS,
        Type: Types.PSY,
        PP: 10,
        Effet(Jeu, adversaire, pokemon) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} !`)
            if (adversaire.PV_Actuel == adversaire.PV_Max) {
                ecrire_dans_Zone_de_Texte(`${adversaire.nom} a déjà tous ses PV !`)
            } else {
                Soigner_PV(adversaire, adversaire.PV_Max /2)
            }
        }
    },
    CANON_DYNAMAX: {
        Nom_capa: "Canondynamax",
        Categorie: Categorie.SPECIAL,
        Type: Types.DRAGON,
        Puissance: 100,
        Precision: 100,
        PP: 5,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    FORCE: {
        Nom_capa: "Force",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.NORMAL,
        Puissance: 80,
        Precision: 100,
        PP: 15,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    CHOC_METEORE: {
        Nom_capa: "ChocMétéore",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.ACIER,
        Puissance: 100,
        Precision: 100,
        PP: 5,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    LAME_PANGEENNE: {
        Nom_capa: "LamePangéenne",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.SOL,
        Puissance: 120,
        Precision: 85,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    ELECANON: {
        Nom_capa: "Élecanon",
        Categorie: Categorie.SPECIAL,
        Type: Types.ELECTRICK,
        Puissance: 120,
        Precision: 50,
        PP: 5,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0) {
                    Appliquer_Statut(adversaire, Statut.PARALYSIE)
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    DANSE_LAMES: {
        Nom_capa: "Danse Lames",
        Categorie: Categorie.STATUS,
        Type: Types.NORMAL,
        PP: 20,
        Effet(Jeu, adversaire, pokemon) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} !`)
            Augmenter_Stat(pokemon, "Attaque")
            Augmenter_Stat(pokemon, "Attaque")
            
        }
    },
    CLOSES_COMBAT: {
        Nom_capa: "Closes combat",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.COMBAT,
        Puissance: 120,
        Precision: 100,
        PP: 5,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                Baisser_Stat(pokemon, "Defense")
                Baisser_Stat(pokemon, "Spe_Defense")
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    CRASH_OBSCUR: {
        Nom_capa: "Crash Obscur",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.TENEBRE,
        Puissance: 80,
        Precision: 100,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Chance_Effet_Supplementaire(10)) {
                    Appliquer_Statut(adversaire, Statut.SOMMEIL)
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    ONDE_FOLIE: {
        Nom_capa: "Onde Folie",
        Categorie: Categorie.SPECIAL,
        Type: Types.SPECTRE,
        Precision: 100,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                Appliquer_Confusion(adversaire)
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    LUTTE: {
        // Lutte ne doit pas être mise dans les capacités d'un pokemon
        Nom_capa: "Lutte",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.NORMAL,
        Puissance: 50,
        PP: 1000,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type) {
            let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
            Infliger_Degats(adversaire, tmp[0])
            if (tmp[1]) {
                ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
            }
            adversaire.Check_KO()
            Degat_de_Recul(pokemon, pokemon.PV_Max, 0.25)
        }
    },
    PIETISOL: {
        Nom_capa: "Piétisol",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.SOL,
        Puissance: 60,
        Precision: 100,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0) {
                    Baisser_Stat(adversaire, "Vitesse")
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    RONFLEMENT: {
        Nom_capa: "Ronflement",
        Categorie: Categorie.SPECIAL,
        Type: Types.NORMAL,
        Puissance: 50,
        Precision: 100,
        PP: 15,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon) && pokemon.Statut == Statut.SOMMEIL) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Calcul_Probabilite(20)) {
                    Appliquer_Peur(adversaire)
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    // Manque le bypass du clonage
    MEGAPHONE: {
        Nom_capa: "Megaphone",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.NORMAL,
        Puissance: 90,
        Precision: 100,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    AQUA_BRECHE: {
        Nom_capa: "Aqua Breche",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.EAU,
        Puissance: 85,
        Precision: 100,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            switch (Jeu.Meteo) {
                case Meteo.PLUIE:
                    Puissance *= (3/2)
                    break;
                case Meteo.SOLEIL:
                    Puissance *= (1/2)
                default:
                    break;
            }
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Calcul_Probabilite(20)) {
                    Baisser_Stat(adversaire, "Defense")
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    LAME_DE_ROC: {
        Nom_capa: "Lame De Roc",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.ROCHE,
        Puissance: 100,
        Precision: 80,
        PP: 5,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique + 1)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    DANSE_VICTOIRE: {
        Nom_capa: "Danse Victoire",
        Categorie: Categorie.STATUS,
        Type: Types.COMBAT,
        PP: 10,
        Effet(Jeu, adversaire, pokemon) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} !`)
            Augmenter_Stat(pokemon, "Attaque")
            Augmenter_Stat(pokemon, "Defense")
            Augmenter_Stat(pokemon, "Vitesse")
        }
    },
    MORTIER_MATCHA: {
        Nom_capa: "Mortier Matcha",
        Categorie: Categorie.SPECIAL,
        Type: Types.PLANTE,
        Puissance: 80,
        Precision: 90,
        PP: 15,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                Soigner_PV(pokemon, Math.trunc(tmp[0] / 2))
                if (adversaire.KO === false && tmp[0] > 0 && Calcul_Probabilite(20)) {
                    Appliquer_Statut(adversaire, Statut.BRULURE)
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    JET_DE_VAPEUR: {
        Nom_capa: "Jet de Vapeur",
        Categorie: Categorie.SPECIAL,
        Type: Types.EAU,
        Puissance: 110,
        Precision: 95,
        PP: 5,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            switch (Jeu.Meteo) {
                case Meteo.PLUIE:
                    Puissance *= (3/2)
                    break;
                case Meteo.SOLEIL:
                    Puissance *= (1/2)
                default:
                    break;
            }
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Calcul_Probabilite(30)) {
                    Appliquer_Statut(adversaire, Statut.BRULURE)
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    CHOC_EMOTIONEL: {
        Nom_capa: "Choc Emotionel",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.FEE,
        Puissance: 75,
        Precision: 100,
        PP: 15,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0) {
                    Baisser_Stat(adversaire, "Spe_Attaque")
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    DOUCHE_FROIDE: {
        Nom_capa: "Douche Froide",
        Categorie: Categorie.SPECIAL,
        Type: Types.EAU,
        Puissance: 50,
        Precision: 100,
        PP: 20,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            switch (Jeu.Meteo) {
                case Meteo.PLUIE:
                    Puissance *= (3/2)
                    break;
                case Meteo.SOLEIL:
                    Puissance *= (1/2)
                default:
                    break;
            }
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, pokemon.PV_Actuel <= pokemon.PV_Max/2? Puissance *2 : Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0) {
                    Baisser_Stat(adversaire, "Attaque")
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    SAUMURE: {
        Nom_capa: "Saumure",
        Categorie: Categorie.SPECIAL,
        Type: Types.EAU,
        Puissance: 65,
        Precision: 100,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            switch (Jeu.Meteo) {
                case Meteo.PLUIE:
                    Puissance *= (3/2)
                    break;
                case Meteo.SOLEIL:
                    Puissance *= (1/2)
                default:
                    break;
            }
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, pokemon.PV_Actuel <= pokemon.PV_Max/2? Puissance *2 : Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    POING_METEORE: {
        Nom_capa: "Poing Meteore",
        Categorie: Categorie.PHYSIQUE,
        Type: Types.ACIER,
        Puissance: 90,
        Precision: 90,
        PP: 10,
        Effet(Jeu, adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    ecrire_dans_Zone_de_Texte("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO === false && tmp[0] > 0 && Chance_Effet_Supplementaire(20)) {
                    Augmenter_Stat(pokemon, "Attaque")
                }
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    STRIDO_SON: {
        Nom_capa: "Strido-Son",
        Categorie: Categorie.STATUS,
        Type: Types.ACIER,
        Precision: 85,
        PP: 40,
        Effet(Jeu, adversaire, pokemon, Type = this.Type, Precision = this.Precision) {
            ecrire_dans_Zone_de_Texte(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                Baisser_Stat(adversaire, "Spe_Defense")
                Baisser_Stat(adversaire, "Spe_Defense")
                Baisser_Stat(adversaire, "Spe_Defense")
            } else {
                ecrire_dans_Zone_de_Texte(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
}