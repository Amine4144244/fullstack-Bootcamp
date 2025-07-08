function getDetails(name: string, age: number): [string, number, string] {
    const greeting = `Hello, ${name}! You are ${age} years old.`;
    return [name, age, greeting];
}

const [userName, userAge, message] = getDetails("Alice", 25);

console.log(getDetails("Alice", 25)); 

console.log(`Name: ${userName}`);
console.log(`Age: ${userAge}`);
console.log(`Message: ${message}`);