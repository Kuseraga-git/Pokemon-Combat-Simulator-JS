export const Talents = {
    STATIK : {
        Nom : "Statik",
        Description : "Si un Pokémon utilise une attaque directe et que celle-ci inflige des dégâts sur un Pokémon doté de ce talent, il a 30 % de chances d'être paralysé.",
        Activation : "Quand_Subit_Degats",
        Take_Damage(pokemon, adversaire) {
            console.log("Pokemon" + pokemon)
            console.log("Adversaire" + adversaire)
        },
        Effet(pokemon, adversaire) {
            console.log("Tu m'as touché donc")
            console.log("Je vais lancer un Dés 100")
            console.log("Sur 30 ou moins t'es paralysé")
            console.log("Tu peux plus bouger")
        }
    },
    INTIMIDATION : {
        Nom : "Intimidation",
        Description : "Lors de l'envoi au combat du Pokémon doté d'Intimidation, le Pokémon adverse perd un niveau de statistique d'Attaque.",
        Activation : "Quand_Apparait_Terrain",
        Effet(pokemon, adversaire) {
            console.log("J'arrive")
            console.log("ROAR !")
            console.log("T'as peur")
            console.log("T'attaque moins fort")
        }
    },
    TURBO : {
        Nom : "Turbo",
        Description : "Un Pokémon doté de Turbo voit sa statistique de Vitesse augmenter d'un niveau à la fin de chaque tour complet passé sur le terrain.",
        Activation : "Quand_Round_Terminé",
        Effet(pokemon, adversaire) {
            console.log("Fin de tour")
            console.log("Fiou ! Fiou ! Fiou !")
            console.log("Je suis de plus en plus rapide")
        }
    },
    ABSENTEISME : {
        Nom : "Absentéisme",
        Description : "Un Pokémon doté de ce talent ne peut attaquer qu'un tour sur deux. Il s'agit donc d'un talent handicapant pour les Pokémon qui en sont dotés, mais reflétant parfaitement la fainéantise de ces derniers…",
        Activation : "Quand_Va_Attaquer",
        Effet(pokemon, adversaire) {
            console.log("Tour 1 - J'attaque")
            console.log("Tour 2 - Rompish")
            console.log("Tour 1 - J'attaque")
        }
    },
    ABSENTEISME : {
        Nom : "Brasier",
        Description : "Un Pokémon doté de ce talent voit la puissance de ses capacités de type Feu augmentée de 50 % lorsque ses PV sont inférieurs ou égaux à 1/3 de ses PV maximaux.",
        Activation : "Quand_Va_Attaquer",
        Effet(pokemon, adversaire) {
            console.log("Aie !")
            console.log("1/3 PV ?")
            console.log("Mes attaques feu font 50% plus mal")
        }
    },
}