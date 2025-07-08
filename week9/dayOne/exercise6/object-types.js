function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}
var person1 = createPerson("Alice", 25);
console.log(person1);
function createPersonShort(name, age) {
    return { name: name, age: age };
}
var person2 = createPersonShort("Bob", 30);
console.log(person2);
