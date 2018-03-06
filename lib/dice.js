let { randomInt } = require('./math');

diceNotation = (rollObj) => {
    let diceString = `${rollObj.count}d${rollObj.sides}`;
    return diceString;
}

roll = (diceNotatationString) => {
    let splitPoint = diceNotatationString.indexOf('d');
    let count = parseInt(diceNotatationString.slice(0, splitPoint));
    let sides = parseInt(diceNotatationString.slice(splitPoint + 1));
    return randomInt(count, sides);
}

module.exports = { diceNotation, roll }