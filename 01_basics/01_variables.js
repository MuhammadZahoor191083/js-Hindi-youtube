const accountId = "832742"
let accountEmail = "mxee@mail.com"
var accountPassword = "83827"
accountCity = "Swabi"
let accountState;

// accountId = // 2 nor allowed

accountEmail = "hc@gmail.com"

accountPassword = "378273"
accountCity = "Mardan"// declared but this is not a coreect way to

console.log(accountId);


/*
Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])