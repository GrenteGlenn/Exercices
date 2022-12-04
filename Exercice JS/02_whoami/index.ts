const param = process.argv[2];

if (param === 'Link') {
  console.log('Welcome, Hero.');
} else if (param === 'Zelda') {
  console.log('Greetings, Princess.');
} else {
  console.log('You can\'t be here, get away!');
}
