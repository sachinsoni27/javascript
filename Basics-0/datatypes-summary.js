//primitive

//7 types: string, number, bigint, boolean, undefined, symbol, null 

const id = Symbol("13"); // it is unique and immutable data type
const  anotherId = Symbol("13"); // it is unique and immutable data type

console.log(id === anotherId); // false     



//reference

// 3 types: object, array, function

const heros =["shaktiman", "naagraj", "doga", "nagraj", ];

const user={
   firstName: "sachin",
   lastName: "soni",
   age: 22,
   isLoggedIn: false,
   lastLoginDays:["Monday", "Saturday"]
}// work as key value pair and it is mutable data type

console.log(user.firstName);
console.log(user["lastName"]);
console.log(user.lastName);

console.log(typeof user);// object