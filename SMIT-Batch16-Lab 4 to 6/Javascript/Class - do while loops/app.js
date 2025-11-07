// for () {

// }

// let i = 0;
// while (i <= 5) {
//     console.log("numbers", i)
//     i++;
// }



// let i = 0;
// do {
//     console.log("numbers", i, i++)
// }
// while (i <= 5);



// do {
//     let password = prompt("Enter your Password?");
// }
// while (password === "1234");

// console.log("You Loged in");


// let password;
// while (password !== "1234") {
//     password = prompt("Enter your password");
// }
// console.log("Access Graned!");








let guess = Math.ceil(Math.random() * 3); // 70%

// console.log(guess)
let userGuess; // 70%
do {
    userGuess = +prompt("Enter your number?")

    if (userGuess === guess) {
        alert("you Guessed right!")
    } else if (userGuess < guess) {
        alert("too low")
    } else {
        alert("too high!")
    }
}
while (userGuess !== guess);
console.log("you win! Thank you for playing.");