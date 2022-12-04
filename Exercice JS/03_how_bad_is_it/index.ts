const greatFairies = 348;
const strayFairies = 3;
const currFairies = Number(process.argv[2]);
const missingStrayFairies = Math.ceil((greatFairies - currFairies) / strayFairies);

// display missing fairies
console.log('The Great Fairy is missing', missingStrayFairies, 'Stray Fairies.');

// display healing messages
if (missingStrayFairies < 10) {
  console.log('It\'s not too bad yet, it shouldn\'t take too much time to heal her.');
}

if (missingStrayFairies > 10 && missingStrayFairies < 39) {
  console.log('Whoever did this to her was clearly playing some mischievous prank!');
}

if (missingStrayFairies > 40 && missingStrayFairies < 99) {
  console.log('She has been greatly damaged. We must save her as soon as possible!');
}

if (missingStrayFairies > 99) {
  console.log('What happened to her!? It\'s just awful!');
}
