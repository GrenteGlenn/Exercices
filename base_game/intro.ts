const readline = require('readline-sync');

export default function intro() {
  // console.log(`${'\ud83c\udfef'.repeat(30)}`);
  console.log('Welcome to young adventurer hyrule castle. Your adventure has brought you here, \n');
  console.log('and your journey promises to be difficult indeed within it there is a monster \n');
  console.log('that terrifies all the people of Goron and Zora prove your strength and go free\n');
  console.log('prove your strength and go free people from the threat that lurks in this castle.\n');
  // console.log(`${'\ud83c\udfef'.repeat(30)}`);

  const question = {
    question: 'Are you ready ?',
    answer: true,
  };

  const answer = readline.keyInYN(`${question.question}\n`);
  console.clear();
  if (answer === question.answer) {
    console.log('let\'s go \n \n ');
  }
}
