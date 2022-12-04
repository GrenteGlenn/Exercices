import Character from './interface';

export const displayHeroStats = (character: Character) => {
  console.log(`${character.name} ${character.HP} HP ${character.STR} str`);
  console.log(`${'\u2665'.repeat(character.HP)}\n`);
};

export const displayBossStats = (character: Character) => {
  const bossName = character.getName();
  const bossHp = character.getHP().toString();
  const bossStr = character.getSTR().toString();

  const bossHeart = '\u2665'.repeat(character.HP);

  console.log(` ${bossName} ${bossHp} HP ${bossStr} str`);
  console.log(`${bossHeart}\n`);
};

export const displayEnemyStats = (character: Character) => {
  console.log(`${character.name} ${character.HP} HP ${character.STR} str`);
  console.log(`${'\u2665'.repeat(character.HP)}\n`);
};

export default function displayStats(character: Character, type: string) {
  if (type === 'hero') {
    displayHeroStats(character);
  }

  if (type === 'enemy') {
    displayEnemyStats(character);
  }

  if (type === 'boss') {
    displayBossStats(character);
  }
}
