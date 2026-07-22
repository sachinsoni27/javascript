//Dates
 
   let myDate = new Date();
   console.log(myDate.toString());//Mon Jun 10 2024 19:30:00 GMT+0530 (India Standard Time)
    console.log(myDate.toDateString());//Mon Jun 10 2024
    console.log(myDate.toTimeString());//19:30:00 GMT+0530 (India Standard Time)
    console.log(myDate.toLocaleString());//6/10/2024, 7:30:00 PM
    console.log(myDate.toLocaleDateString());//6/10/2024
    console.log(myDate.toLocaleTimeString());//7:30:00 PM

    console.log("   ")


    console.log (typeof myDate);//object

    let myCreatedDate = new Date(2026,0,23)
    console.log(myCreatedDate.toDateString());//Fri Jan 23 2026        ,,,MONTHS STARTS from "0" in JS


    console.log("   ")
    let myCreatedDate2 = new Date("2026-01-23")
    console.log(myCreatedDate2.toDateString());//Fri Jan 23 2026   when you write  DD/MM/YYYY in the string format months stsrt from '1"


    console.log("   ")

    let myTimeStamp = Date.now()
    console.log(myTimeStamp);//
    
    console.log(myCreatedDate2.getTime());//1737714600000  in mili seconds 


    console.log("   ")

    console.log (Date.now());// 1717981800000  in mili seconds
    //FOR IN SECONDS   
    console.log(Math.floor(Date.now()/1000));// 1717981800  in seconds
    console.log(new Date().getTime());// 1717981800000  in mili seconds  
    console.log(new Date().getMonth());// 5  (MONTHS STARTS from "0" in JS)
    console.log(new Date().getDay());// 1  (DAYS STARTS from "0" in JS)



//    `${new Date().getDay()}and the time is ${new Date().getTime()}`

console.log(new Date().toLocaleString('default', { month: 'long', timeZone: 'Asia/Kolkata' }));
 