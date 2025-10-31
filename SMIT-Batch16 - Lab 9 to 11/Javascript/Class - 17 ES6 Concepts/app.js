// function Student (name) {
//     this.name = name
// }

// let student1 = new Student("Mubeen")
// let student2 = new Student("Abdul Sami")
// let student3 = new Student("Mustafa")

// console.log(student1, student2, student3)


// function scope
// function greet () {
//     const firstName = "Talal"
//     if (firstName === "Talal") {
//         var userName = "Talal";
//     }
//     console.log(userName)
// }


// greet();




// block scope
// function greet () {
//     const firstName = "Talal"
//     if (firstName === "Talal") {
//         let userName = "Talal";
//     }
//     console.log(userName)
// }


// greet();


// if (firstName === "Talal") {
//     var userName = "Talal";
// }
// console.log(userName)




// Template Literals

// let para = "we are at the brink of 'world war iii'"
// let para = "hello Talal!\n how are you?\n i am doing good."

// let firstName = "Talal"
// let lastName = "Ahmed"
// let para = `hello ${firstName} ${lastName} here is your ticket.`;


// console.log(para);


// Spread/Rest operator  ...

// function add (a, ...b) {
//     console.log(a, b);
// }

// add("Hello", true, "Talal", "Mubeen", true, "Talal", "Mubeen");


// function greet (firstName, lastName, surName) {
//     console.log(`hello ${firstName} ${lastName} ${surName}`);
// }

// greet(...["Talal", "Ahmed", "Ahmed"])


// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// let fullArr = [...arr1, ...arr2];

// console.log(fullArr)

// let human = {name: "Talal"};
// let human1 = {name1: "Ahmed"};

// let bothHuman = {...human, ...human1}

// console.log(bothHuman);



// function greet () {

// }

// let greet = (a, b) => {a + b};

// console.log(greet("Talal", " Ahmed"))
