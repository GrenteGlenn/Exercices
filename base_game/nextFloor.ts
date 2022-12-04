import lastFloor from './fightGanon';
import { fight } from './combat';

import Character from './interface';

export default function nextfloor(link: Character) {
  let i: number = 1;
  while (i < 10) {
    console.log(`${'\u2694'.repeat(10)}`, 'Stage', i, `${'\u2694'.repeat(10)}\n`);
    fight(link);
    i += 1;
  }
  if (i === 10) {
    console.log(`${'\u2694'.repeat(10)}`, 'Stage', i, `${'\u2694'.repeat(10)}\n`);
    lastFloor(link);
  }
}
