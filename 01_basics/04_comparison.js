// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);      //true
// console.log("02" > 1);     //true

console.log(null > 0);        //false
console.log(null == 0);       //false
console.log(null >= 0);       //true  here conversion occurs of null to 0 while in ==,<,> it's NaN

console.log(undefined == 0);  //false
console.log(undefined > 0);   //false
console.log(undefined < 0);   //false

// === 

console.log("2" === 2);       //false because it is strict check it also check datatypes