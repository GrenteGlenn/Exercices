const FS = require('fs');

const filecontent = FS.readFileSync(process.argv[3], 'utf-8');

const bookquest = JSON.parse(filecontent);

for (const book of bookquest) {
  if (process.argv[2] === '--list') { // compare si --list est bien appler dans la ligne de commande
    console.log(`#${book.id} ${book.name}`);
  }
}
