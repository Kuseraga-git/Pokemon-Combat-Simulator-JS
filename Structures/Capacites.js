import { Categorie } from "./Categories.js"
import { Types } from "./Types.js"
import { Infliger_Degats, Calcul_Degats } from "../Fonctions_Utils/Offensif.js"
import { Chance_Effet_Supplementaire, Baisser_Stat, Degat_de_Recul, Soigner_PV, Augmenter_Stat } from "../Fonctions_Utils/Effets_Speciaux.js"
import { Appliquer_Confusion, Appliquer_Peur, Appliquer_Statut, Calcul_Probabilite } from "../Fonctions_Utils/Alterations.js"
import { Baisser_Precision, Check_Precision } from "./Precision.js"
import { Statut } from "./Statut.js"

export const Capacites = {
    ELECTACLE : {
        Nom_capa : "Electacle",
        Categorie : Categorie.PHYSIQUE,
        Type : Types.ELECTRICK,
        Puissance : 120,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                Degat_de_Recul(pokemon, tmp[0], 0.3)
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    CALINERIE : {
        Nom_capa : "Câlinerie",
        Categorie : Categorie.PHYSIQUE,
        Type : Types.FEE,
        Puissance : 90,
        Precision : 90,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Chance_Effet_Supplementaire(10)) {
                    Baisser_Stat(adversaire, "Attaque")
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    CASSE_BRIQUE : {
        Nom_capa : "Casse-Brique",
        Categorie : Categorie.PHYSIQUE,
        Type : Types.COMBAT,
        Puissance : 75,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    QUEUE_DE_FER : {
        Nom_capa : "Queue de Fer",
        Categorie : Categorie.PHYSIQUE,
        Type : Types.ACIER,
        Puissance : 100,
        Precision : 75,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Chance_Effet_Supplementaire(30)) {
                    Baisser_Stat(adversaire, "Defense")
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    MEGA_SANGSUE : {
        Nom_capa : "Méga-Sangsue",
        Categorie : Categorie.SPECIAL,
        Type : Types.PLANTE,
        Puissance : 75,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                Soigner_PV(pokemon, Math.trunc(tmp[0] / 2))
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    SEISME : {
        Nom_capa : "Seisme",
        Categorie : Categorie.PHYSIQUE,
        Type : Types.SOL,
        Puissance : 100,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    BOMB_BEURK : {
        Nom_capa : "Bombe Beurk",
        Categorie : Categorie.SPECIAL,
        Type : Types.POISON,
        Puissance : 90,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Calcul_Probabilite(30)) {
                    Appliquer_Statut(adversaire, Statut.EMPOISONNEMENT)
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    TEMPETE_VERTE : {
        Nom_capa : "Tempête verte",
        Categorie : Categorie.SPECIAL,
        Type : Types.PLANTE,
        Puissance : 130,
        Precision : 90,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                Baisser_Stat(pokemon, "Spe_Attaque")
                Baisser_Stat(pokemon, "Spe_Attaque")
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    SURF : {
        Nom_capa : "Surf",
        Categorie : Categorie.SPECIAL,
        Type : Types.EAU,
        Puissance : 90,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    BLIZZARD : {
        Nom_capa : "Blizzard",
        Categorie : Categorie.SPECIAL,
        Type : Types.GLACE,
        Puissance : 120,
        Precision : 70,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Calcul_Probabilite(10)) {
                    Appliquer_Statut(adversaire, Statut.GEL)
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    PSYCHO : {
        Nom_capa : "Psycho",
        Categorie : Categorie.SPECIAL,
        Type : Types.PSY,
        Puissance : 90,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Chance_Effet_Supplementaire(10)) {
                    Baisser_Stat(adversaire, "Spe_Defense")
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    POUVOIR_ANTIQUE : {
        Nom_capa : "Pouvoir Antique",
        Categorie : Categorie.SPECIAL,
        Type : Types.ROCHE,
        Puissance : 60,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (tmp[0] > 0 && Chance_Effet_Supplementaire(10)) {
                    Augmenter_Stat(pokemon, "Attaque")
                    Augmenter_Stat(pokemon, "Defense")
                    Augmenter_Stat(pokemon, "Spe_Attaque")
                    Augmenter_Stat(pokemon, "Spe_Attaque")
                    Augmenter_Stat(pokemon, "Vitesse")
                }
                
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    DEFLAGRATION : {
        Nom_capa : "Déflagration",
        Categorie : Categorie.SPECIAL,
        Type : Types.FEU,
        Puissance : 110,
        Precision : 85,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Calcul_Probabilite(10)) {
                    Appliquer_Statut(adversaire, Statut.BRULURE)
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    VENT_VIOLENT : {
        Nom_capa : "Vent Violent",
        Categorie : Categorie.SPECIAL,
        Type : Types.VOL,
        Puissance : 120,
        Precision : 70,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Calcul_Probabilite(30)){
                    Appliquer_Confusion(adversaire)
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    DRACO_CHOC : {
        Nom_capa : "Draco-Choc",
        Categorie : Categorie.SPECIAL,
        Type : Types.DRAGON,
        Puissance : 85,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    EXPLOFORCE : {
        Nom_capa : "Exploforce",
        Categorie : Categorie.SPECIAL,
        Type : Types.COMBAT,
        Puissance : 120,
        Precision : 70,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Chance_Effet_Supplementaire(10)) {
                    Baisser_Stat(adversaire, "Spe_Defense")
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    MEGAFOUET : {
        Nom_capa : "Mégafouet",
        Categorie : Categorie.PHYSIQUE,
        Type : Types.PLANTE,
        Puissance : 120,
        Precision : 85,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    DAMOCLES :{
        Nom_capa : "Damoclès",
        Categorie : Categorie.PHYSIQUE,
        Type : Types.NORMAL,
        Puissance : 120,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                Degat_de_Recul(pokemon, tmp[0], 0.3)
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    EBOULEMENT : {
        Nom_capa : "Eboulement",
        Categorie : Categorie.PHYSIQUE,
        Type : Types.ROCHE,
        Puissance : 80,
        Precision : 90,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Calcul_Probabilite(30)){
                    Appliquer_Peur(adversaire)
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    HYDROCANON : {
        Nom_capa : "Hydrocanon",
        Categorie : Categorie.SPECIAL,
        Type : Types.EAU,
        Puissance : 120,
        Precision : 85,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    LUMINOCANON : {
        Nom_capa : "Luminocanon",
        Categorie : Categorie.SPECIAL,
        Type : Types.ACIER,
        Puissance : 80,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Chance_Effet_Supplementaire(10)) {
                    Baisser_Stat(adversaire, "Spe_Defense")
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    LASER_GLACE : {
        Nom_capa : "Laser Glace",
        Categorie : Categorie.SPECIAL,
        Type : Types.GLACE,
        Puissance : 90,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Calcul_Probabilite(10)) {
                    Appliquer_Statut(adversaire, Statut.GEL)
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    AURASPHERE : {
        Nom_capa : "Aurasphère",
        Categorie : Categorie.SPECIAL,
        Type : Types.COMBAT,
        Puissance : 80,
        Precision : 200,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
            Infliger_Degats(adversaire, tmp[0])
            if (tmp[1]) {
                console.log("COUP CRITIQUE !!!")
            }
            adversaire.Check_KO()
        }
    },
    POUVOIR_LUNAIRE : {
        Nom_capa : "Pouvoir Lunaire",
        Categorie : Categorie.SPECIAL,
        Type : Types.FEE,
        Puissance : 95,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Chance_Effet_Supplementaire(30)) {
                    Baisser_Stat(adversaire, "Spe_Attaque")
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    TRIPLATTAQUE : {
        Nom_capa : "Triplattaque",
        Categorie : Categorie.SPECIAL,
        Type : Types.NORMAL,
        Puissance : 80,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Calcul_Probabilite(20)) {
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
                    }
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    LANCE_FLAMME : {
        Nom_capa : "Lance Flamme",
        Categorie : Categorie.SPECIAL,
        Type : Types.FEU,
        Puissance : 90,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Calcul_Probabilite(10)) {
                    Appliquer_Statut(adversaire, Statut.BRULURE)
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    TONNERRE : {
        Nom_capa : "Tonnerre",
        Categorie : Categorie.SPECIAL,
        Type : Types.ELECTRICK,
        Puissance : 90,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Calcul_Probabilite(10)) {
                    Appliquer_Statut(adversaire, Statut.PARALYSIE)
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    VIBROBSCUR : {
        Nom_capa : "Vibrobscur",
        Categorie : Categorie.SPECIAL,
        Type : Types.TENEBRE,
        Puissance : 80,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Calcul_Probabilite(20)){
                    Appliquer_Peur(adversaire)
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    BALLOMBRE : {
        Nom_capa : "Ball'Ombre",
        Categorie : Categorie.SPECIAL,
        Type : Types.SPECTRE,
        Puissance : 80,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Chance_Effet_Supplementaire(20)) {
                    Baisser_Stat(adversaire, "Spe_Defense")
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    ECO_SPHERE : {
        Nom_capa : "Eco-Sphère",
        Categorie : Categorie.SPECIAL,
        Type : Types.PLANTE,
        Puissance : 90,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Chance_Effet_Supplementaire(10)) {
                    Baisser_Stat(adversaire, "Spe_Defense")
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    DRACO_METEORE : {
        Nom_capa : "Draco Météore",
        Categorie : Categorie.SPECIAL,
        Type : Types.DRAGON,
        Puissance : 130,
        Precision : 90,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                    let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                    Infliger_Degats(adversaire, tmp[0])
                    if (tmp[1]) {
                        console.log("COUP CRITIQUE !!!")
                    }
                    Baisser_Stat(pokemon, "Spe_Attaque")
                    Baisser_Stat(pokemon, "Spe_Attaque")
                    adversaire.Check_KO()
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    COUP_VICTOIRE : {
        Nom_capa : "Coup Victoire",
        Categorie : Categorie.PHYSIQUE,
        Type : Types.FEU,
        Puissance : 180,
        Precision : 95,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                Baisser_Stat(pokemon, "Defense")
                Baisser_Stat(pokemon, "Spe_Defense")
                Baisser_Stat(pokemon, "Vitesse")
                adversaire.Check_KO()
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    FLAMME_BLEUE : {
        Nom_capa : "Flamme Bleue",
        Categorie : Categorie.SPECIAL,
        Type : Types.FEU,
        Puissance : 130,
        Precision : 85,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Calcul_Probabilite(20)) {
                    Appliquer_Statut(adversaire, Statut.BRULURE)
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    OCROUPI : {
        Nom_capa : "Ocroupi",
        Categorie : Categorie.SPECIAL,
        Type : Types.EAU,
        Puissance : 90,
        Precision : 85,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Calcul_Probabilite(30)) {
                    Baisser_Precision(adversaire)
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    COUP_CROIX : {
        Nom_capa : "Coup Croix",
        Categorie : Categorie.PHYSIQUE,
        Type : Types.COMBAT,
        Puissance : 100,
        Precision : 80,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique + 1)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    BOURDON : {
        Nom_capa : "Bourdon",
        Categorie : Categorie.SPECIAL,
        Type : Types.INSECTE,
        Puissance : 90,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Chance_Effet_Supplementaire(10)) {
                    Baisser_Stat(adversaire, "Spe_Defense")
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    MACHOUILLE : {
        Nom_capa : "Machouille",
        Categorie : Categorie.PHYSIQUE,
        Type : Types.TENEBRE,
        Puissance : 80,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Chance_Effet_Supplementaire(20)) {
                    Baisser_Stat(adversaire, "Defense")
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    HYDRO_QUEUE : {
        Nom_capa : "Hydro Queue",
        Categorie : Categorie.PHYSIQUE,
        Type : Types.EAU,
        Puissance : 90,
        Precision : 90,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    DESTRUCTION : {
        Nom_capa : "Destruction",
        Categorie : Categorie.PHYSIQUE,
        Type : Types.NORMAL,
        Puissance : 200,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                pokemon.PV_Actuel = 0
                pokemon.Check_KO()
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    EXPLOSION : {
        Nom_capa : "Explosion",
        Categorie : Categorie.PHYSIQUE,
        Type : Types.NORMAL,
        Puissance : 250,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                pokemon.PV_Actuel = 0
                pokemon.Check_KO()
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    ULTIMAWASHI : {
        Nom_capa : "Ultimawashi",
        Categorie : Categorie.PHYSIQUE,
        Type : Types.NORMAL,
        Puissance : 120,
        Precision : 75,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    SURPUISSANCE : {
        Nom_capa : "Surpuissance",
        Categorie : Categorie.PHYSIQUE,
        Type : Types.COMBAT,
        Puissance : 120,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                Baisser_Stat(adversaire, "Attaque")
                Baisser_Stat(adversaire, "Defense")
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    FATAL_FOUDRE:{
        Nom_capa : "Fatal Foudre",
        Categorie : Categorie.SPECIAL,
        Type : Types.ELECTRICK,
        Puissance : 110,
        Precision : 70,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Calcul_Probabilite(30)) {
                    Appliquer_Statut(adversaire, Statut.PARALYSIE)
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    } ,
    FRACASS_TETE:{
        Nom_capa : "Fracass'Tête",
        Categorie : Categorie.PHYSIQUE,
        Type : Types.ROCHE,
        Puissance : 150,
        Precision : 80,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                Degat_de_Recul(pokemon, tmp[0], 0.5)
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    DETRICANON:{
        Nom_capa : "Détricanon",
        Categorie : Categorie.PHYSIQUE,
        Type : Types.POISON,
        Puissance : 120,
        Precision : 80,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (Calcul_Probabilite(30)) {
                    Appliquer_Statut(adversaire, Statut.EMPOISONNEMENT)
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    OURAGAN : {
        Nom_capa : "Ouragan",
        Categorie : Categorie.SPECIAL,
        Type : Types.DRAGON,
        Puissance : 40,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Calcul_Probabilite(20)){
                    Appliquer_Peur(adversaire)
                }
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    TORGNOLE : {
        Nom_capa : "Torgnole",
        Categorie : Categorie.PHYSIQUE,
        Type : Types.NORMAL,
        Puissance : 25,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let i = 0
                const randint = Math.floor(Math.random() * 4) + 1
                for (i; i <= randint && adversaire.KO == false ;i++){
                    let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                    Infliger_Degats(adversaire, tmp[0])
                    if (tmp[1]) {
                        console.log("COUP CRITIQUE !!!")
                    }
                    adversaire.Check_KO()
                } 
                console.log(`Touché ${i} fois !`)
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    DOUBLE_LASER : {
        Nom_capa : "Double Laser",
        Categorie : Categorie.SPECIAL,
        Type : Types.PSY,
        Puissance : 40,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let i = 0
                for (i; i<2 && adversaire.KO == false ;i++){
                    let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                    Infliger_Degats(adversaire, tmp[0])
                    if (tmp[1]) {
                        console.log("COUP CRITIQUE !!!")
                    }
                    adversaire.Check_KO()
                } 
                console.log(`Touché ${i} fois !`)
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    BANG_SONIQUE : {
        Nom_capa : "Bang Sonique",
        Categorie : Categorie.SPECIAL,
        Type : Types.NORMAL,
        Puissance : 140,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    OVERDRIVE : {
        Nom_capa : "Overdrive",
        Categorie : Categorie.SPECIAL,
        Type : Types.ELECTRICK,
        Puissance : 80,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    BOUTEFEU : {
        Nom_capa : "Boutefeu",
        Categorie : Categorie.PHYSIQUE,
        Type : Types.FEU,
        Puissance : 120,
        Precision : 100,
        Effet(adversaire, pokemon, Puissance = this.Puissance, Type = this.Type, Precision = this.Precision) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            if (Check_Precision(Precision, pokemon)) {
                let tmp = Calcul_Degats(this.Categorie, adversaire, pokemon, Puissance, Type, pokemon.chance_Critique)
                Infliger_Degats(adversaire, tmp[0])
                if (tmp[1]) {
                    console.log("COUP CRITIQUE !!!")
                }
                adversaire.Check_KO()
                if (adversaire.KO == false && tmp[0] > 0 && Calcul_Probabilite(10)) {
                    Appliquer_Statut(adversaire, Statut.BRULURE)
                }
                Degat_de_Recul(pokemon, tmp[0], 0.3)

            } else {
                console.log(`${pokemon.nom} rate son attaque ...`)
            }
        }
    },
    TREMPETTE : {
        Nom_capa : "Trempette",
        Categorie : Categorie.STATUS,
        Type : Types.EAU,
        Puissance : 0,
        Precision : 100,
        Effet(adversaire, pokemon) {
            console.log(`${pokemon.nom} lance l'attaque ${this.Nom_capa} au ${adversaire.nom} adverse`)
            console.log(`Il ne se passe rien ...`)
        }
    },
}