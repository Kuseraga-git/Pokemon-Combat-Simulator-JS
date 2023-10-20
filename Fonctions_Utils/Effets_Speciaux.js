export function Soigner_PV(pokemon, total) {
    pokemon.PV_Actuel += total
    if (pokemon.PV_Actuel > pokemon.PV_Max){
        pokemon.PV_Actuel = pokemon.PV_Max
    }
    console.log(`${pokemon.nom} se soigne de ${total} points de vie !`)
}

export function Chance_Effet_Supplementaire(Chance) {
    let rand = Math.trunc(Math.random() * 100)
    return (rand <= Chance)
}

export function Attaque_Baisser_Stat(pokemon, stat) {
    console.log(`${stat} de ${pokemon.nom} diminue !`)
    pokemon[stat + '_Actuel'] = Math.trunc(pokemon[stat + '_Actuel'] / 1.3)
}

export function Attaque_Augmenter_Stat(pokemon, stat) {
    console.log(`${stat} de ${pokemon.nom} augmente !`)
    pokemon[stat + '_Actuel'] = Math.trunc(pokemon[stat + '_Actuel'] * 1.3)
}

export function Degat_de_Recul(pokemon, degats, pourcentage) {
    pokemon.PV_Actuel = Math.trunc(pokemon.PV_Actuel - (degats * pourcentage))
    console.log(`${pokemon.nom} subit des dégâts de recul`)
    pokemon.Check_KO()
}