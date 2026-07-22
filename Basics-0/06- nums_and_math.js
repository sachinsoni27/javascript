 const score = 400
 console .log(score);

 const balance = new Number(1000);
 console.log( balance);


 console.log( balance.toString() )
 console.log( balance.toFixed(2)) ;


 const otherNumber = 23.88996

 console.log( otherNumber.toPrecision(3 ))// its range is 1 to 21
 
 console.log( otherNumber.toPrecision(2 ) )


 const otherNumber2 = 2322335.333
 
 console.log( otherNumber2.toPrecision(3 ))// it is out of  range is 1 to 21

const hundred =10000000
console.log(hundred.toLocaleString())
console.log(hundred.toLocaleString('en-IN'));


console.log("       ")
console.log("       ")
console.log("       ")


//-----------------------------MATHS____________________________________________________________________________

 console.log(Math); 
 console.log(Math.abs(-4.7));
console.log(Math.round(4.7));
console.log(Math.floor(4.7));
console.log(Math.ceil(4.7));
console.log(Math.sqrt(64));
console.log(Math.pow(2,3));
console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));
console.log(Math.random()); 


console.log(Math.random() * 10); // returns a random number between 0 and 10
console.log(Math.floor(Math.random() * 10) + 1); // returns a random integer between 1 and 10


const min = 10 
const max = 20 

console.log(Math.floor(Math.random()*(max-min +1))+ min)
