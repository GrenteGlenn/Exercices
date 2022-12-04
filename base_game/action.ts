const readline = require('readline-sync');

export default function selectAction(): any {
  const options: string[] = ['attack', 'Heal'];

  const choice: number = readline.keyInSelect(options, '\n');
  return (options[choice]);
}
