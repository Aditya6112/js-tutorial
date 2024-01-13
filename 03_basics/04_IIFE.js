// Immediately Invoked Function Expressions (IIFE)
//Sometimes to remove pollution from global scope we use IIFE.
//()()  first paranthesis holds the function and second is for immediate execution.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')