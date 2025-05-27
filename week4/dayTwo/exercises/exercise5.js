const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const epicString = epic.reduce((acc, val) => acc + ' ' + val, '');
console.log(epicString.trim());