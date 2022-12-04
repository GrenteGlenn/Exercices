import Character from './interface';
import selectAction from './action';
import display from './display';

export const displaySuccess = (msg: string) => {
  console.log(`${'\ud83c\udf1f'.repeat(10)} ${msg} ${'\ud83c\udf1f'.repeat(10)}`);
};

export const displayFailed = (msg: string) => {
  console.log(`${' \ud83d\udd71 '.repeat(10)} ${msg} ${' \ud83d\udd71 '.repeat(10)}`);
};

// contient message de fin de partie si Link meurt
export const gameOver = (msg: string, endingType: string) => {
  if (endingType === 'failed') {
    displayFailed(msg);
  }
  if (endingType === 'success') {
    displaySuccess(msg);
  }
  process.exit();
};

// contient les HP lors du combat et les actualisent
export const attack = (attacker: Character, attacked: Character, attackerRatio: number = 1) => {
  const newhp = attacked.getHP() - 15;
  attacked.setHP(newhp);

  const newhps = attacker.getHP() - 5 * attackerRatio;

  if (newhps <= 0) {
    attacker.setHP(0);
  } else {
    attacker.setHP(newhps);
  }
};
// dertermine les HP récuperer sans dépasser les hp max
export const heal = (character: Character) => {
  const newhps = character.getHP() + 20;
  if (newhps > 60) {
    character.setHP(60);
  } else {
    character.setHP(newhps);
  }
};

// début du combat
export function fight(link: Character) {
  const bokoblin = new Character('Bokoblin', 30, 5);

  while (bokoblin.HP > 0 || link.HP === 0) { // tant que les Hp de bokoblin, link est supérieur à 0
    // Affichage enemie stats
    console.log(`${'\u2694'.repeat(10)}`, 'Fight', `${'\u2694'.repeat(10)}\n`);
    display(bokoblin, 'enemy');

    // Affichage player stats
    display(link, 'hero');

    // Début de l'action
    console.log(' ====== Options ======');
    const actionSelected: string = selectAction();
    console.clear();

    if (actionSelected.toLocaleLowerCase() === 'attack') {
      attack(link, bokoblin);
      if (link.HP <= 0) {
        gameOver('Game Over !', 'failed');
      }
    } else if (actionSelected.toLocaleLowerCase() === 'heal') {
      heal(link);
    }
  }
}
