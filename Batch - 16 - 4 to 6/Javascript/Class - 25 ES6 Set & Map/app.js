// let obj = {
//     fullName : "Talal Ahmed",
//     rollNo : 123456,
//     isDisabled : false
// }
// console.log(Object.entries(obj))

// // for (let [keys, values] of Object.entries(obj)) {
// //     console.log(`${keys}: ${values}`);
// // }

// for (let keys in obj) {
//     console.log(`${keys}`);
// }



// let arr = new Set(["Apple", "Banana", "Kiwi", "Apple"]);

// // console.log(arr.has("Banana"));
// // console.log(arr.add("Strawberry"));
// // console.log(arr.delete("Strawberry"));
// // console.log(arr.size);

// let realArr = [...arr];
// console.log(realArr);




let obj = new Map([
    ["fullName", "Talal Ahmed"],
    ["rollNo", 123456],
    ["isDisabled", true]
])

console.log(typeof obj);