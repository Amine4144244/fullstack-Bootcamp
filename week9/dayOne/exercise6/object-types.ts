type Person = {
    name: string;
    age: number;
};

function createPerson(name: string, age: number): Person {
    return {
        name: name,
        age: age
    };
}

const person1 = createPerson("Alice", 25);
console.log(person1);

function createPersonShort(name: string, age: number): Person {
    return { name, age };
}

const person2 = createPersonShort("Bob", 30);
console.log(person2);