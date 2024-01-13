const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

/************************************************************************/
// console.log(this);   //If we run this in browser console the this gives the output as (window object) 
                        //but in a JS engine i.e node,bun etc. it gives {} empty object.
/************************************************************************/

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //undefined this keyword is non-usable in functions. 
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);        //undefined
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);       //{}  empty object
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2        //explicit return
// }





// const addTwo = (num1, num2) =>  num1 + num2    //implicit return same as upper arrow function
////IMPORTANT*********************//***************************/
// const addTwo = (num1, num2) => ( num1 + num2 )
// when using { } then we need to return someting but when using (  ) then return not used. see ABOVE



const addTwo = (num1, num2) => ({username: "hitesh"})   //returning object


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()