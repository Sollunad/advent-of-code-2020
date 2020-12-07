const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');
const ans = data.split('\r\n\r\n').map(group => group.split('\r\n').map(person => person.split('')));

let score = 0;
for (const group of ans) {
    const allAns = group.flat();
    const uniq = [...new Set(allAns)];
    score += uniq.length;
}

let score2 = 0;
for (const group of ans) {
    const ansInAll = group[0].filter(letter => group.every(person => person.includes(letter)));
    score2 += ansInAll.length;
}

console.log(score);
console.log(score2);
