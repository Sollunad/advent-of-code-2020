const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');
const numbers = data.split('\r\n').map(s => parseInt(s));

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === 2020) {
            console.log(numbers[i], numbers[j]);
            console.log(numbers[i] * numbers[j]);
        }
    }
}

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        for (let k = j + 1; k < numbers.length; k++) {
            if (numbers[i] + numbers[j] + numbers[k] === 2020) {
                console.log(numbers[i], numbers[j], numbers[k]);
                console.log(numbers[i] * numbers[j] * numbers[k]);
            }
        }
    }
}