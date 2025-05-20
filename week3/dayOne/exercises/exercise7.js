// exercise 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let initials = names.map(name => name[0]);

initials.sort();

let secretSociety = initials.join('');
console.log(secretSociety);