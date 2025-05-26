// ✅ #1.1 - What will be the output?
// Output: inside the funcOne function 3

// ✅ #1.2 - What will happen if the variable is declared with const instead of let?
// Answer: It will throw an error: TypeError: Assignment to constant variable. because const cannot be reassigned.

// ✅ #2.1 - What will be the output?
// js
// Copy code
// funcThree(); // Output: inside the funcThree function 0
// funcTwo();   // modifies a to 5
// funcThree(); // Output: inside the funcThree function 5
// ✅ #2.2 - What will happen if the variable is declared with const instead of let?
// Answer: It will throw an error when funcTwo() tries to reassign a:
// TypeError: Assignment to constant variable.

// ✅ #3.1 - What will be the output?
// Output: inside the funcFive function hello

// ✅ #4.1 - What will be the output?
// Output: inside the funcSix function test

// ✅ #4.2 - What will happen if the variable is declared with const instead of let?
// Answer: No problem, same output (test) as long as it’s not reassigned.

// ✅ #5.1 - What will be the output?
// Output:

// scss
// Copy code
// in the if block 5
// outside of the if block 2
// ✅ #5.2 - What will happen if the variable is declared with const instead of let?
// Answer: Same output. No error, because const is block-scoped like let.