const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');
const passes = data.split('\r\n').map(pass => pass.split(''));

let maxId = 0;
const passIds = [];

for (const pass of passes) {
    let row = 0;
    let col = 0;
    for (let rowC = 0; rowC <= 6; rowC++) {
        if (pass[rowC] === 'B') row += Math.pow(2, 6 - rowC);
    }
    for (let colC = 0; colC <= 2; colC++) {
        if (pass[colC + 7] === 'R') col += Math.pow(2, 2 - colC);
    }
    const id = row * 8 + col;
    passIds.push(id);
    if (id > maxId) maxId = id;
}

const nbs = passIds.filter(id => !passIds.includes(id - 1) || !passIds.includes(id + 1));

console.log(maxId);
console.log(nbs);
