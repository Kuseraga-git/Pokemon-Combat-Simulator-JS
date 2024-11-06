import fs from 'fs';
import { Pokedex } from "./Structures/Pokedex.js";

Check_Pokemon_Validity()

function Check_Pokemon_Validity() {
    for (const [key, value] of Object.entries(Pokedex)) {
        Check_Pokemon_Stats_Amount(key, value)
    }
}

function Check_Pokemon_Stats_Amount(pkmKey, pkmValue) {
    let statPannel = ["Attaque", "Defense", "Spe_Attaque", "Spe_Defense", "PV_Max", "Vitesse"]
    let amount = 0
    for (let i = 0; i < statPannel.length; i++) {
        amount += pkmValue[statPannel[i]]
    }
    amount -= 2000
    if (amount > 0) {
        Correct_Pokemon_Stats_Amount(pkmKey, pkmValue, amount)
    }
}

function Correct_Pokemon_Stats_Amount(pkmKey, pkmValue, amount) {
    let statPannel = ["Attaque", "Defense", "Spe_Attaque", "Spe_Defense", "PV_Max", "Vitesse"]
    let bigestStat = statPannel[0]
    for (let i = 1; i < statPannel.length; i++) {
        if (pkmValue[bigestStat] < pkmValue[statPannel[i]]) {
            bigestStat = statPannel[i]
        }
    }
    if (Pokedex[pkmKey][bigestStat] - amount < 0) {
        updatePokedexFile(pkmKey, "PV_Max", Pokedex[pkmKey].PV_Max * -1);
        updatePokedexFile(pkmKey, "Vitesse", Pokedex[pkmKey].Vitesse * -1);
    } else {
        updatePokedexFile(pkmKey, bigestStat, Pokedex[pkmKey][bigestStat] - amount);
    }
}

function updatePokedexFile(pokemonName, statToUpdate, newValue) {
    const filePath = './Structures/Pokedex.js';
    const regexObject = new RegExp(`${pokemonName}:\\s*{\\s*([\\s\\S]*?)\\s*}`, 'g');
    const regexStat = new RegExp(`(${statToUpdate}:\\s*)(\\d+)`)

    let data = fs.readFileSync(filePath, 'utf8');

    const matchObject = regexObject.exec(data)
    const objectContent = matchObject[1]
    const newText = objectContent.replace(regexStat, `$1${newValue}`)
    data = data.replace(matchObject[0], `${pokemonName}: {\n${newText}\n}`)
    fs.writeFileSync(filePath, data, 'utf8')
    console.log(`Statistique mise à jour pour ${pokemonName}: ${statToUpdate} est maintenant ${newValue}`);
}
