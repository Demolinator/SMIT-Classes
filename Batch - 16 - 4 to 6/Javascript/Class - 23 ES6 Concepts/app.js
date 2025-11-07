// function greet () {
// }

// let firstName = "Talal";
// {
//     var userName = "Talal";
// }
// console.log(userName);

// greet();

// let para =  "Hello Talal!\n How are you?\n I am fine."
// let firstName = "Talal";
// let lastName = "Ahmed";
// let para = `Hello ${firstName} ${lastName}. Here is your ticket.`

// console.log(para);

// Spread/Rest operator ...

// function kuchBhi (a, c, ...b) {
//     console.log(a, c, b);
// }

// function kuchBhi (a, b, c) {
//     console.log(a, b, c);
// }

// kuchBhi(...[true, "Talal", "Khizer"]);

// Arrow function

// function greet () {

// }

// let greet = (a, b) => {
//   a;
// };

// console.log(greet("Talal"));

let arr = [
  {
    name: "sadiq",
    location: "karachi",
    age: 25,
  },
  {
    name: "jabbar",
    location: "lahore",
    age: 30,
  },
  {
    name: "talha",
    location: "islamabad",
    age: 35,
  },
];
console.log(arr);

let newArr = arr.map((value) => {
  return { ...value, rollno: 1530 };
});

console.log(newArr);

let secArr = arr.filter((value) => {
  if (value.age <= 30) {
    return { ...value, rollno: 1530 };
  }
});
console.log(secArr);





let nums = [10,60,48,49,64,17,36,58,42]