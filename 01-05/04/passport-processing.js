const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');
const pps = data.split('\r\n\r\n').map(pp => [].concat(...pp.split('\r\n').map(row => row.split(' '))));

const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
const validPps1 = pps.filter(pp => required.every(req => pp.some(entry => entry.startsWith(req))));
console.log(validPps1.length);

const validPps2 = [];
for (const pp of validPps1) {
    const byr = parseInt(getValue(pp, 'byr'));
    if (byr < 1920 || byr > 2002) continue;

    const iyr = parseInt(getValue(pp, 'iyr'));
    if (iyr < 2010 || iyr > 2020) continue;

    const eyr = parseInt(getValue(pp, 'eyr'));
    if (eyr < 2020 || eyr > 2030) continue;

    const hgt = getValue(pp, 'hgt');
    if (hgt.endsWith('cm')) {
        const cm = hgt.substring(0, hgt.length - 2);
        if (cm < 150 || cm > 193) continue;
    } else if (hgt.endsWith('in')) {
        const inch = hgt.substring(0, hgt.length - 2);
        if (inch < 59 || inch > 76) continue;
    } else continue;

    const hcl = getValue(pp, 'hcl');
    const hclRegx = /^#[0-9a-f]{6}$/g;
    if (!hclRegx.test(hcl)) continue;

    const ecl = getValue(pp, 'ecl');
    const validEcl = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
    if (!validEcl.includes(ecl)) continue;

    const pid = getValue(pp, 'pid');
    const pidRegx = /^[0-9]{9}$/g;
    if (!pidRegx.test(pid)) continue;

    validPps2.push(pp);
}

//console.log(validPps1.filter(pp => !validPps2.includes(pp)));
console.log(validPps2);
console.log(validPps2.length);

function getValue(pp, key) {
    const entry = pp.find(entry => entry.startsWith(key));
    return entry.split(':')[1];
}