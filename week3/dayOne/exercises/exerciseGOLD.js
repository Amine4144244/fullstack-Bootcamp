// 1
let numbers = [123, 8409, 100053, 333333333, 7];

for (let i = 0; i < numbers.length; i++) {
  let isDivisible = numbers[i] % 3 === 0;
  console.log(isDivisible);
}

// 2
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
};

let studentName = prompt("What is your name?").toLowerCase(); 

if (studentName in guestList) {
  console.log(`Hi! I'm ${studentName}, and I'm from ${guestList[studentName]}.`);
} else {
  console.log("Hi! I'm a guest.");
}

// 3
let age = [20, 5, 12, 43, 98, 55];

let sum = 0;
for (let i = 0; i < age.length; i++) {
    sum += age[i];
}
console.log("Sum of ages:", sum);


let highest = age[0]; 
for (let i = 1; i < age.length; i++) {
    if (age[i] > highest) {
        highest = age[i];
    }
}
console.log("Highest age:", highest);
