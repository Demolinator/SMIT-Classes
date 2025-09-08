// let stdArr = [{}, {}];

// function Students (stdName, rollNo, phone) {
//     this.name = stdName;
//     this.rollNo = rollNo;
//     this.phone = phone;
//     this.greetUser = function (name) {
//         console.log("Hello " + name)
//     }
// }

// let std1 = new Students("Hassan", "324523", "03115235234");
// let std2 = new Students("Afnan", "324523", "03115235234");
// let std3 = new Students("Ali", "324523", "03115235234");


// let std1 = new Students(stdName.value, rolNo.value, phone.value);

// console.log(std1.name);
// std2.greetUser("Talal");
// console.log(std3);








// let cars = {
//     model: "Toyota",
//     price: 8500000,
//     color: "black",
//     start: function () {
//         console.log("started...")
//     }
// }

// delete cars.price;

// if ("price" in cars) {
//     console.log(cars.model + " is available for sale");
// }
// else {
//     console.log(cars.model + " is not available for sale");
// }

// console.log(cars);
// for (let props in cars) {
//     // console.log(props)
//     console.log(cars[props])
// }


// let carsArr = ["Toyota", "Honda", "Hundai"];

// for (let i = 0; i < carsArr.length; i++)


// let basicPlan = {
//     price: 234,
//     month: "july"
// }   // 10%

// let professionalPlan = {
//     price: 2344,
//     month: "August"
// }   // 12%

// let ultimatePlan = {
//     price: 23434,
//     month: "December"
// }   // 15%




// function Students (stdName, rollNo, phone, attendance) {
//     this.name = stdName;
//     this.rollNo = rollNo;
//     this.phone = phone;
//     this.greetUser = function (name) {
//         console.log("Hello " + name)
//     }
//     this.attendance = attendance
// }


// let std1 = new Students("Hassan", "324523", "03115235234");
// let std2 = new Students("Afnan", "324523", "03115235234");
// let std3 = new Students("Ali", "324523", "03115235234");

// Students.prototype.attendance = false
// std1.attendance = true
// std1.attendance = false

// // let std1 = new Students(stdName.value, rolNo.value, phone.value);

// console.log(std1, std2, std3);



// let plan1 = {
//     price: 234,
//     desc: "xyz",
// }

// function Students (stdName, rollNo, phone) {
//     this.name = stdName;
//     this.rollNo = rollNo;
//     this.phone = phone;
//     this.greetUser = function (name) {
//         console.log("Hello " + name)
//     }
// }

// Students.prototype.calcAnnual = function () {
//     console.log("Calculated")
// }

// // let gotTheProperty = "calcAnnual" in plan1;

// console.log(Students.hasOwnProperty("calcAnnual"));
