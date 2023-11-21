export const Types = {
    ACIER: "Acier",
    COMBAT: "Combat",
    DRAGON: "Dragon",
    EAU: "Eau",
    ELECTRICK: "Electrick",
    FEE: "Fée",
    FEU: "Feu",
    GLACE: "Glace",
    INSECTE: "Insecte",
    NORMAL: "Normal",
    PLANTE: "Plante",
    POISON: "Poison",
    PSY: "Psy",
    ROCHE: "Roche",
    SOL: "Sol",
    SPECTRE: "Spectre",
    TENEBRE: "Ténèbres",
    VOL: "Vol",
    Aucun: "Aucun"
}

/**
 * Reproduit le calcul effectué par la table des types de pokemon
 * @param {Object} type_attaque Type de l'attaque
 * @param {Object} type1 Premier type du pokemon receveur
 * @param {Object} type2 Second type du pokemon receveur
 * @returns {number} Multiplicateur de dégâts à appliquer
 */
export function Calcul_Table_des_Types(type_attaque, type1, type2 = "Aucun") {
    let resultat = 1.0
    if (type_attaque === "Acier") {
        resultat = check_Acier(type1, resultat)
        resultat = check_Acier(type2, resultat)
    }
    if (type_attaque === "Combat") {
        resultat = check_Combat(type1, resultat)
        resultat = check_Combat(type2, resultat)
    }
    if (type_attaque === "Dragon") {
        resultat = check_Dragon(type1, resultat)
        resultat = check_Dragon(type2, resultat)
    }
    if (type_attaque === "Eau") {
        resultat = check_Eau(type1, resultat)
        resultat = check_Eau(type2, resultat)
    }
    if (type_attaque === "Electrick") {
        resultat = check_Electrick(type1, resultat)
        resultat = check_Electrick(type2, resultat)
    }
    if (type_attaque === "Fée") {
        resultat = check_Fee(type1, resultat)
        resultat = check_Fee(type2, resultat)
    }
    if (type_attaque === "Feu") {
        resultat = check_Feu(type1, resultat)
        resultat = check_Feu(type2, resultat)
    }
    if (type_attaque === "Glace") {
        resultat = check_Glace(type1, resultat)
        resultat = check_Glace(type2, resultat)
    }
    if (type_attaque === "Insecte") {
        resultat = check_Insecte(type1, resultat)
        resultat = check_Insecte(type2, resultat)
    }
    if (type_attaque === "Normal") {
        resultat = check_Normal(type1, resultat)
        resultat = check_Normal(type2, resultat)
    }
    if (type_attaque === "Plante") {
        resultat = check_Plante(type1, resultat)
        resultat = check_Plante(type2, resultat)
    }
    if (type_attaque === "Poison") {
        resultat = check_Poison(type1, resultat)
        resultat = check_Poison(type2, resultat)
    }
    if (type_attaque === "Psy") {
        resultat = check_Psy(type1, resultat)
        resultat = check_Psy(type2, resultat)
    }
    if (type_attaque === "Roche") {
        resultat = check_Roche(type1, resultat)
        resultat = check_Roche(type2, resultat)
    }
    if (type_attaque === "Sol") {
        resultat = check_Sol(type1, resultat)
        resultat = check_Sol(type2, resultat)
    }
    if (type_attaque === "Spectre") {
        resultat = check_Spectre(type1, resultat)
        resultat = check_Spectre(type2, resultat)
    }
    if (type_attaque === "Ténèbres") {
        resultat = check_Tenebre(type1, resultat)
        resultat = check_Tenebre(type2, resultat)
    }
    if (type_attaque === "Vol") {
        resultat = check_Vol(type1, resultat)
        resultat = check_Vol(type2, resultat)
    }
    return resultat
}

/**
 * Multiplicateur selon le type de la fonction
 * @param {Object} type Type du pokemon
 * @param {number} resultat Multiplicateur
 * @returns {number} Renvoit le multiplicateur modifié
 */
function check_Acier(type, resultat) {
    switch (type) {
        case "Acier":
            resultat = resultat / 2.0
            break;
        case "Combat":
            resultat = resultat
            break;
        case "Dragon":
            resultat = resultat
            break;
        case "Eau":
            resultat = resultat / 2.0
            break;
        case "Electrick":
            resultat = resultat / 2.0
            break;
        case "Fée":
            resultat = resultat * 2.0
            break;
        case "Feu":
            resultat = resultat / 2.0
            break;
        case "Glace":
            resultat = resultat * 2.0
            break;
        case "Insecte":
            resultat = resultat
            break;
        case "Normal":
            resultat = resultat
            break;
        case "Plante":
            resultat = resultat
            break;
        case "Poison":
            resultat = resultat
            break;
        case "Psy":
            resultat = resultat
            break;
        case "Roche":
            resultat = resultat * 2.0
            break;
        case "Sol":
            resultat = resultat
            break;
        case "Spectre":
            resultat = resultat
            break;
        case "Ténèbres":
            resultat = resultat
            break;
        case "Vol":
            resultat = resultat
            break;
        default:
            resultat = resultat
            break;
    }
    return(resultat)
}

/**
 * Multiplicateur selon le type de la fonction
 * @param {Object} type Type du pokemon
 * @param {number} resultat Multiplicateur
 * @returns {number} Renvoit le multiplicateur modifié
 */
function check_Combat(type, resultat) {
    switch (type) {
        case "Acier":
            resultat = resultat * 2.0
            break;
        case "Combat":
            resultat = resultat
            break;
        case "Dragon":
            resultat = resultat
            break;
        case "Eau":
            resultat = resultat
            break;
        case "Electrick":
            resultat = resultat
            break;
        case "Fée":
            resultat = resultat / 2.0
            break;
        case "Feu":
            resultat = resultat
            break;
        case "Glace":
            resultat = resultat * 2.0
            break;
        case "Insecte":
            resultat = resultat / 2.0
            break;
        case "Normal":
            resultat = resultat * 2.0
            break;
        case "Plante":
            resultat = resultat
            break;
        case "Poison":
            resultat = resultat / 2.0
            break;
        case "Psy":
            resultat = resultat / 2.0
            break;
        case "Roche":
            resultat = resultat * 2.0
            break;
        case "Sol":
            resultat = resultat
            break;
        case "Spectre":
            resultat = resultat * 0.0
            break;
        case "Ténèbres":
            resultat = resultat * 2.0
            break;
        case "Vol":
            resultat = resultat / 2.0
            break;
        default:
            resultat = resultat
            break;
    }
    return(resultat)
}

/**
 * Multiplicateur selon le type de la fonction
 * @param {Object} type Type du pokemon
 * @param {number} resultat Multiplicateur
 * @returns {number} Renvoit le multiplicateur modifié
 */
function check_Dragon(type, resultat) {
    switch (type) {
        case "Acier":
            resultat = resultat / 2.0
            break;
        case "Combat":
            resultat = resultat
            break;
        case "Dragon":
            resultat = resultat * 2.0
            break;
        case "Eau":
            resultat = resultat
            break;
        case "Electrick":
            resultat = resultat
            break;
        case "Fée":
            resultat = resultat * 0.0
            break;
        case "Feu":
            resultat = resultat
            break;
        case "Glace":
            resultat = resultat
            break;
        case "Insecte":
            resultat = resultat
            break;
        case "Normal":
            resultat = resultat
            break;
        case "Plante":
            resultat = resultat
            break;
        case "Poison":
            resultat = resultat
            break;
        case "Psy":
            resultat = resultat
            break;
        case "Roche":
            resultat = resultat
            break;
        case "Sol":
            resultat = resultat
            break;
        case "Spectre":
            resultat = resultat
            break;
        case "Ténèbres":
            resultat = resultat
            break;
        case "Vol":
            resultat = resultat
            break;
        default:
            resultat = resultat
            break;
    }
    return(resultat)
}

/**
 * Multiplicateur selon le type de la fonction
 * @param {Object} type Type du pokemon
 * @param {number} resultat Multiplicateur
 * @returns {number} Renvoit le multiplicateur modifié
 */
function check_Eau(type, resultat) {
    switch (type) {
        case "Acier":
            resultat = resultat
            break;
        case "Combat":
            resultat = resultat
            break;
        case "Dragon":
            resultat = resultat / 2.0
            break;
        case "Eau":
            resultat = resultat / 2.0
            break;
        case "Electrick":
            resultat = resultat
            break;
        case "Fée":
            resultat = resultat
            break;
        case "Feu":
            resultat = resultat * 2.0
            break;
        case "Glace":
            resultat = resultat
            break;
        case "Insecte":
            resultat = resultat
            break;
        case "Normal":
            resultat = resultat
            break;
        case "Plante":
            resultat = resultat / 2.0
            break;
        case "Poison":
            resultat = resultat
            break;
        case "Psy":
            resultat = resultat
            break;
        case "Roche":
            resultat = resultat * 2.0
            break;
        case "Sol":
            resultat = resultat * 2.0
            break;
        case "Spectre":
            resultat = resultat
            break;
        case "Ténèbres":
            resultat = resultat
            break;
        case "Vol":
            resultat = resultat
            break;
        default:
            resultat = resultat
            break;
    }
    return(resultat)
}

/**
 * Multiplicateur selon le type de la fonction
 * @param {Object} type Type du pokemon
 * @param {number} resultat Multiplicateur
 * @returns {number} Renvoit le multiplicateur modifié
 */
function check_Electrick(type, resultat) {
    switch (type) {
        case "Acier":
            resultat = resultat
            break;
        case "Combat":
            resultat = resultat
            break;
        case "Dragon":
            resultat = resultat / 2.0
            break;
        case "Eau":
            resultat = resultat * 2.0
            break;
        case "Electrick":
            resultat = resultat / 2.0
            break;
        case "Fée":
            resultat = resultat
            break;
        case "Feu":
            resultat = resultat
            break;
        case "Glace":
            resultat = resultat
            break;
        case "Insecte":
            resultat = resultat
            break;
        case "Normal":
            resultat = resultat
            break;
        case "Plante":
            resultat = resultat / 2.0
            break;
        case "Poison":
            resultat = resultat
            break;
        case "Psy":
            resultat = resultat
            break;
        case "Roche":
            resultat = resultat
            break;
        case "Sol":
            resultat = resultat * 0.0
            break;
        case "Spectre":
            resultat = resultat
            break;
        case "Ténèbres":
            resultat = resultat
            break;
        case "Vol":
            resultat = resultat * 2.0
            break;
        default:
            resultat = resultat
            break;
    }
    return(resultat)
}

/**
 * Multiplicateur selon le type de la fonction
 * @param {Object} type Type du pokemon
 * @param {number} resultat Multiplicateur
 * @returns {number} Renvoit le multiplicateur modifié
 */
function check_Fee(type, resultat) {
    switch (type) {
        case "Acier":
            resultat = resultat / 2.0
            break;
        case "Combat":
            resultat = resultat
            break;
        case "Dragon":
            resultat = resultat * 2.0
            break;
        case "Eau":
            resultat = resultat * 2.0
            break;
        case "Electrick":
            resultat = resultat
            break;
        case "Fée":
            resultat = resultat
            break;
        case "Feu":
            resultat = resultat / 2.0
            break;
        case "Glace":
            resultat = resultat
            break;
        case "Insecte":
            resultat = resultat
            break;
        case "Normal":
            resultat = resultat
            break;
        case "Plante":
            resultat = resultat
            break;
        case "Poison":
            resultat = resultat / 2.0
            break;
        case "Psy":
            resultat = resultat
            break;
        case "Roche":
            resultat = resultat
            break;
        case "Sol":
            resultat = resultat
            break;
        case "Spectre":
            resultat = resultat
            break;
        case "Ténèbres":
            resultat = resultat / 2.0
            break;
        case "Vol":
            resultat = resultat
            break;
        default:
            resultat = resultat
            break;
    }
    return(resultat)
}

/**
 * Multiplicateur selon le type de la fonction
 * @param {Object} type Type du pokemon
 * @param {number} resultat Multiplicateur
 * @returns {number} Renvoit le multiplicateur modifié
 */
function check_Feu(type, resultat) {
    switch (type) {
        case "Acier":
            resultat = resultat * 2.0
            break;
        case "Combat":
            resultat = resultat
            break;
        case "Dragon":
            resultat = resultat / 2.0
            break;
        case "Eau":
            resultat = resultat / 2.0
            break;
        case "Electrick":
            resultat = resultat
            break;
        case "Fée":
            resultat = resultat
            break;
        case "Feu":
            resultat = resultat / 2.0
            break;
        case "Glace":
            resultat = resultat * 2.0
            break;
        case "Insecte":
            resultat = resultat * 2.0
            break;
        case "Normal":
            resultat = resultat
            break;
        case "Plante":
            resultat = resultat * 2.0
            break;
        case "Poison":
            resultat = resultat
            break;
        case "Psy":
            resultat = resultat
            break;
        case "Roche":
            resultat = resultat / 2.0
            break;
        case "Sol":
            resultat = resultat
            break;
        case "Spectre":
            resultat = resultat
            break;
        case "Ténèbres":
            resultat = resultat
            break;
        case "Vol":
            resultat = resultat
            break;
        default:
            resultat = resultat
            break;
    }
    return(resultat)
}

/**
 * Multiplicateur selon le type de la fonction
 * @param {Object} type Type du pokemon
 * @param {number} resultat Multiplicateur
 * @returns {number} Renvoit le multiplicateur modifié
 */
function check_Glace(type, resultat) {
    switch (type) {
        case "Acier":
            resultat = resultat / 2.0
            break;
        case "Combat":
            resultat = resultat
            break;
        case "Dragon":
            resultat = resultat * 2.0
            break;
        case "Eau":
            resultat = resultat / 2.0
            break;
        case "Electrick":
            resultat = resultat
            break;
        case "Fée":
            resultat = resultat
            break;
        case "Feu":
            resultat = resultat / 2.0
            break;
        case "Glace":
            resultat = resultat / 2.0
            break;
        case "Insecte":
            resultat = resultat
            break;
        case "Normal":
            resultat = resultat
            break;
        case "Plante":
            resultat = resultat * 2.0
            break;
        case "Poison":
            resultat = resultat
            break;
        case "Psy":
            resultat = resultat
            break;
        case "Roche":
            resultat = resultat
            break;
        case "Sol":
            resultat = resultat * 2.0
            break;
        case "Spectre":
            resultat = resultat
            break;
        case "Ténèbres":
            resultat = resultat
            break;
        case "Vol":
            resultat = resultat * 2.0
            break;
        default:
            resultat = resultat
            break;
    }
    return(resultat)
}

/**
 * Multiplicateur selon le type de la fonction
 * @param {Object} type Type du pokemon
 * @param {number} resultat Multiplicateur
 * @returns {number} Renvoit le multiplicateur modifié
 */
function check_Insecte(type, resultat) {
    switch (type) {
        case "Acier":
            resultat = resultat / 2.0
            break;
        case "Combat":
            resultat = resultat / 2.0
            break;
        case "Dragon":
            resultat = resultat
            break;
        case "Eau":
            resultat = resultat
            break;
        case "Electrick":
            resultat = resultat
            break;
        case "Fée":
            resultat = resultat / 2.0
            break;
        case "Feu":
            resultat = resultat / 2.0
            break;
        case "Glace":
            resultat = resultat
            break;
        case "Insecte":
            resultat = resultat
            break;
        case "Normal":
            resultat = resultat
            break;
        case "Plante":
            resultat = resultat * 2.0
            break;
        case "Poison":
            resultat = resultat / 2.0
            break;
        case "Psy":
            resultat = resultat * 2.0
            break;
        case "Roche":
            resultat = resultat
            break;
        case "Sol":
            resultat = resultat
            break;
        case "Spectre":
            resultat = resultat / 2.0
            break;
        case "Ténèbres":
            resultat = resultat * 2.0
            break;
        case "Vol":
            resultat = resultat / 2.0
            break;
        default:
            resultat = resultat
            break;
    }
    return(resultat)
}

/**
 * Multiplicateur selon le type de la fonction
 * @param {Object} type Type du pokemon
 * @param {number} resultat Multiplicateur
 * @returns {number} Renvoit le multiplicateur modifié
 */
function check_Normal(type, resultat) {
    switch (type) {
        case "Acier":
            resultat = resultat / 2.0
            break;
        case "Combat":
            resultat = resultat
            break;
        case "Dragon":
            resultat = resultat
            break;
        case "Eau":
            resultat = resultat
            break;
        case "Electrick":
            resultat = resultat
            break;
        case "Fée":
            resultat = resultat
            break;
        case "Feu":
            resultat = resultat
            break;
        case "Glace":
            resultat = resultat
            break;
        case "Insecte":
            resultat = resultat
            break;
        case "Normal":
            resultat = resultat
            break;
        case "Plante":
            resultat = resultat
            break;
        case "Poison":
            resultat = resultat
            break;
        case "Psy":
            resultat = resultat
            break;
        case "Roche":
            resultat = resultat / 2.0
            break;
        case "Sol":
            resultat = resultat
            break;
        case "Spectre":
            resultat = resultat * 0.0
            break;
        case "Ténèbres":
            resultat = resultat
            break;
        case "Vol":
            resultat = resultat
            break;
        default:
            resultat = resultat
            break;
    }
    return(resultat)
}

/**
 * Multiplicateur selon le type de la fonction
 * @param {Object} type Type du pokemon
 * @param {number} resultat Multiplicateur
 * @returns {number} Renvoit le multiplicateur modifié
 */
function check_Plante(type, resultat) {
    switch (type) {
        case "Acier":
            resultat = resultat / 2.0
            break;
        case "Combat":
            resultat = resultat
            break;
        case "Dragon":
            resultat = resultat / 2.0
            break;
        case "Eau":
            resultat = resultat * 2.0
            break;
        case "Electrick":
            resultat = resultat
            break;
        case "Fée":
            resultat = resultat
            break;
        case "Feu":
            resultat = resultat / 2.0
            break;
        case "Glace":
            resultat = resultat
            break;
        case "Insecte":
            resultat = resultat / 2.0
            break;
        case "Normal":
            resultat = resultat
            break;
        case "Plante":
            resultat = resultat / 2.0
            break;
        case "Poison":
            resultat = resultat / 2.0
            break;
        case "Psy":
            resultat = resultat
            break;
        case "Roche":
            resultat = resultat * 2.0
            break;
        case "Sol":
            resultat = resultat * 2.0
            break;
        case "Spectre":
            resultat = resultat
            break;
        case "Ténèbres":
            resultat = resultat
            break;
        case "Vol":
            resultat = resultat / 2.0
            break;
        default:
            resultat = resultat
            break;
    }
    return(resultat)
}

/**
 * Multiplicateur selon le type de la fonction
 * @param {Object} type Type du pokemon
 * @param {number} resultat Multiplicateur
 * @returns {number} Renvoit le multiplicateur modifié
 */
function check_Poison(type, resultat) {
    switch (type) {
        case "Acier":
            resultat = resultat * 0.0
            break;
        case "Combat":
            resultat = resultat
            break;
        case "Dragon":
            resultat = resultat
            break;
        case "Eau":
            resultat = resultat
            break;
        case "Electrick":
            resultat = resultat
            break;
        case "Fée":
            resultat = resultat * 2.0
            break;
        case "Feu":
            resultat = resultat
            break;
        case "Glace":
            resultat = resultat
            break;
        case "Insecte":
            resultat = resultat
            break;
        case "Normal":
            resultat = resultat
            break;
        case "Plante":
            resultat = resultat * 2.0
            break;
        case "Poison":
            resultat = resultat / 2.0
            break;
        case "Psy":
            resultat = resultat
            break;
        case "Roche":
            resultat = resultat / 2.0
            break;
        case "Sol":
            resultat = resultat / 2.0
            break;
        case "Spectre":
            resultat = resultat / 2.0
            break;
        case "Ténèbres":
            resultat = resultat
            break;
        case "Vol":
            resultat = resultat
            break;
        default:
            resultat = resultat
            break;
    }
    return(resultat)
}

/**
 * Multiplicateur selon le type de la fonction
 * @param {Object} type Type du pokemon
 * @param {number} resultat Multiplicateur
 * @returns {number} Renvoit le multiplicateur modifié
 */
function check_Psy(type, resultat) {
    switch (type) {
        case "Acier":
            resultat = resultat / 2.0
            break;
        case "Combat":
            resultat = resultat * 2.0
            break;
        case "Dragon":
            resultat = resultat
            break;
        case "Eau":
            resultat = resultat
            break;
        case "Electrick":
            resultat = resultat
            break;
        case "Fée":
            resultat = resultat
            break;
        case "Feu":
            resultat = resultat
            break;
        case "Glace":
            resultat = resultat
            break;
        case "Insecte":
            resultat = resultat
            break;
        case "Normal":
            resultat = resultat
            break;
        case "Plante":
            resultat = resultat
            break;
        case "Poison":
            resultat = resultat * 2.0
            break;
        case "Psy":
            resultat = resultat / 2.0
            break;
        case "Roche":
            resultat = resultat
            break;
        case "Sol":
            resultat = resultat
            break;
        case "Spectre":
            resultat = resultat
            break;
        case "Ténèbres":
            resultat = resultat * 0.0
            break;
        case "Vol":
            resultat = resultat
            break;
        default:
            resultat = resultat
            break;
    }
    return(resultat)
}

/**
 * Multiplicateur selon le type de la fonction
 * @param {Object} type Type du pokemon
 * @param {number} resultat Multiplicateur
 * @returns {number} Renvoit le multiplicateur modifié
 */
function check_Roche(type, resultat) {
    switch (type) {
        case "Acier":
            resultat = resultat / 2.0
            break;
        case "Combat":
            resultat = resultat / 2.0
            break;
        case "Dragon":
            resultat = resultat
            break;
        case "Eau":
            resultat = resultat
            break;
        case "Electrick":
            resultat = resultat
            break;
        case "Fée":
            resultat = resultat
            break;
        case "Feu":
            resultat = resultat * 2.0
            break;
        case "Glace":
            resultat = resultat * 2.0
            break;
        case "Insecte":
            resultat = resultat * 2.0
            break;
        case "Normal":
            resultat = resultat
            break;
        case "Plante":
            resultat = resultat
            break;
        case "Poison":
            resultat = resultat
            break;
        case "Psy":
            resultat = resultat
            break;
        case "Roche":
            resultat = resultat
            break;
        case "Sol":
            resultat = resultat / 2.0
            break;
        case "Spectre":
            resultat = resultat
            break;
        case "Ténèbres":
            resultat = resultat
            break;
        case "Vol":
            resultat = resultat * 2.0
            break;
        default:
            resultat = resultat
            break;
    }
    return(resultat)
}

/**
 * Multiplicateur selon le type de la fonction
 * @param {Object} type Type du pokemon
 * @param {number} resultat Multiplicateur
 * @returns {number} Renvoit le multiplicateur modifié
 */
function check_Sol(type, resultat) {
    switch (type) {
        case "Acier":
            resultat = resultat * 2.0
            break;
        case "Combat":
            resultat = resultat
            break;
        case "Dragon":
            resultat = resultat
            break;
        case "Eau":
            resultat = resultat
            break;
        case "Electrick":
            resultat = resultat * 2.0
            break;
        case "Fée":
            resultat = resultat
            break;
        case "Feu":
            resultat = resultat * 2.0
            break;
        case "Glace":
            resultat = resultat
            break;
        case "Insecte":
            resultat = resultat / 2.0
            break;
        case "Normal":
            resultat = resultat
            break;
        case "Plante":
            resultat = resultat / 2.0
            break;
        case "Poison":
            resultat = resultat * 2.0
            break;
        case "Psy":
            resultat = resultat
            break;
        case "Roche":
            resultat = resultat * 2.0
            break;
        case "Sol":
            resultat = resultat
            break;
        case "Spectre":
            resultat = resultat
            break;
        case "Ténèbres":
            resultat = resultat
            break;
        case "Vol":
            resultat = resultat * 0.0
            break;
        default:
            resultat = resultat
            break;
    }
    return(resultat)
}

/**
 * Multiplicateur selon le type de la fonction
 * @param {Object} type Type du pokemon
 * @param {number} resultat Multiplicateur
 * @returns {number} Renvoit le multiplicateur modifié
 */
function check_Spectre(type, resultat) {
    switch (type) {
        case "Acier":
            resultat = resultat
            break;
        case "Combat":
            resultat = resultat
            break;
        case "Dragon":
            resultat = resultat
            break;
        case "Eau":
            resultat = resultat
            break;
        case "Electrick":
            resultat = resultat
            break;
        case "Fée":
            resultat = resultat
            break;
        case "Feu":
            resultat = resultat
            break;
        case "Glace":
            resultat = resultat
            break;
        case "Insecte":
            resultat = resultat
            break;
        case "Normal":
            resultat = resultat * 0.0
            break;
        case "Plante":
            resultat = resultat
            break;
        case "Poison":
            resultat = resultat
            break;
        case "Psy":
            resultat = resultat * 2.0
            break;
        case "Roche":
            resultat = resultat
            break;
        case "Sol":
            resultat = resultat
            break;
        case "Spectre":
            resultat = resultat * 2.0
            break;
        case "Ténèbres":
            resultat = resultat / 2.0
            break;
        case "Vol":
            resultat = resultat
            break;
        default:
            resultat = resultat
            break;
    }
    return(resultat)
}

/**
 * Multiplicateur selon le type de la fonction
 * @param {Object} type Type du pokemon
 * @param {number} resultat Multiplicateur
 * @returns {number} Renvoit le multiplicateur modifié
 */
function check_Tenebre(type, resultat) {
    switch (type) {
        case "Acier":
            resultat = resultat
            break;
        case "Combat":
            resultat = resultat / 2.0
            break;
        case "Dragon":
            resultat = resultat
            break;
        case "Eau":
            resultat = resultat
            break;
        case "Electrick":
            resultat = resultat
            break;
        case "Fée":
            resultat = resultat / 2.0
            break;
        case "Feu":
            resultat = resultat
            break;
        case "Glace":
            resultat = resultat
            break;
        case "Insecte":
            resultat = resultat
            break;
        case "Normal":
            resultat = resultat
            break;
        case "Plante":
            resultat = resultat
            break;
        case "Poison":
            resultat = resultat
            break;
        case "Psy":
            resultat = resultat * 2.0
            break;
        case "Roche":
            resultat = resultat
            break;
        case "Sol":
            resultat = resultat
            break;
        case "Spectre":
            resultat = resultat * 2.0
            break;
        case "Ténèbres":
            resultat = resultat / 2.0
            break;
        case "Vol":
            resultat = resultat
            break;
        default:
            resultat = resultat
            break;
    }
    return(resultat)
}

/**
 * Multiplicateur selon le type de la fonction
 * @param {Object} type Type du pokemon
 * @param {number} resultat Multiplicateur
 * @returns {number} Renvoit le multiplicateur modifié
 */
function check_Vol(type, resultat) {
    switch (type) {
        case "Acier":
            resultat = resultat / 2.0
            break;
        case "Combat":
            resultat = resultat * 2.0
            break;
        case "Dragon":
            resultat = resultat
            break;
        case "Eau":
            resultat = resultat
            break;
        case "Electrick":
            resultat = resultat / 2.0
            break;
        case "Fée":
            resultat = resultat
            break;
        case "Feu":
            resultat = resultat
            break;
        case "Glace":
            resultat = resultat
            break;
        case "Insecte":
            resultat = resultat * 2.0
            break;
        case "Normal":
            resultat = resultat
            break;
        case "Plante":
            resultat = resultat * 2.0
            break;
        case "Poison":
            resultat = resultat
            break;
        case "Psy":
            resultat = resultat
            break;
        case "Roche":
            resultat = resultat / 2.0
            break;
        case "Sol":
            resultat = resultat
            break;
        case "Spectre":
            resultat = resultat
            break;
        case "Ténèbres":
            resultat = resultat
            break;
        case "Vol":
            resultat = resultat
            break;
        default:
            resultat = resultat
            break;
    }
    return(resultat)
}
