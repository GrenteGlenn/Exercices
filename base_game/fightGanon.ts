import selectAction from './action';
import { attack, gameOver, heal } from './combat';
import displayStats from './display';
import Character from './interface';

export default function lastFloor(link: Character) {
  const ganon = new Character('Ganon', 150, 20);

  while (ganon.HP > 0 && link.HP > 0) {
    displayStats(ganon, 'boss');

    // Affichage player stats
    displayStats(link, 'hero');

    const actionSelected: string = selectAction();
    console.clear();

    if (actionSelected.toLowerCase() === 'attack') {
      // const newhp = ganon.getHP() - 15;
      // ganon.setHP(newhp);

      // const newhps = link.getHP() - 20;
      // link.setHP(newhps);

      attack(ganon, link, 4);
    } else if (actionSelected.toLowerCase() === 'heal') {
      heal(link);
    }
  }

  if (link.HP <= 0) {
    link.setHP(0);
    gameOver('Game Over !', 'failed');
  }
  if (ganon.HP <= 0) {
    ganon.setHP(0);
    gameOver('Congratulation you have save the world !', 'success');
  }
}

// attack(link, bokoblin, 3)
