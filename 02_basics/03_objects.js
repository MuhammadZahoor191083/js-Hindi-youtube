// singleton

// object literals
// object.creat

const mySym = Symbol("key1")



const JsUser = {

    name: "Hitesh",
    "full name": "Hitesh Choudary",
   [ mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoogedn: false,
    lastLoginDays: ["Mondey, Saturday"]
}


// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])



JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)

JsUser.email = "hitesh@microsoftgpt.com"
console.log(JsUser);




JsUser.greeting = function() {
    console.log("hello JS USer");
}
JsUser.greetingTwo = function() {
    console.log(`hello JS USer, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());