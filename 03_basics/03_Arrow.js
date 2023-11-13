const user = {
    username: "zahoor",
    price: 999,
    welcomeMessage: function(){
console.log(`${this.username} , wlecome to my website `);
console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);



// function chai () {
//     let username = "zahoor"
//     console.log(this.username);
// }

// chai()



//  through arrow ftn


// const chai = function () {
//     let username = " zahoor"
//     console.log(this.username);
// }
// chai()


const chai =  () =>  {
    let username = " zahoor"
    console.log(this);
}
// chai()


// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "zahoor"})
    

console.log(addTwo(3, 4))


const myArray = [2, 4, 55, 66, 3]
// myArray.forEach()