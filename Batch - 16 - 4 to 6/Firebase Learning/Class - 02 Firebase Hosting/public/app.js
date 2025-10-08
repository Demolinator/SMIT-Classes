// 7 Primitive Data Types
// immutable data types
// Stack 
// '', "" string 
// 20, 3.14, -30 number
// true, flase bolean
// let name; undfined  
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
let a = 10;
let b = a;
b = 20;
a = 30
console.log(a, b);

// stack memory
a => 30
b => 20

// non primitive data types 
// mutable data type
let person = {
    name: "Moiz",
    age: 23,
    isStudent: true
}

let person1 = person;
person1.name = "Taha";
console.log(person);

// heap memory
// person => Ref 23x235
// person1 => Ref 23x235

