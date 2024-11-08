# Pokemon Combat Simulator

### Install - ENGLISH

Clone the project using :

`git clone https://github.com/Kuseraga-git/Pokemon-Combat-Simulator-JS.git`

If you're using Visual Studio Code, you can install the extension `Live Server`

- Right click `index.html` file and `Open with Live Server`

### Installation - FRANÇAIS

Clonez le projet avec :

`git clone https://github.com/Kuseraga-git/Pokemon-Combat-Simulator-JS.git`

Si vous utilisez Visual Studio Code, vous pouvez installer l'extension `Live Server`

- Faites un clic droit sur le fichier `index.html` et faites `Open with Live Server`

## What's in the project ? - ENGLISH

Js Project using OOP

Simple and adaptative way to create new pokemons and abilities

- Abilities and Pokemons are stored inside struct and called by objects.

Player can :

- Use between the fourth abilities of his pokemon
- Switch his current pokemon
- Put KO opponent's pokemon
- Do a full cycle of pokemon turn based combat til victory or loose

There is also a nodeJS script inside the file : 
`Authenticity_Check.js`

This script is used to check the legitimacy of pokemons for tournament mode (a version of the game where pokemons cannot exceed a total of 2000 stat points).

This script will go through the pokedex, check the stats of all the pokemons and if any pokemons have too many stat points, it will lower the highest stat to return to a correct score.

To use this script, at the root of the project, execute the command line :

`node Authenticity_Check.js`

## Qu'y a-t-il dans le projet ? - FRANÇAIS

Projet en Js utilisant la POO

Création simple et adaptative de nouveaux pokemons et compétences

- Les capacités et les pokemons sont stockés dans des structures appelées par les objets.

Le joueur peut :

- Utiliser l'une des 4 capacités de son pokemon
- Changer de pokemon
- Mettre KO le pokemon adverse
- Faire le cycle complet d'un combat au tour par tour pokemon jusqu'à la victoire ou la défaite.

Il y a aussi un script contenu dans le fichier :
`Authenticity_Check.js`

Ce script permet de vérifier la légitimité des pokemons pour un mode tournois (une version du jeu ou les pokemons ne peuvent pas excéder 2000 points de stats au total)

Ce script va parcourir le pokedex, vérifier les statistiques de tous les pokemons et si des pokemons ont trop de points de stats, il va abaisser la stat la plus élevée pour revenir à un score correct.

Pour utiliser le script, se placer à la racine du projet et exécuter la commande :

`node Authenticity_Check.js`