"use strict"; // treat all Js code as newer version of Js
 
// alert(3+3)  we are using nodejs , not browser so alert will not work
/*console.log(3+3) console.log("sachin");  //    this give error because we have not used semicolon after 
first console.log() so it will treat next line as same line and give error */


// but if  write  second console.log from second line  it will work 

console.log(3+3)
console.log("sachin");
 //it will work 

 //it also work if we write 
 console.log(3+3); console.log("sachin")    //but is not good practice to write code 

//documentation : tc39.es and MDN

    let name = "sachin" //string
    let age = 22 //number
    let isLoggedIn = false //boolean
    let state; //undefined
    let city = null //null

    // number => 2 to power 53
    //bigint => more than 2 to power 53
    //string => "" or '' or ``
    //boolean => true or false
    //null => standalone value(utit is a value that is not yet defined)
    //undefined => value taken by a variable that is not yet defined
    //symbol => unique and cannot be changed(for unique identifiers)

    console.log(typeof name)
    console.log(typeof city)
    console.log(typeof state)
    console.log(typeof null) // its result is object  but it shouls be null but it is a bug in JS 
    console.log(typeof undefined)// its result is undefined 