//Exercise 1
const people = ["Greg", "Mary", "Devon", "James"];
//part 1
people.shift();

people[3] = "Jason";

people.push("Amine");

console.log(people.indexOf("Mary"));

let newPeople = people.slice(0, -1);
console.log(newPeople);

console.log(people.indexOf("Foo")); // it return -1 because "Foo" is not in the array

const last = people[people.lenght - 1];
console.log(last);

//Part 2
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}
