// let discountedMonths = ["jan", "feb", "mar", "apr", "may"];
// let userBirthMonth = prompt("Enter you Birth Month?"); // JanuRary


// userBirthMonth = userBirthMonth.toLowerCase(); // janurary
// userBirthMonth = userBirthMonth.slice(0, 3); // jan
//                                              "jan"
// let birthMonth = discountedMonths.indexOf(userBirthMonth);

// let p = document.getElementById("text");

// if (birthMonth > -1) {
//     p.innerHTML = "Congrats! you are eligible for the discount";
// }
// else {
//     p.innerHTML = "Sorry! no discounts available";
// }









// let discountedMonths = ["jan", "feb", "mar", "apr", "may"];
// let userBirthMonth = prompt("Enter you Birth Month?");

// userBirthMonth = userBirthMonth.toLowerCase();
// userBirthMonth = userBirthMonth.slice(0, 3);

// let birthMonth = false;
// let p = document.getElementById("text");

// for (let i = 0; i < discountedMonths.length; i++) {
//     if(userBirthMonth === discountedMonths[i]) {
//         birthMonth = true;
//         break;
//     }
// }


// if (birthMonth) {
//     p.innerHTML = "Congrats! you are eligible for the discount";
// }
// else {
//     p.innerHTML = "Sorry! no discounts available";
// }









// a quick brown fox jumps over the lazy dog
// prompt
// "  "
// please correct your information it has double spaces!
// yes you are correct!



// let userInput = prompt("Enter your information?");


// for (let i = 0; i < userInput.length; i++) {
//     //                         1, 3
//     let char = userInput.slice(i, i + 2);
//     if (char === "  ") {
//         console.log("please correct your information it has double spaces!");
//     }
// }


// let dummyText = "a quick World War II brown fox jumps over the lazy dog.a quick World War II brown fox jumps over the lazy dog a quick World War II brown fox jumps over the lazy dog";

// let textToBeChanged = "The second world war";

// for (let i = 0; i < dummyText.length; i++) {
//     let char = dummyText.slice(i, i + 12);
//     if (char === "World War II") {
//                           "a quick "      + "The second world war"
//         dummyText = dummyText.slice(0, i) + textToBeChanged + dummyText.slice(i + 12);
//     }
// }

// console.log(dummyText); 






// let dummyText = "a quick World War II brown fox jumps over the lazy dog.a quick World War II brown fox jumps over the lazy dog a quick World War II brown fox jumps over the lazy dog";

// let textToBeChanged = "The second world war";

// let newText = dummyText.replace(/World War II/g, textToBeChanged);
// console.log(newText);


// let foundText = dummyText.indexOf(searchText);

// if (foundText >= 0) {
//     dummyText = dummyText.slice(0, foundText) + textToBeChanged + dummyText.slice(foundText + 12)
//     console.log(dummyText);
// }




// let text = "your name";

// console.log(text.charAt(5));
// console.log(text[5]);
