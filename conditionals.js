const prompt = require('prompt-sync')()


let x = 4
let y = 5

if (y > x) {
    console.log("Y is Greater Than X!")
}

if (x > y) {
    console.log("X is Greater Than Y!")
} else {
    console.log("Nope! X is NOT greater than Y!")
}

// A program to determine whether it's time to get up

let hour = prompt("What time is it? ")

if(hour  < 4) {
    console.log("It's the middle of the night. Keep sleeping!")
} else if(hour > 4 && hour < 7){
    console.log("You can sleep a little longer.")
} else {
    console.log("Why are you still sleeping? Wake Up!")
}