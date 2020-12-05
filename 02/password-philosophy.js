const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');
const entries = data.split('\r\n').map(entry => {
   const rowSplit = entry.split(' ');
   const minMax = rowSplit[0].split('-');
   const letter = rowSplit[1].charAt(0);
   return {
       min: minMax[0],
       max: minMax[1],
       letter,
       password: rowSplit[2],
   }
});

let valid = 0;
for (const entry of entries) {
    const occ = entry.password.split(entry.letter).length - 1;
    if (occ >= entry.min && occ <= entry.max) valid++;
}

let valid2 = 0;
for (const entry of entries) {
    const first = entry.password.charAt(entry.min - 1) === entry.letter;
    const second = entry.password.charAt(entry.max - 1) === entry.letter;
    if (first ^ second) valid2++;
}

console.log(valid);
console.log(valid2);