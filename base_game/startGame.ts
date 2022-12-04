import Character from './interface';
import intro from './intro';
import nextfloor from './nextFloor';

export default function startGame() {
  const link = new Character('Link', 60, 15);

  intro();
  nextfloor(link);
}
