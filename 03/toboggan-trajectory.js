const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');
const map = data.split('\r\n').map(row => row.split(''));

const width = map[0].length;

function getTrees(right, down) {
    let curX = 0;
    let trees = 0;
    for (let curY = 0; curY < map.length; curY += down) {
        if (map[curY][curX] === '#') trees++;
        curX += right;
        curX = curX % width;
    }
    return trees;
}

console.log(getTrees(3, 1));

const product
    = getTrees(1, 1)
    * getTrees(3, 1)
    * getTrees(5, 1)
    * getTrees(7, 1)
    * getTrees(1, 2);

console.log(product);


