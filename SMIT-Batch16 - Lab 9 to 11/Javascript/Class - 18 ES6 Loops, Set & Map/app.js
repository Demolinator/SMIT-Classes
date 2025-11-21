// let arr = ["Apple", "Banana", "Kiwi"];

// for (let fruits in arr) {
//     console.log(arr[fruits]);
// }


// let arr = [10, 243, 324, 234, 54, 34, 633, 2];
// let total = 0;

// for (let nums of arr) {
//     total += nums;
// }

// console.log(total);



// let str = "Talal Ahmed".includes("Ahmed");

// console.log(str);


// let para = "Hello! my name is Talal Ahmed. I am a Software engineer."
// let vowels = "aeiouAEIOU";
// let count = 0;

// for (let str of para) {
//     if (vowels.includes(str)) {
//         count++
//     }
// }

// console.log(count);




// let food = ["Burger", "Pizza", "Broast", "Mandi"];


// for (let foods of food) {
//     console.log(`I love ${foods}`);
// }



// let str = "Hello";
// let reversed = "";

// for (let letter of str) {
//     reversed = letter + reversed;
// }

// console.log(reversed);



// let obj = {
//     fullName: "Talal Ahmed",
//     rollNo: 123456
// }

// for (let [keys, values] of Object.entries(obj)) {
//     console.log(`${keys}: ${values}`);
// }

// for (let items in obj) {
//     console.log(`${items}: ${obj[items]}`);
// }




// let marks = {
//     English: 245,
//     Maths: 115,
//     Physics: 100
// }

// let total = 0;

// for (let subject in marks) {
//     total += marks[subject];
// }

// console.log(`Your total marks are: ${total}`);





// let inventory = {
//     apples: 8,
//     banana: 10,
//     kiwi: 15
// }

// for (let items in inventory) {
//     console.log(`there are ${inventory[items]} ${items} left.`);
// }




// let human = {
//     fullName: "Raza Khan",
//     rollNo: 123456,
//     isDisabled: true
// }

// let values = [];

// for (let keys in human) {
//     values.push(human[keys]);
// }

// console.log(values);




// let arr = new Set(["Apples", "Bananas", "Kiwis", "Apples"]);

// let realArr = [...arr];
// realArr.push("Apples")
// console.log(realArr);

// console.log(arr.has("Bananas"));
// console.log(arr.add("Strawberry"));
// console.log(arr.delete("Strawberry"));
// console.log(arr.size);




let human = new Map([
    ["fullName", "Talal Ahmed"],
    ["rollNo", 123456],
    ["isDisabled", false]
]);
// human.clear()
// human.has()
// human.delete("fullName")
console.log(human.keys());