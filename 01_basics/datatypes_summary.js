//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "aditya",
    age: 20,
}

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack => Primitive, Heap=> Non-Primitive

let myhomeName = "aditya"
let anothername = myhomeName
anothername = "adi"

console.log(myhomeName);   //aditya
console.log(anothername);  //adi
//not changed because it makes a copy not changed original value.


//now in heap it uses reference
let userOne = {
    email: "user1@gmail.com",
    upi: "user1@ybl",
}

let userTwo = userOne //due to heap it changed its original value.

userTwo.email = "changedEmail@gmail.com"

console.log(userOne);    //"changedEmail@gmail.com"
console.log(userTwo);    //"changedEmail@gmail.com"
