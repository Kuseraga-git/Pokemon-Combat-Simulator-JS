// Permet de soigner les PV du pokémon (pokemon) du total passé en paramètre
export function Soigner_PV(pokemon, total) {
    pokemon.PV_Actuel += total
    if (pokemon.PV_Actuel > pokemon.PV_Max){
        pokemon.PV_Actuel = pokemon.PV_Max
    }
    console.log(`${pokemon.nom} se soigne de ${total} points de vie !`)
}

// Renvoi vrai si, la valeur aléatoire est inférieur à la chance passée en paramètre
export function Chance_Effet_Supplementaire(Chance) {
    let rand = Math.trunc(Math.random() * 100)
    return (rand <= Chance)
}

// Permet de faire baisser d'un niveau la statistique (stat) du pokemon passé en paramètre
export function Baisser_Stat(pokemon, stat) {
    console.log(`${stat} de ${pokemon.nom} diminue !`)
    pokemon[stat + '_Actuel'] = Math.trunc(pokemon[stat + '_Actuel'] / 1.3)
}

// Permet de faire augmenter d'un niveau la statistique (stat) du pokemon passé en paramètre
export function Augmenter_Stat(pokemon, stat) {
    console.log(`${stat} de ${pokemon.nom} augmente !`)
    pokemon[stat + '_Actuel'] = Math.trunc(pokemon[stat + '_Actuel'] * 1.3)
}

// Inflige au pokemon passé en paramètres des dégats de recul selon un pourcentage des dégats infligés à l'adversaire
export function Degat_de_Recul(pokemon, degats, pourcentage) {
    pokemon.PV_Actuel = Math.trunc(pokemon.PV_Actuel - (degats * pourcentage))
    console.log(`${pokemon.nom} subit des dégâts de recul`)
    pokemon.Check_KO()
}