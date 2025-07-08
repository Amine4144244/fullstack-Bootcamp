function validateUnionType(value: any, allowedTypes: string[]): boolean {
    const valueType = typeof value;
    
    return allowedTypes.includes(valueType);
}

const testValues = [
    "Hello", 
    42, 
    true, 
    { name: "Alice" }, 
    [1, 2, 3], 
    null, 
    undefined
];

const allowedTypes = ["string", "number", "boolean"];

testValues.forEach(value => {
    const isValid = validateUnionType(value, allowedTypes);
    console.log(`${JSON.stringify(value)} (${typeof value}): ${isValid ? "Valid" : "Invalid"}`);
});