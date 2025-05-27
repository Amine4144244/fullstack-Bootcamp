const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const flatArray = array.flat(2);
console.log(flatArray);

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const greetingSentences = greeting.map(words => words.join(' '));
console.log(greetingSentences);

const greetingString = greetingSentences.join(' ');
console.log(greetingString);

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const freed = trapped.flat(Infinity);
console.log(freed);