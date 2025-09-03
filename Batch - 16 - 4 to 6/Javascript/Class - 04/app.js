// DOM manipulation

// let h1 = document.getElementById("change-text");
// let innerH1 = h1.innerHTML = "Hello From JS";
// console.log(innerH1);




// function changeH1 () {
//     let h1 = document.getElementById("change-text");
//     h1.innerHTML = "Hello from JS";
// }


// paragraph "paragraph from JS"



// function changePara() {
//     let p = document.getElementById("change-para");
//     p.innerHTML = "Hello from JS";
// }


// function changePara() {
//     let p = document.getElementById("change-para");
//     p.innerHTML = "Hello from JS";
// }



// conditions
// eval ===
// console.log(fullName === "Khizer");

// let fullName = "Khizer";

// if (fullName === "Khizer") {
//     console.log("Welcome Khizer!");
// }




// let age = 19;

// if (age >= 18) {
//     console.log("you are elegible for driving license!");
// }
// else {
//     console.log("you are not elegible for driving license!. apply after 18!")
// }


// user Input
// result = 70
// you failed
// you passed/you failed
// DOM print

// let userInput = prompt("Enter you marks");

// if (userInput >= 70) {
//     let h2 = document.getElementById("marks");
//     h2.innerHTML = "you passed!";
// } else {
//     let h2 = document.getElementById("marks");
//     h2.innerHTML = "you failed!";
// }





// let userInput = +prompt("Enter you marks");

// if (userInput > 70) {
//     let h2 = document.getElementById("marks");
//     h2.innerHTML = "you passed!";
// } 
// else if (userInput === 70) {
//     let h2 = document.getElementById("marks");
//     h2.innerHTML = "you barely passed!";
// }
// else {
//     let h2 = document.getElementById("marks");
//     h2.innerHTML = "you failed!";
// }



// userName prompt Talal "you loged in to teacher portal"
// userName prompt Wajid "you loged in to management portal"
// userName prompt Aftab "you loged in to reception portal"
// userName prompt xyz "you loged in to student portal"
// print in DOM


let userName = prompt("Enter your name");

if (userName === "Talal") {
    let h2 = document.getElementById("message");
    h2.innerHTML = "you loged in to teacher portal";
}
else if (userName === "Wajid") {
     let h2 = document.getElementById("message");
    h2.innerHTML = "you loged in to management portal";
}
else if (userName === "Aftab") {
    let h2 = document.getElementById("message");
    h2.innerHTML = "you loged in to reception portal";
}
else {
    let h2 = document.getElementById("message");
    h2.innerHTML = "you loged in to student portal";
}