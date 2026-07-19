//stack is used for storing primitive data types like numbers, strings, booleans, null, undefined, and symbols. These are stored in a fixed size and are accessed directly from the stack memory.
//heap   is used for storing reference data types like objects, arrays, and functions. These are stored in a dynamic size and are accessed through references from the stack memory.


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "hitesh@google.com";

console.log(userOne.email);
console.log(userTwo.email);