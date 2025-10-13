// console.log(true === 1); //  1 === "true"

// primitive Data Types
// stack immutable not changable
// There are 7 primitive data types in javascript

// '', "" string
// 12, 3.45, -30 numbers
// true, false bolean logical yes or no
// let name; undifned create a vairable and leave it empty
// let fullName = null; null create a variable and intentionally keep it empty
// symbol("id")  unique or hidden identifer added
// 9999999999999999n bigInt 16 9007199254740991 


// non primitive
// heap mutable
// object {"name": "Talal Ahmed"} 
// array ["apple", "banana", "Kiwi"]
// function greet () {}



// primitive data types code

// let a = 10;
// let b = a;
// b = 20;
// console.log(a);
// a = 30;
// console.log(a);

// // stack
// a => 10
// b => 20


// non primitve data types

// let person = {
//     name: "Mubeen",
//     age: 19,
//     isStudent: true
// }

// let person1 = person;
// person1.name = "Zaheer"

// console.log(person)


// heap
// person => Ref 23x43
// person1 => Ref 23x43





// console.log(typeof NaN == typeof 2)

// let a = symbol;
// let b = symbol;

// console.log();


// let a = Symbol("id");
// let b = Symbol("id");
// console.log(a + b);


// let a = 3;
// let b = 2n;
// console.log(a + BigInt(b));


// let fruits = ["Apple", "banana", "strawberry"];
// let fruits1 = [...fruits]; // deep copy
// fruits1.push("Kiwi");
// console.log();



// let data = ["text", 23, true, undefined, null, Symbol("id"), 324n, [], {}, function greet() {}];

// for (let i = 0; i < data.length; i++) {
//     console.log(typeof data[i], data[i]);
// }


// let word = "system";
// let rev = "";

// for (let i = word.length - 1; i >= 0; i--) {
//     rev += word[i];
// }

// console.log(rev);

// == value
// === value, datatype

// let a = Symbol("id");
// let b = Symbol("id");

// console.log(a == b);