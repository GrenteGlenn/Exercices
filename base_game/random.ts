const fs = require('fs');

// export default function rand() {

const enemiesJson = fs.readFileSync('./enemies.json', 'utf-8');
const enemies = JSON.parse(enemiesJson);

const randNumber = Math.floor(Math.random() * enemies.length);
const enemy = enemies[randNumber];

if (enemy.rarity <= 5) {
  console.log(enemies);
}

//   function randPlayer() {
//     const manyPlayer = fs.readFileSync('./players.json', 'utf-8');
//     const player = JSON.parse(manyPlayer);

//     const randomPlayer = Math.floor(Math.random() * player.length);
//     const rPlayer = player[randomPlayer];
//     return console.log(rPlayer);
//   }

//   function randBoss() {
//     const manyBoss = fs.readFileSync('./boss.json', 'utf-8');
//     const boss = JSON.parse(manyBoss);

//     const randomBoss = Math.floor(Math.random() * boss.length);
//     const rboss = boss[randomBoss];
//     return rboss;
//   }
// }
