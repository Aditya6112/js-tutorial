let score = "hitesh"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "aditya"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
//  console.log(stringNumber);
//  console.log(typeof stringNumber);


/*************operations********************/
let value = 3;
let negValue = -value;
console.log(negValue);

let str1 = "hello"
let str2 = " aditya"

let str3 = str1 + str2 //hello aditya
console.log(str3);

// console.log("1" + 2);      //12
// console.log(1 + "2");      //12
// console.log("1" + "2");    //12
// console.log("1" + 2 + 2);    //122
// console.log(1 + 2 + "2");    //32

console.log(true);  //true

console.log(+true);  //1 //not use
console.log(+"");    //0 //not use

let num1,num2,num3
num1=num2=num3=2+2

let gameCounter=100
++gameCounter;      //prefix postfix
console.log(gameCounter);

//postfix and prefix increament
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"