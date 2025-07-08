function greet(name) {
    return name ? "Hello, ".concat(name, "!") : 'Hello, guest!';
}
console.log(greet("Alice"));
console.log(greet());
function greetAlt(name) {
    if (name === void 0) { name = "guest"; }
    return "Hello, ".concat(name, "!");
}
console.log(greetAlt("Bob"));
console.log(greetAlt());
