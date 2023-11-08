// Primitive Data Types

// 7 types : String, Number, Bolean, Null, undefined, Symbol(for unique value), BigInt(for large value)

const score = 100
const scoreValue = 100.5
const isLoggedIn = false
const outSidetemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


// const bigNumber = 73247012370497953972390n



// Reference Type(Non primitive)

// Arrays, Objects, Functions

const heros = ["zahoor", "Afridi", "Khalil", "Ali"];
let myObj = {
    name: "zahoor",
    age: 22,
}

const myFunction =function() {
    console.log("Hello world");
}

console.log(typeof anotherId);


//  https://262.ecma-international.org/5.1/#sec-11.4.3

// ****************


// Stack(Primitive) Heap(Non-primitive)


let myYoutubename = "hellodotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"

}
let userTwo = userOne 
userTwo.email = "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);

