const fs = require('fs');

const questbook = JSON.parse(fs.readFileSync(process.argv[3], 'utf-8'));

if (process.argv[2] === '--list') {
  console.log(' === Ongoing === ');
  for (const book of questbook) {
    if (process.argv[2] === '--list') { // compare si --list est bien appler dans la ligne de commande
      if (book.id === 4 || book.id === 20) {
        console.log(`# ${book.id} ${book.name}`);
      }
    }
  }

  console.log('=== Complete ===');
  for (const book of questbook) {
    if (process.argv[2] === '--list') if (book.id !== 20 && book.id !== 4 && book.id !== 8) console.log(`#${book.id} ${book.name}`);
  }
  console.log('=== Failed ===');
  for (const book of questbook) {
    if (process.argv[2] === '--list') { // compare si --list est bien appler dans la ligne de commande
      if (book.id === 8) {
        console.log(`#${book.id} ${book.name}`);
      }
    }
  }
}
