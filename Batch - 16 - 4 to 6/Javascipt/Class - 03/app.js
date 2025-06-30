// function doctor (time) {
//     console.log("your appointment for " + time + "!");
// };

// function doctor2 () {
//     console.log("your appointment for Night!");
// };

// doctor("Morning");
// doctor("Night");
// doctor("Night");
// doctor("1/07/2025");
// doctor2();


// function cook (dish, time) {
//     console.log("your " + dish + " is ready! for " + time);
// }

// cook("breakfast", "biryani");
// cook("biryani", "lunch");
// cook("biryani", "Dinner");
// cook("Daal Chawal");
// cook("Chicked tikka");


// user prompt 2 numbers sum print

// function sum (num1, num2) {
//     let add = num1 + num2;
//     console.log(add);
// }

// let num1 = +prompt("Enter a number");
// let num2 = +prompt("Enter a number");

// sum(num1, num2);







// prompt user firstName and Lastname 
// Welcom user fullname !

// function greet (firstName, lastName) {
//     console.log("Welcome " + firstName + " " + lastName + "!");
// }

// let firstName = prompt("Enter your first name?");
// let lastName = prompt("Enter your last name?");

// greet(firstName, lastName);


// function greet () {
//    return "Hello";
// }

// let greetUser = greet();

// console.log(greetUser);


// function greet (userName) {
//     return "Hello " + userName + "!"; 
// };

// function welcomeUser (name) {
//     let message = greet(name);
//     console.log(message);
// }

// welcomeUser("Afsar");


// user prompt 2 numbers sum
// 2 functions sum or console.log()
function getvalue(val1 , val2){
    let value = val1 + val2
    return value;
}

function render(val1 , val2){
    // let final = val1 + val2
    // console.log(final);
    let final = getvalue(val1, val2);
    console.log(final);
}

let val1 = +prompt ('Enter 1st number');
let val2 = +prompt ('Enter 2nd number');


render(val1, val2)

