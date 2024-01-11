//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);       //username is a global scope for this scope.
    }
    // console.log(website);   //ERROR used without declaration in its own scope
}

// console.log(username);            //ERROR not declared in its scope


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //6 //function can be accessible anywhere

function addone(num){
    return num + 1
}



addTwo(5)    //ERROR because the function holded in a variable so...[hoisting]
const addTwo = function(num){
    return num + 2
}