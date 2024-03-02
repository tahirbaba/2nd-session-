"use strict";
// string data type:
console.log("abc");
console.log('abc');
console.log(`abc`);
// number data type:
console.log(123);
console.log(456);
console.log(789);
// to check type of any data method: "typeof";
console.log(typeof 'abc');
console.log(typeof 123);
// boolean data type:
console.log(4 === 4);
console.log(8 === 8);
console.log("ALHAMDULILLAH", "My 2nd session (part 1) is done", "almostly");
console.log("ALHAMDULILLAH" + "My 2nd session (part 1) is done" + "almostly"); // concatenation:
// variables:
// Variables declairation : let  ,  const  , var
let box1 = ('Gold');
const cupboard = (5000000);
var locker = ('Daimond');
console.log(box1);
console.log(cupboard);
console.log(locker);
console.log(typeof locker);
console.log(typeof cupboard);
// variable type annotions:
let box2 = ('Gold');
const box3 = (5000000);
var inthisright = (true);
// Variables naming conventions:
let myBoxInTheRoom = 'flowers'; // camel case
let MyBoxInTheRoom = 'flowers'; // pascal case
let my_box_in_the_room = 'flowers'; // snake case
// 1) Reserved name not allow: Example : let let box1 = "apple"; , console etc
// 2) Don't start from number: Example : let 1box = "apple";
// 3) Don't space in a name:   Example : let my box = "apple";
// 4) Don't allow any symbols: Example : let my%box = "apple"; , @ , # etc         ( $ , _ symbols allow) 
// Variables declairation : let  ,  const  , var 
// (bitween difference = var redeclarable & ubdateable , let = inredeclarable but ubdateable & const = inredeclarable & unubdateable)
var mybox = 'apple'; // Declaration
mybox = 'Banana'; // updation
mybox = 'Mango'; // updation
console.log(mybox); // run in cmd (mybox = Mango) 
var mybox = 'apple'; // redeclaration
let mybox1 = 'apple'; // Declaration
mybox1 = 'Banana'; // updation
mybox1 = 'Mango'; // updation
console.log(mybox1); // run in cmd (mybox = Mango) 
// let mybox1 = 'apple'; // redeclaration                             //   run in cmd (mybox1 = Mango)
const mybox2 = 'apple'; // Declaration
// mybox2 = 'Banana';    // updation                                  //   run in cmd (mybox2 = apple)
console.log(mybox2); // run in cmd (mybox = Mango) 
// let mybox2 = 'Mango'; // redeclaration                            //   run in cmd (mybox2 = apple)
//  let  =  block scope
//  let  =  block scope
//  let  =  global scope
// For Example: 
let x = 10;
if (x === 10) {
    let mybox = 'flower';
    const hisbox = 'apple';
    var yourbox = 'Mango';
}
console.log(mybox); // run in cmd : mybox = error
console.log(hisbox); // run in cmd : hisbox = error
console.log(yourbox); // run in cmd : mybox = Mango
// typescript me double word aane ki wjah se last two sentences me error aa raha he jb k javascript me ye sentences without error hen:
