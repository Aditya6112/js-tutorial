const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");    //outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);//h
console.log(gameName.__proto__); // {}


console.log(gameName.length); //13
console.log(gameName.toUpperCase()); //HITESH-HC-COM
console.log(gameName.charAt(2));     //t
console.log(gameName.indexOf('t'));  //2

const newString = gameName.substring(0, 4)
console.log(newString);             //hite

const anotherString = gameName.slice(0, 4) 
console.log(anotherString);           //hite

const newStringOne = "   hitesh    "
console.log(newStringOne);           //       hitesh
console.log(newStringOne.trim());    //hitesh     //remove blank spaces

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))         //https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar'))          //false

console.log(gameName.split('-'));            //[ 'hitesh', 'hc', 'com' ]


//ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split