let id: string | number;

id = 12345;
console.log("Number ID:", id);

id = "ABC-67890";
console.log("String ID:", id);

function printId(identifier: string | number) {
    console.log(`Your ID is: ${identifier}`);
}

printId(54321);
printId("XYZ-98765");