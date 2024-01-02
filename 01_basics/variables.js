const accountId = 2161072
let accountEmail = "raj@gmail.com"
var accountPassword = "12345"
accountCity = "Muzaffarpur"

// accountId = 2 // not allowed
accountEmail = "hc@hc.com"
accountPassword = 34242
accountCity = "Bengaluru"

/*prefer not to use var anywhere
because of issue in block scope and functional scope*/

let accountState;    //undefined
console.log(accountState)

console.log(accountCity);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);