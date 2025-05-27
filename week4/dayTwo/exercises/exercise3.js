// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// the output will be: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
// ------2------
const country = "USA";
console.log([...country]);

// the output will be: ['U', 'S', 'A']
// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);

// the output will be: [undefined, undefined, undefined]