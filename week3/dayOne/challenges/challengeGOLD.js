const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

const toStringResult = numbers.toString();
console.log("Using toString():", toStringResult);

console.log("Using join(','):", numbers.join(","));
console.log("Using join('+'):", numbers.join("+"));
console.log("Using join(' '):", numbers.join(" "));
console.log("Using join(''):", numbers.join(""));

let sortedNumbers = [...numbers];

for (let i = 0; i < sortedNumbers.length - 1; i++) {
  for (let j = 0; j < sortedNumbers.length - 1 - i; j++) {
    if (sortedNumbers[j] < sortedNumbers[j + 1]) {
      let temp = sortedNumbers[j];
      sortedNumbers[j] = sortedNumbers[j + 1];
      sortedNumbers[j + 1] = temp;
    }
    console.log(`Step i=${i}, j=${j}:`, sortedNumbers);
  }
}

console.log("Sorted in descending order:", sortedNumbers);
