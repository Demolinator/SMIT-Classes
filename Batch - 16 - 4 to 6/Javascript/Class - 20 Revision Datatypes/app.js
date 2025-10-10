// 7 Primitive Data Types
// immutable data types
// Stack 
// '', "" string 
// 20, 3.14, -30 number
// true, flase bolean logical yes or no
// let name; undfined  leaving the variable empty
// let userName = null; null explicitly left empty
// symbol("id") id, unique, Hidden
// bigInt 999999999999n

// 3 non primitive Data Types
// mutable data types
// Heap
// array ["apple", "banana", "kiwi"]
// object {name: "Taha", age: 20}
// function greet () {}


// primitive data type
// immutable data type
// let a = 10;
// let b = a;
// b = 20;
// // a = 30
// console.log(a, b);

// stack memory
// a => 30
// b => 20

// non primitive data types 
// mutable data type
// let person = {
//     name: "Moiz",
//     age: 23,
//     isStudent: true
// }

// let person1 = person;
// person1.name = "Taha";
// console.log(person);

// heap memory
// person => Ref 23x235
// person1 => Ref 23x235

// == value
// === value aur DataType



// let fruits = ["Apple", "Banana", "Strawberry"];
// let fruits1 = [...fruits]; // deep copy
// fruits1.push("Kiwi");
// console.log(fruits1);

// let data = ["text", 34, true, undefined, null, 234n, Symbol("id"), [], {}, function greet () {}];

// for (let i = 1; i <= data.length - 2; i++) {
//     console.log(typeof data[i], data.length, i);
// }
 

// console.log(typeof data[0])
// console.log(typeof data[1])
// console.log(typeof data[2])
// console.log(typeof data[3])
// console.log(typeof data[4])
// console.log(typeof data[5])
// console.log(typeof data[6])
// console.log(typeof data[7])
// console.log(typeof data[8])
// console.log(typeof data[9])



let userInput = prompt("Enter Text");
let rev = "";

//            (4            >=         0) 4 - 1
for (let i = userInput.length - 1; i >= 0; i--) {
    rev += userInput[i];
}

console.log(rev);

