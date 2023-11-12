

function sayMyName (){
    console.log("Za");
    console.log("h");
    console.log("0");
    console.log("0");
    console.log("r");
     
}


// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2) {
    // return result
    let result = number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);



function loginUserMessage(username = "zahoor"){
    if(!username){
        console.log("plz enter a username");
        return
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("Zahoor"))
console.log(loginUserMessage("khan"))