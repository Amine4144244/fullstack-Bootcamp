function greet(name: string): string;
function greet(): string;

function greet(name?: string): string {
    return name ? `Hello, ${name}!` : 'Hello, guest!';
}

console.log(greet("Alice"));
console.log(greet());

function greetAlt(name: string = "guest"): string {
    return `Hello, ${name}!`;
}

console.log(greetAlt("Bob"));
console.log(greetAlt());