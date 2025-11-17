
// class Student {
//     constructor (userName, rollNo) {
//         this.userName = userName;
//         this.rollNo = rollNo;
//     }

//     attendance = false;

//     isBrightStudent() {
//         console.log("yes this is a bright student " + this.userName);
//     }
// }

// let student1 = new Student("Talal Ahmed", "123456");
// let student2 = new Student("Hussain", "123456");

// student1.isBrightStudent()
// student2.isBrightStudent()
// console.log(student2);


// function greet (name) {
//     this.fullName = name
//     console.log("Hello " + this.fullName);
// }

// let user = {
//    fullName: "Talal Ahmed",
// }




// inheritance
// polymorphism

// class Animal {
//     tail = true;
//     eat() {
//         console.log("eating meat...");
//     }
// }

// class Camel extends Animal {
//     eat () {
//         console.log("eating cactus...");
//     }

//     meow () {
//         console.log("barking...");
//     }
// }

// class Dog extends Animal {
//     constructor (breedName) {
//         super()
//         this.breedName = breedName;
//     }
//     bark () {
//         console.log("barking...");
//     }
// }

// class Cat extends Animal {
//     meow () {
//         console.log("barking...");
//     }
// }

// let cat = new Cat("Germanshepard");
// let camel = new Camel("Germanshepard");
// cat.eat()
// camel.eat()
// console.log(cat)







// Encapsulation

class User {
    constructor (userName, email) {
        this.userName = userName;
        this.email = email;
    }
    
    #password = 1234
    setPassword (password) {
        this.#password = password;
        console.log(`this is your password: ${this.#password}`)
    }

    getPassword () {
        console.log("you cannot get the password...")
    }
}


let mubeen = new User("Mubeen", "mubeen@gmail.com");

mubeen.setPassword("123456")

console.log(mubeen.getPassword());