// Function that returns a tuple
function getDetails(name, age) {
    var greeting = "Hello, ".concat(name, "! You are ").concat(age, " years old.");
    return [name, age, greeting];
}
// Call the function and destructure the tuple
var _a = getDetails("Alice", 25), userName = _a[0], userAge = _a[1], message = _a[2];
// Log the entire tuple
console.log(getDetails("Alice", 25));
// Output: ['Alice', 25, 'Hello, Alice! You are 25 years old.']
// Log destructured values
console.log("Name: ".concat(userName));
console.log("Age: ".concat(userAge));
console.log("Message: ".concat(message));
