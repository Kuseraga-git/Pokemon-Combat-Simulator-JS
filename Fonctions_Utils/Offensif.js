import { Calcul_Table_des_Types } from "../Structures/Types.js"

export function Calcul_Degats(Categorie, adversaire, pokemon, Puissance, Type) {
    if (Categorie == "Phys") {
        return (Calcul_Degats_Physique(adversaire, pokemon, Puissance, Type))
    } else if (Categorie == "Spe") {
        return (Calcul_Degats_Speciaux(adversaire, pokemon, Puissance, Type))
    }
}

function Calcul_Degats_Physique(adversaire, pokemon, Puissance, Type) {
    let Degats = 40
    let critique = ((Math.random() * 100.0) < 5.0 ? 2.0 : 1.0)
    Degats = Degats * (Puissance * pokemon.Attaque_Actuel / 50.0)
    Degats = (Degats / adversaire.Defense_Actuel) + 2.0
    Degats = Degats * critique
    Degats = Degats * ((pokemon.type1 == Type || pokemon.type2 == Type) ? 1.5 : 1.0)
    Degats = Degats * Calcul_Table_des_Types(Type, adversaire.type1, adversaire.type2)
    return [Math.trunc(Degats), (critique == 2.0)]
}

function Calcul_Degats_Speciaux(adversaire, pokemon, Puissance, Type) {
    let Degats = 40
    let critique = ((Math.random() * 100.0) < 5.0 ? 2.0 : 1.0)
    Degats = Degats * (Puissance * pokemon.Spe_Attaque_Actuel / 50.0)
    Degats = (Degats / adversaire.Spe_Defense_Actuel) + 2.0
    Degats = Degats * critique
    Degats = Degats * ((pokemon.type1 == Type || pokemon.type2 == Type) ? 1.5 : 1.0)
    Degats = Degats * Calcul_Table_des_Types(Type, adversaire.type1, adversaire.type2)
    return [Math.trunc(Degats), (critique == 2.0)]
}

export function Infliger_Degats(pokemon, total) {
    pokemon.PV_Actuel -= total
    console.log(`L'adversaire a subit ${total} points de dégats !`)
}

export function Check_Precision(Precision) {
    let rand = Math.trunc(Math.random() * 100)
    return (rand <= Precision)
}