const _ = require("lodash");
const math = require("./math");

const sum = math.add(5, 3);
const product = math.multiply(4, 6);

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);

const numbers = [10, 20, 30, 40];
const mean = _.mean(numbers);
console.log(`Mean: ${mean}`);