// 1
function kgToGrams(weight) {
  return weight * 1000;
}
// 2
console.log(kgToGrams(2));
// 3
const kgToGramsExpr = function(weight) {
  return weight * 1000;
};

console.log(kgToGramsExpr(3));

// 4
const kgToGramsArrow = (weight) => weight * 1000;
console.log(kgToGramsArrow(4));