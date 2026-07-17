// let score = 33 
// //
// // const {score} = req.body   
// console.log(typeof score)
// console.log(typeof (score))

// // let score="33an"
// let score= undefined //      
// console.log(typeof score)
// console.log(typeof (score))

// let valueInNumber = Number(score)  // it will convert string to number
// console.log(valueInNumber)  // score = "123abc"  = NaN // score = "123"  = 123 // score = "abc"  = NanN // score = undefined  = NanN // 
// score = null  = 0 //score = true  = 1 // score = false  = 0 // 
// console.log(typeof valueInNumber)

 //NaN =>full form Not a number    but it is a number data type

// number CONVERT INTO BOOLEAN
let score = 1
let booleanscore = Boolean(score) //it will convert number to boolean
console.log(booleanscore) // score = 1  = true // score = 0  = false // score = -1  = true // score = undefined  = false // 
// score = null  = false // score = NaN  = false //score = ""  = false // score = "sachin"  = true // score = " "  = true // score = "0"  = true 
// // score = "1"  = true // score = "-1"  = true
console.log(typeof booleanscore)



let someNumber = 33
let stringNumber= String(someNumber)  // it will convert number to string
console.log(stringNumber)  // score = 1  = "1" // score = 0  = "0" // score = -1  = "-1" // score = undefined  = "undefined" //
// score = null  = "null" // score = NaN  = "NaN" //score = ""  = "" // score = "sachin"  = "sachin" // score = " "  = " " // score = "0"  = "0" 
// // score = "1"  = "1" // score = "-1"  = "-1"
console.log(typeof stringNumber)
 