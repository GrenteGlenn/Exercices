import Recipe from "./Recipe";

export default function displayRecipe(path: string) {   
    const fs = require('fs');
    const recipe: Recipe = JSON.parse(fs.readFileSync(path, 'utf-8'));
    
    console.log("==== "+recipe.name+" ====")
    for(const ingredient of recipe.ingredients) { // permet d'afficher le contenu du tableau
      console.log("- " + ingredient)
    }
    //console.log(recipe.ingredients)
}
