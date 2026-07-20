const name = " hitesh"
const repoCount = 50

console.log(name + repoCount)

console.log(`hello my name is ${name} and my repo coursecount is ${repoCount} `)

const gameName = new String('sachin-soni')


//String methods 


console.log(gameName[0]);// s is answer beacuse string is an array of characters and we can access the characters using index number
console.log(gameName.__proto__);// it will give the prototype of string object that is {}

console.log(gameName.charAt(3));// it will give the character at the given index number that is 3 in this case and the answer is h
console.log(gameName.indexOf('c'));// it will give the index number of the given character that is c in this case and the answer is 2


const newString = gameName.substring(0,4)// it will give the substring of the given string from index 0 to index 4 and the answer is sach
console.log(newString);

const anotherString = gameName.slice(0,4)// it will give the substring of the given string from index 0 to index 4 and the answer is sach
console.log(anotherString);   

console.log(gameName.split('-'));// it will split the given string into an array of substrings based on the given separator that is - in this case and the answer is [ 'sachin', 'soni' ]

console.log("    ")
console.log("    ")
console.log("    ")



const newStringOne =  "    sachin    "
console.log(newStringOne)
console.log(newStringOne.trim())// it will remove the white spaces from the given string and the answer is sachin


const url = " https://www.google.com/search?q=javascript+string+methods&oq=javascript+string+methods&aqs=chrome%220%69i57j0i512l9.1234j0j7&sourceid=chrome&ie=UTF-8"
console.log(url.replace('%20','-'))// it will replace the given string with the new string and the answer is https://www.google.com/search?q=javascript-string-methods&oq=javascript+string+methods&aqs=chrome%220%69i57j0i512l9.1234j0j7&sourceid=chrome&ie=UTF-8  

console.log(url.includes('facebook'))// it will check if the given string is present in the string or not and the answer is false