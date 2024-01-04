const score = 400
console.log(score);

const balance = new Number(100.2345)
console.log(balance);

console.log(balance.toString().length);  //length of the string including decimal here is 8
console.log(balance.toFixed(1));      //after decimal how many places is fixed 100.2

const otherNumber = 1123.8966

console.log(otherNumber.toPrecision(4)); //4 digits will occour like for 23.8966-> 23.90, 123.8966-> 123.9, 1123.8966->1124

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  //10,00,000

/*************************Maths************************/

console.log(Math);// Object [Math] {}     
console.log(Math.abs(-4));//4
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.9));//4
console.log(Math.min(4, 3, 6, 8));//3
console.log(Math.max(4, 3, 6, 8));//8


console.log(Math.random());// 0.198297866705621
console.log((Math.random() * 10) + 1);// 4.500040984721238
console.log(Math.floor(Math.random() * 10) + 1);//6

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)//10 to 20 where (10,20]

console.log(Math.floor(Math.random()*6+1)); // [1,6]
