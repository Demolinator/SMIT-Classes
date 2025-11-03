// for (let password = prompt("enter"); password === '4'; password++){
//     console.log('correct');
// }
// let userGuess;  
// let guess;
// do {
//     guess = Math.ceil(Math.random() * 10);
//     userGuess = +prompt("Enter your guess from 1 to 10");

//     if (guess === userGuess) {
//         alert("you guessed correct.")
//     }
//     else {
//         alert("you were off");
//     }
// }
// while (userGuess === 5);
// console.log("you pressed Exit! thank you for visiting.");


// let num = 4;
// do {
//     console.log("Hello from do.");
// }
// while (num === 5)




class Student {
    constructor (firstName, rollNo) {
        this.name = firstName;
        this.rollNo = rollNo;
    }
}

let student1 = new Student("Talal", "213456");
let student2 = new Student("Farhan", "213456");

console.log(student1, student2);