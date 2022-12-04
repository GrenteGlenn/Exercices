let i = 2;

while (i < process.argv.length) {// boucle qui permettra de se déplacer dans la boucle
  if (process.argv[i] === '--list') { // compare l'index 2 du tableau au terme rechercher
    console.log("Using list.");
  }
    else if (process.argv[i] === '--info') {
     console.log('Using info.');
    }
    else if (process.argv[i] === '--add') {
        console.log('Using add.');
    }
    else {
        console.error("Wrong use of the program.");
    }
    i = i + 1 // itérateur qui permet d'avancer dans le tableau, a mettre à la fin de la boucle uniquement
}
