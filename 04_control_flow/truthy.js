const userEmail = []

if (userEmail) {
console.log("Got user email");
    
} else {
    console.log("dont have user email");
}


// fasley values++++

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// Truthy values


// "0", 'false', " ", [], {}, function(){}


// if (userEmail.length === 0) {
//     console.log("array is empty");
    
// }



const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}



// Nullish Coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 10
console.log(val1);

//  Trenary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more han 80");