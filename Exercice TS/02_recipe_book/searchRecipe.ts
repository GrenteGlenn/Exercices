import Recipe from '../01_cooking_101/Recipe';
import fs from 'fs';

export default function searchRecipe(name: string, path: string) {
    const recipes: Recipe[] = JSON.parse(fs.readFileSync(path,'utf-8'));
    let nameFound = false // flag, permet de determiner si quelque chose est passer ou non

    for(const recipe of recipes) { // boucle qui parcours les toutes les recettes
      if (recipe.name === name) { // si le nom de la recette es identique au nom passer en parametre
        console.log('==== '+ recipe.name +' ====')
        for(const ingredient of recipe.ingredients) { // permet d'afficher le contenu du tableau, boucle
          console.log('- ' + ingredient)
        }
        nameFound = true
        break;
      } 
    }
    if (nameFound === false) { // su le nom n'est pas identique, retour false
      console.log('No match.');
    }
}
