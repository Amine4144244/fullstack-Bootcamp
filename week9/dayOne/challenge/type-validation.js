function validateUnionType(value, allowedTypes) {
    var valueType = typeof value;
    return allowedTypes.includes(valueType);
}
var testValues = [
    "Hello",
    42,
    true,
    { name: "Alice" },
    [1, 2, 3],
    null,
    undefined
];
var allowedTypes = ["string", "number", "boolean"];
testValues.forEach(function (value) {
    var isValid = validateUnionType(value, allowedTypes);
    console.log("".concat(JSON.stringify(value), " (").concat(typeof value, "): ").concat(isValid ? "Valid" : "Invalid"));
});
