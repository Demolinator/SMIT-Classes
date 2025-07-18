// for print even numbers 50


// for (let i = 0; i <= 50; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }









// let cities = ["Karachi", "Islamabad", "Lahore", "Peshawar"];


// cities.splice(1, 2, "Quetta");
// console.log(cities);




// let cities = ["Karachi", "Islamabad", "Lahore", "Peshawar"];

// let favCities = cities.slice(1, 3);
// favCities.splice(0, 1);
// // favCities.pop();

// console.log(favCities, cities);








/* 
.length

push()
pop()
shift()
unshift()
indexOf()
splice()

slice()

*/


// console.log([].length);
// console.log("".length);


// let fullName = "Talal Ahmed";
// let firstName = fullName.slice(0, 5);
// let lastName = fullName.slice(6);

// console.log(lastName);



/*

.toUpperCase()
.toLowerCase()

*/



// let fullName = "Talal Ahmed";

// let toLowerFullName = fullName.toUpperCase();

// console.log(toLowerFullName);




// let userName = prompt("Enter your name?");
// console.log(userName.toLowerCase());





// user prompt city print in title case KaRaCHi

// let userCity = prompt("Enter your city name?");

// let titleUserCity = userCity[0].toUpperCase() + userCity.slice(1).toLowerCase();

// console.log(titleUserCity);







let cleanCity = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
let userCity = prompt("Enter your city?");
let isClean = false;

for (let i = 0; i < cleanCity.length; i++) {
    if (userCity.toLowerCase() === cleanCity[i].toLowerCase()) {
        isClean = true;
        break;
    }
}


if (isClean) {
    console.log("you live in a clean city");
}
else {
    console.log("you do not live in a clean city");
}












// Lorem Ipsum Dolor sit amet consectetur adipisicing elit. Nam tempora libero veritatis quaerat sit ex corporis cumque illo, sed saepe aut quam doloribus dolores! Quam quisquam quos asperiores dolorem quasi!


